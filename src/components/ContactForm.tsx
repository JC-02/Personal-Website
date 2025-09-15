import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init({
        publicKey: publicKey,
      });
    }
  }, []);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      if (!form.current) {
        throw new Error('Form reference not available');
      }

      await emailjs.sendForm(serviceId, templateId, form.current);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 shadow-lg ${
                errors.name ? 'border-red-400' : ''
              }`}
              placeholder="Your name"
              required
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 shadow-lg ${
                errors.email ? 'border-red-400' : ''
              }`}
              placeholder="your@email.com"
              required
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="organization" className="block text-white text-sm font-medium mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 shadow-lg"
            placeholder="Your organization (optional)"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 resize-vertical shadow-lg ${
              errors.message ? 'border-red-400' : ''
            }`}
            placeholder="What's on your mind? Share your thoughts, ideas, or just say hello..."
            required
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/50 shadow-lg">
            <p className="text-green-400">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/50 shadow-lg">
            <p className="text-red-400">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
