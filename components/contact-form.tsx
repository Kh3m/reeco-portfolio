"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type ContactState } from "@/app/actions/contact";
import { contact } from "@/content/site";
import { Arrow, Icon } from "./ui";

const initial: ContactState = { status: "idle" };

const inputCls =
  "w-full rounded-xl border bg-card px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink/50 focus:outline-none aria-[invalid=true]:border-red-400";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const startedRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedRef.current && !startedRef.current.value)
      startedRef.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-card p-8 text-center sm:p-12"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold text-dark">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="mt-5 text-2xl font-bold tracking-tight">
          {contact.success.title}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          {contact.success.body}
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form
      action={action}
      noValidate
      className="relative rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      {/* Spam protection */}
      <input ref={startedRef} type="hidden" name="started_at" defaultValue="" />
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={e.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={!!e.name}
            className={`${inputCls} border-line`}
          />
        </Field>
        <Field label="Business email" name="email" error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={!!e.email}
            className={`${inputCls} border-line`}
          />
        </Field>
        <Field label="Company name" name="company" optional>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            defaultValue={v.company}
            className={`${inputCls} border-line`}
          />
        </Field>
        <Field label="Industry" name="industry" error={e.industry}>
          <div className="relative">
            <select
              id="industry"
              name="industry"
              required
              defaultValue={v.industry ?? ""}
              aria-invalid={!!e.industry}
              className={`${inputCls} border-line appearance-none pr-10`}
            >
              <option value="" disabled>
                Select…
              </option>
              {contact.industries.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            >
              <path
                d="M2 3.5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Field>
        <div className="sm:col-span-2">
          <fieldset>
            <legend className="mb-2 text-sm font-semibold">
              What do you need help with?
            </legend>
            <div className="flex flex-wrap gap-2">
              {contact.needs.map((n) => (
                <label key={n} className="cursor-pointer">
                  <input
                    type="radio"
                    name="need"
                    value={n}
                    defaultChecked={v.need === n}
                    className="peer sr-only"
                  />
                  <span className="inline-block rounded-full border border-line bg-bg px-3.5 py-2 text-sm font-medium transition-colors peer-checked:border-dark peer-checked:bg-dark peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-gold">
                    {n}
                  </span>
                </label>
              ))}
            </div>
            {e.need && <p className="mt-1.5 text-sm text-red-600">{e.need}</p>}
          </fieldset>
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-dark px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-dark-2 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send enquiry"}
        {!pending && (
          <Arrow className="text-gold-ink transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label}{" "}
        {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
