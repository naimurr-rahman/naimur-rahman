"use client";

import { useState } from "react";
import Glass from "./Glass";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 🔥 important
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent ✅");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Network error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 text-center"
    >
      <Glass>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Contact
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Name"
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Message"
              rows={4}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 text-black py-3 rounded-lg hover:scale-105 transition font-bold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Glass>
    </section>
  );
}