import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_CONFIG } from "@/constants";

const ImageClipBox = ({
  src,
  alt,
  clipClass,
}: {
  src: string;
  alt: string;
  clipClass?: string;
}) => (
  <div className={clipClass}>
    <img src={src} alt={alt} className="object-cover" />
  </div>
);

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate email sending (replace with emailjs in production)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-6 md:px-10">
      <div className="relative rounded-2xl bg-dark-200 py-24 text-blue-50 overflow-hidden border border-white/5">
        {/* Decorative clip-path images (repo7 pattern) */}
        <div className="absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 opacity-30">
          <ImageClipBox
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400"
            alt="Decorative"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400"
            alt="Decorative"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
              {CONTACT_CONFIG.subtitle}
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Let's b<span className="gradient-text">u</span>ild
              <br />
              something <span className="gradient-text">a</span>mazing
            </h2>
          </motion.div>

          {/* Form (repo1 pattern) */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {(Object.keys(CONTACT_CONFIG.form) as Array<keyof typeof CONTACT_CONFIG.form>).map(
              (key) => {
                const { span, placeholder } = CONTACT_CONFIG.form[key];
                const isTextarea = key === "message";

                return (
                  <label key={key} className="flex flex-col gap-2">
                    <span className="text-sm font-mono text-white/50 uppercase tracking-wider">
                      {span}
                    </span>
                    {isTextarea ? (
                      <textarea
                        name={key}
                        value={form[key]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        rows={6}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-accent/40 focus:shadow-[0_0_20px_rgba(0,240,255,0.05)] resize-none font-body"
                      />
                    ) : (
                      <input
                        type={key === "email" ? "email" : "text"}
                        name={key}
                        value={form[key]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-accent/40 focus:shadow-[0_0_20px_rgba(0,240,255,0.05)] font-body"
                      />
                    )}
                  </label>
                );
              }
            )}

            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative px-8 py-4 rounded-xl overflow-hidden font-general text-xs uppercase tracking-widest text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, #00f0ff, #915EFF)",
                }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {success && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-accent text-sm font-mono"
                >
                  ✓ Message sent!
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
