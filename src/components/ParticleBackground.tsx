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
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
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
      // Reset particle to safe values
      particle.x = Math.random() * width;
      particle.y = Math.random() * height;
      particle.vx = particle.baseVx;
      particle.vy = particle.baseVy;
      return;
    }

    // Mouse influence with 2x speed effect
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

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Boundary checks with smooth bouncing
    if (particle.x < 0 || particle.x > width) {
      particle.vx *= -0.8;
      particle.x = Math.max(0, Math.min(width, particle.x));
    }
    if (particle.y < 0 || particle.y > height) {
      particle.vy *= -0.8;
      particle.y = Math.max(0, Math.min(height, particle.y));
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

    // Draw connections (optimize for mobile by reducing connection checks)
    const maxConnections = isMobile ? 50 : 100;
    let connectionCount = 0;

    for (let i = 0; i < particles.length && connectionCount < maxConnections; i++) {
      for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          drawConnection(ctx, particles[i], particles[j], distance);
          connectionCount++;
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticle, drawParticle, drawConnection, CONNECTION_DISTANCE, isMobile]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
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
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, handleMouseMove, handleResize, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #1e1e3f 30%, #2a2a5f 60%, #3d3d7f 100%)'
      }}
    />
  );
};

export default ParticleBackground;
