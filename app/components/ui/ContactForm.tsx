"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  BsPerson,
  BsEnvelope,
  BsChatLeftText,
  BsChatQuote,
  BsSend,
} from "react-icons/bs";

const schema = z.object({
  name:     z.string().min(2, "Name must be at least 2 characters"),
  email:    z.string().email("Please enter a valid email address"),
  subject:  z.string().min(3, "Subject must be at least 3 characters"),
  message:  z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.status === "success") {
        setStatus("success");
        setServerMsg(json.message);
        reset();
      } else {
        setStatus("error");
        setServerMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please check your connection and try again.");
    }
  };

  const inputClass = (hasError: boolean) =>
    [
      "w-full px-3 py-2 rounded-md border text-sm text-[var(--color-text)] bg-white",
      "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent",
      "transition-colors duration-200",
      hasError
        ? "border-[var(--color-danger)]"
        : "border-[var(--color-border)] hover:border-[var(--color-primary)]",
    ].join(" ");

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/15 flex items-center justify-center animate-[fadeIn_0.5s_ease_forwards]">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[var(--color-success)]" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div className="animate-[fadeInUp_0.5s_ease_0.2s_forwards] opacity-0">
          <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-1">Message sent!</h3>
          <p className="text-sm text-[var(--color-text-light)]">{serverMsg}</p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs text-[var(--color-primary)] hover:underline animate-[fadeIn_0.5s_ease_0.4s_forwards] opacity-0"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="absolute opacity-0 h-0 w-0 overflow-hidden"
        {...register("honeypot")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5 flex items-center gap-1.5">
            <BsPerson size={14} /> Your Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-[var(--color-danger)]">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5 flex items-center gap-1.5">
            <BsEnvelope size={14} /> Your Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[var(--color-danger)]">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5 flex items-center gap-1.5">
          <BsChatLeftText size={14} /> Subject
        </label>
        <input
          type="text"
          placeholder="Subject"
          className={inputClass(!!errors.subject)}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-[var(--color-danger)]">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text-heading)] mb-1.5 flex items-center gap-1.5">
          <BsChatQuote size={14} /> Message
        </label>
        <textarea
          rows={6}
          placeholder="Message"
          className={inputClass(!!errors.message) + " resize-none"}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[var(--color-danger)]">{errors.message.message}</p>
        )}
      </div>

      {/* Status messages */}
      {status === "loading" && (
        <p className="text-sm text-[var(--color-text-light)] animate-pulse">Sending…</p>
      )}
      {status === "success" && (
        <p className="text-sm text-[var(--color-success)] font-medium">{serverMsg}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-[var(--color-danger)]">{serverMsg}</p>
      )}

      <div className="text-center pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[rgba(124,58,237,0.5)] text-[var(--color-text-heading)] text-sm font-medium bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
        >
          <BsSend size={14} />
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
