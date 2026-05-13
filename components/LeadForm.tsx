"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

type FormState = "idle" | "submitting" | "success" | "error";

interface LeadFormProps {
  defaultService?: string;
}

export function LeadForm({ defaultService }: LeadFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      setState("success");
      e.currentTarget.reset();
    } catch (err) {
      setState("error");
      setErrorMsg("Something went wrong. Please call us directly.");
    }
  }

  if (state === "success") {
    return (
      <div className="w-full">
        <ReviewsBadge />
        <div
          className="card-press relative overflow-hidden rounded-lg p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="absolute inset-x-0 top-0 h-[5px] bg-[#14b8a6]" />
          <div className="text-4xl mb-3" aria-hidden>
            ✓
          </div>
          <h3 className="font-display text-2xl mb-2">Got it. We're on it.</h3>
          <p className="text-ink-muted mb-4">
            A real human will reach out within 30 minutes during business hours,
            or within 2 hours overnight.
          </p>
          <p className="text-sm text-ink-muted">
            Need help right now?{" "}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="font-semibold text-forest underline underline-offset-2"
            >
              Call {siteConfig.business.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ReviewsBadge />
      <form
        onSubmit={handleSubmit}
        className="card-press relative overflow-hidden rounded-lg p-7 sm:p-8 space-y-4"
        noValidate
      >
        <div className="absolute inset-x-0 top-0 h-[5px] bg-[#14b8a6]" />

        <h3 className="text-2xl sm:text-3xl font-semibold text-ink text-center uppercase pt-2 pb-2 tracking-[0.12em]">
          Get a Free Quote
        </h3>

        <div>
          <label htmlFor="service" className="sr-only">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService || ""}
            className="input-field"
          >
            <option value="" disabled>
              Service Type
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="address" className="sr-only">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="Address"
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="zip" className="sr-only">
              ZIP code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{5}"
              autoComplete="postal-code"
              placeholder="ZIP code"
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredDate" className="sr-only">
            Preferred date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone Number"
            className="input-field"
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-quote w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Request Quote"}
        </button>

        {state === "error" && (
          <p className="text-sm text-red-700" role="alert">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}

function ReviewsBadge() {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      <GoogleG />
      <span className="font-semibold text-ink text-lg">
        {siteConfig.business.rating.value.toFixed(1)}
      </span>
      <span aria-label={`${siteConfig.business.rating.value.toFixed(1)} out of 5 stars`} className="flex gap-0.5 text-[#fbbc04] text-lg leading-none">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </span>
    </div>
  );
}

function GoogleG() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 48 48"
      aria-label="Google"
      role="img"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
