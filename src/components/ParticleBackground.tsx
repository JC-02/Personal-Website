import type React from 'react';
import { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseVx: number;
  baseVy: number;
}

interface MousePosition {
  x: number;
  y: number;
  isActive: boolean; // Track if cursor effects should be active
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0, isActive: false });
  const animationRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic settings based on device
  const PARTICLE_COUNT = isMobile ? 60 : 170; // Doubled from 85 to 170 for desktop
  const CONNECTION_DISTANCE = isMobile ? 100 : 140;
  const MOUSE_INFLUENCE_DISTANCE = isMobile ? 120 : 200; // Increased for better swarming
  const MOUSE_INFLUENCE_STRENGTH = isMobile ? 0.03 : 0.08; // Increased for 2x speed effect
  const BASE_SPEED_MULTIPLIER = isMobile ? 0.3 : 0.6;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const baseVx = (Math.random() - 0.5) * BASE_SPEED_MULTIPLIER;
      const baseVy = (Math.random() - 0.5) * BASE_SPEED_MULTIPLIER;
      
      // Initialize particles across the full screen for a fuller look
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * (isMobile ? 2 : 2.5) + (isMobile ? 1 : 1.5),
      });
    }
    particlesRef.current = particles;
  }, [PARTICLE_COUNT, BASE_SPEED_MULTIPLIER, isMobile]);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    // Validate particle properties
    if (!Number.isFinite(particle.x) || !Number.isFinite(particle.y) || !Number.isFinite(particle.size) || particle.size <= 0) {
      return;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

    // Create a glowing effect with validation
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 2
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

    ctx.fillStyle = gradient;
    ctx.fill();
  }, []);

  const drawConnection = useCallback((
    ctx: CanvasRenderingContext2D,
    p1: Particle,
    p2: Particle,
    distance: number
  ) => {
    const opacity = Math.max(0, 1 - distance / CONNECTION_DISTANCE);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * (isMobile ? 0.3 : 0.4)})`;
    ctx.lineWidth = isMobile ? 0.6 : 0.8;
    ctx.stroke();
  }, [CONNECTION_DISTANCE, isMobile]);

  const updateParticle = useCallback((particle: Particle, width: number, height: number) => {
    // Validate inputs
    if (!Number.isFinite(particle.x) || !Number.isFinite(particle.y) || !Number.isFinite(particle.vx) || !Number.isFinite(particle.vy)) {
      // Reset particle to larger center area for better distribution
      particle.x = width * 0.2 + Math.random() * width * 0.6;
      particle.y = height * 0.2 + Math.random() * height * 0.6;
      particle.vx = particle.baseVx;
      particle.vy = particle.baseVy;
      return;
    }

    // Mouse influence with 2x speed effect - only when mouse is active
    if (mouseRef.current.isActive) {
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_INFLUENCE_DISTANCE && distance > 0) {
        const force = (MOUSE_INFLUENCE_DISTANCE - distance) / MOUSE_INFLUENCE_DISTANCE;
        const forceX = (dx / distance) * force * MOUSE_INFLUENCE_STRENGTH;
        const forceY = (dy / distance) * force * MOUSE_INFLUENCE_STRENGTH;

        if (Number.isFinite(forceX) && Number.isFinite(forceY)) {
          // Apply 2x speed when influenced by mouse
          particle.vx += forceX * 2;
          particle.vy += forceY * 2;
        }
      }
    }

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Enhanced boundary behavior - larger margin and bigger respawn area
    const edgeMargin = 100; // Increased margin so particles travel further before respawning
    let shouldRespawn = false;

    if (particle.x < -edgeMargin || particle.x > width + edgeMargin || 
        particle.y < -edgeMargin || particle.y > height + edgeMargin) {
      shouldRespawn = true;
    }

    if (shouldRespawn) {
      // Respawn in a larger central area (20% to 80% of screen) for better distribution
      particle.x = width * 0.2 + Math.random() * width * 0.6;
      particle.y = height * 0.2 + Math.random() * height * 0.6;
      // Reset velocity to base values
      particle.vx = particle.baseVx;
      particle.vy = particle.baseVy;
    }

    // Apply friction and gradually return to base velocity
    particle.vx = particle.vx * 0.98 + particle.baseVx * 0.02;
    particle.vy = particle.vy * 0.98 + particle.baseVy * 0.02;
  }, [MOUSE_INFLUENCE_DISTANCE, MOUSE_INFLUENCE_STRENGTH]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    const particles = particlesRef.current;
    for (const particle of particles) {
      updateParticle(particle, width, height);
      drawParticle(ctx, particle);
    }

    // Enhanced web-like connection system
    const maxTotalConnections = Math.floor(particles.length * 0.8); // Increased to 80% for more web-like density
    const maxMouseConnections = isMobile ? 15 : 25; // Connections to mouse
    let totalConnections = 0;
    let mouseConnections = 0;

    // First pass: Draw mouse-influenced connections (only when active and position is valid)
    if (mouseRef.current.isActive && 
        Number.isFinite(mouseRef.current.x) && 
        Number.isFinite(mouseRef.current.y)) {
      for (let i = 0; i < particles.length && mouseConnections < maxMouseConnections && totalConnections < maxTotalConnections; i++) {
        const particle = particles[i];
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE * 0.8) { // Slightly smaller range for mouse connections
          // Draw connection to mouse position (invisible endpoint)
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          const opacity = Math.max(0, 1 - distance / (CONNECTION_DISTANCE * 0.8));
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * (isMobile ? 0.4 : 0.5)})`;
          ctx.lineWidth = isMobile ? 0.8 : 1;
          ctx.stroke();
          
          mouseConnections++;
          totalConnections++;
        }
      }
    }

    // Second pass: Enhanced inter-node web connections
    // Create multiple connection passes for more web-like density
    const connectionPasses = 3; // Multiple passes to create layered web effect
    
    for (let pass = 0; pass < connectionPasses && totalConnections < maxTotalConnections; pass++) {
      const passConnectionDistance = CONNECTION_DISTANCE * (1 - pass * 0.2); // Decreasing distance each pass
      const passOpacity = (isMobile ? 0.3 : 0.4) * (1 - pass * 0.3); // Decreasing opacity each pass
      
      for (let i = 0; i < particles.length && totalConnections < maxTotalConnections; i++) {
        let particleConnections = 0;
        const maxConnectionsPerParticle = 4 - pass; // Fewer connections in later passes
        
        for (let j = i + 1; j < particles.length && totalConnections < maxTotalConnections && particleConnections < maxConnectionsPerParticle; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < passConnectionDistance) {
            const opacity = Math.max(0, 1 - distance / passConnectionDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * passOpacity})`;
            ctx.lineWidth = (isMobile ? 0.6 : 0.8) * (1 - pass * 0.2);
            ctx.stroke();
            
            totalConnections++;
            particleConnections++;
          }
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticle, drawParticle, drawConnection, CONNECTION_DISTANCE, isMobile]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const BUFFER_ZONE = 8; // 8px buffer around content elements and window borders

    // Check if mouse is near window borders (within 8px)
    if (event.clientX < BUFFER_ZONE || event.clientY < BUFFER_ZONE || 
        event.clientX > window.innerWidth - BUFFER_ZONE || 
        event.clientY > window.innerHeight - BUFFER_ZONE) {
      mouseRef.current.isActive = false;
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Update position
    mouseRef.current.x = x;
    mouseRef.current.y = y;

    // Check what element is actually under the cursor
    const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
    
    if (!elementUnderCursor) {
      mouseRef.current.isActive = false;
      return;
    }

    // Simplified approach: check for specific content containers with buffer zones
    const isNearContentElement = () => {
      // Only check for key content containers that actually have visible content
      const contentContainers = [
        '.container',           // Main content containers
        '.bg-white',           // White blocks (JORDAN)
        '.bg-black',           // Black blocks (COWAN)
        '.bg-white\\/5'        // Semi-transparent content cards
      ];

      for (const selector of contentContainers) {
        try {
          const elements = document.querySelectorAll(selector);
          
          for (const element of elements) {
            const elementRect = element.getBoundingClientRect();
            
            // Skip elements that are not visible in viewport
            if (elementRect.width === 0 || elementRect.height === 0) continue;
            if (elementRect.bottom < 0 || elementRect.top > window.innerHeight) continue;
            if (elementRect.right < 0 || elementRect.left > window.innerWidth) continue;
            
            // Check if mouse is within buffer zone of this element
            const isNearElement = (
              event.clientX >= elementRect.left - BUFFER_ZONE &&
              event.clientX <= elementRect.right + BUFFER_ZONE &&
              event.clientY >= elementRect.top - BUFFER_ZONE &&
              event.clientY <= elementRect.bottom + BUFFER_ZONE
            );
            
            if (isNearElement) {
              return true;
            }
          }
        } catch (e) {
          continue;
        }
      }
      
      return false;
    };

    // Check if cursor is over background/canvas areas
    const isOverBackground = (
      elementUnderCursor === canvas || 
      elementUnderCursor === document.body ||
      elementUnderCursor.tagName === 'HTML' ||
      elementUnderCursor.className?.includes('min-h-screen') || // Section backgrounds
      !elementUnderCursor.className || // Elements without classes (likely background)
      elementUnderCursor.tagName === 'MAIN' ||
      elementUnderCursor.tagName === 'DIV' && !elementUnderCursor.className
    );

    // Check if cursor is directly over content elements
    const isOverContent = (
      // Direct element checks
      elementUnderCursor !== canvas &&
      elementUnderCursor !== document.body &&
      elementUnderCursor.tagName !== 'HTML' &&
      elementUnderCursor.tagName !== 'MAIN' &&
      // Check for specific content indicators
      (elementUnderCursor.tagName === 'H1' ||
       elementUnderCursor.tagName === 'H2' ||
       elementUnderCursor.tagName === 'H3' ||
       elementUnderCursor.tagName === 'P' ||
       elementUnderCursor.tagName === 'SPAN' ||
       elementUnderCursor.tagName === 'A' ||
       elementUnderCursor.tagName === 'BUTTON' ||
       elementUnderCursor.tagName === 'DIV' && elementUnderCursor.className && (
         elementUnderCursor.className.includes('bg-white') ||
         elementUnderCursor.className.includes('bg-black') ||
         elementUnderCursor.className.includes('bg-white/5') ||
         elementUnderCursor.className.includes('bg-white/10') ||
         elementUnderCursor.className.includes('container') ||
         elementUnderCursor.className.includes('border-') ||
         elementUnderCursor.className.includes('px-') ||
         elementUnderCursor.className.includes('py-') ||
         elementUnderCursor.className.includes('p-') ||
         elementUnderCursor.className.includes('backdrop-blur')
       ) ||
       elementUnderCursor.tagName === 'NAV' ||
       elementUnderCursor.closest('nav') ||
       elementUnderCursor.closest('.container') ||
       elementUnderCursor.closest('[class*="bg-white"]') ||
       elementUnderCursor.closest('[class*="bg-black"]'))
    );

    // Only activate if within canvas bounds AND not over content
    const isWithinCanvas = x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height;
    mouseRef.current.isActive = isWithinCanvas && !isOverContent;
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Completely deactivate when mouse leaves the window
    mouseRef.current.isActive = false;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(canvas.width, canvas.height);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    initParticles(canvas.width, canvas.height);

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    
    // Handle visibility and focus changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        mouseRef.current.isActive = false;
      }
    };
    
    const handleWindowBlur = () => {
      mouseRef.current.isActive = false;
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [animate, handleMouseMove, handleMouseLeave, handleResize, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      data-particle-canvas="true"
      style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #1e1e3f 30%, #2a2a5f 60%, #3d3d7f 100%)',
        pointerEvents: 'auto'
      }}
    />
  );
};

export default ParticleBackground;
