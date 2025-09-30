"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const initialState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  // Check if EmailJS is configured
  const isEmailJSConfigured = () => {
    return !!(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "All fields are required." });
      return false;
    }
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (!emailRegex.test(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }
    setStatus({ type: null, message: "" });
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    // Check EmailJS configuration
    if (!isEmailJSConfigured()) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please contact us directly at jiridavidpromise@gmail.com",
      });
      return;
    }

    setLoading(true);
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Template parameters for EmailJS
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        to_name: "Arix Innovations",
        to_email: "jiridavidpromise@gmail.com",
        message: form.message,
        reply_to: form.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message:
          "Message sent successfully! We'll be in touch within 24 hours.",
      });
      setForm(initialState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please contact us directly at jiridavidpromise@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
        >
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
          placeholder="Tell us about your vision, timeline, and desired outcomes."
        />
      </div>
      {status.type && (
        <p
          className={`text-sm ${
            status.type === "error" ? "text-red-400" : "text-emerald-400"
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
