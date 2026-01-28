import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { ParticleBackground } from '../components/ParticleBackground';
import { FloatingCard } from '../components/FloatingCard';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const email = 'santhoshkrish0205@gmail.com'; // Update with your actual email

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      action: () => copyToClipboard(email),
      color: 'blue',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/santhosh-krishnamoorhty-b8bab724a/', // Update with your actual LinkedIn
      color: 'blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/Santhosh0205', // Update with your actual GitHub
      color: 'gray',
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setSubmitError(data.error || 'Failed to send message');
      }
    } catch {
      setSubmitError('Unable to connect to server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 relative">
      {/* Particle Background */}
      <ParticleBackground particleCount={30} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss your next project or collaboration opportunity
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <FloatingCard>
                <div className="p-4 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                    Contact Methods
                  </h2>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.button
                        key={method.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={
                          method.action || (() => method.link && window.open(method.link, '_blank'))
                        }
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all group"
                      >
                        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                          <method.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white text-sm md:text-base">
                            {method.label}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
                            {method.value}
                          </div>
                        </div>
                        {method.label === 'Email' && (
                          <div className="text-gray-400">
                            {copiedEmail ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </FloatingCard>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Chennai,India | Remote</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 border border-purple-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Usually within 24 hours</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 border border-green-200 dark:border-gray-700">
                  <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Open to Opportunities
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Currently open to freelance projects, collaborations, and full-time
                    opportunities.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Available for new projects</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FloatingCard>
                <div className="p-4 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-medium shadow-lg shadow-amber-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={formSubmitted || isSubmitting}
                    >
                      {formSubmitted ? (
                        <span className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5" />
                          Message Sent!
                        </span>
                      ) : isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm"
                    >
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
