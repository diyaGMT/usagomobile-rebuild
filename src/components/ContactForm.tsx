"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Something went wrong.");
      }

      setStatus("submitted");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-lg bg-brand-light p-6 text-brand-dark">
        <p className="font-heading text-xl font-semibold">Thanks — we got it.</p>
        <p className="mt-2 text-brand-gray">
          A member of our franchise team will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-dark">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded border border-black/10 px-4 py-2 focus:border-brand-red focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-black/10 px-4 py-2 focus:border-brand-red focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded border border-black/10 px-4 py-2 focus:border-brand-red focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded border border-black/10 px-4 py-2 focus:border-brand-red focus:outline-none"
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-brand-gray">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          By submitting, I consent to receive automated marketing calls
          (including prerecorded/artificial voice), SMS/MMS text/multimedia
          messages, and emails from USA GoMobile.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-brand-red">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded bg-brand-red px-6 py-3 font-heading text-lg font-semibold tracking-wide text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
