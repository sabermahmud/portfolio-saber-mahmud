"use client";

import { cn } from "cn";
import Image from "next/image";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
  useState,
} from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const CONTACT_EMAIL = "sabermahmud01@gmail.com";

/** TODO: replace with your real phone number before deploying. */
const PHONE = "+880 1606093319";
const SECONDPHONE = "+966 533447412"
const PROFILE = {
  name: "Saber Mahmud",
  role: "Web Developer",
  image: "/images/profile.png",
  bio: "I'm available for freelance work as well as full-time opportunities. Reach out via the form or contact me directly — I'll get back to you as soon as I can.",
};

const SOCIALS = [
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, Icon: FiMail },
  { label: "GitHub", href: "https://github.com/sabermahmud", Icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-mahmud",
    Icon: FiLinkedin,
  },
  { label: "X", href: "https://x.com/SaberMahmud01", Icon: FaXTwitter },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sabermahmud",
    Icon: SiLeetcode,
  },
];

/** Shared classes for every text input / textarea in the form. */
const INPUT_CLASSES =
  "w-full rounded-md bg-transparent px-4 text-sm text-white placeholder:text-white/30 outline-none";

/* ------------------------------------------------------------------ */
/* Form logic                                                          */
/* ------------------------------------------------------------------ */

type FormValues = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (
    values.phone.trim() &&
    !/^[+()\-.\s\d]{6,20}$/.test(values.phone.trim())
  ) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
}

function buildMailto(values: FormValues): string {
  const body = [
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim() || "-"}`,
    `Email: ${values.email.trim()}`,
    "",
    values.message.trim(),
  ].join("\n");

  const subject = `[Portfolio] ${values.subject.trim()}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type ContactProps = {
  className?: string;
};

export function Contact({ className }: ContactProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const updateField =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setStatus("idle");
    };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Open the visitor's mail client with a pre-filled message.
    window.location.href = buildMailto(values);
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn("scroll-mt-20 bg-[#0f0f0f] py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* ---------------- Section header ---------------- */}
        <div className="text-center">
          <p className="text-[13px] font-bold tracking-[0.28em] text-amber-500 uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Contact With Me
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          {/* ---------------- Profile card ---------------- */}
          <aside className="rounded-xl border border-white/[0.06] bg-[#161616] p-6 sm:p-8">
            <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#1a1a1a]">
              <Image
                src={PROFILE.image}
                alt={PROFILE.name}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {PROFILE.name}
            </h3>
            <p className="mt-1 text-sm text-white/50">{PROFILE.role}</p>
            <p className="mt-4 text-sm leading-[1.9] text-white/60">
              {PROFILE.bio}
            </p>

            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="inline text-white/50">Phone: </dt>
                <dd className="inline text-white/85">
                  <a
                    href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-amber-400"
                  >
                    {PHONE}, {SECONDPHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline text-white/50">Email: </dt>
                <dd className="inline text-white/85">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-amber-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-[11px] font-bold tracking-[0.22em] text-white/50 uppercase">
              Find with me
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-12 place-items-center rounded-lg border border-white/10 bg-[#151515] text-lg text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </aside>

          {/* ---------------- Form card ---------------- */}
          <div className="rounded-xl border border-white/[0.06] bg-[#161616] p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label="Your Name"
                  error={errors.name}
                  input={
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className={cn(INPUT_CLASSES, "h-12")}
                      value={values.name}
                      onChange={updateField("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                    />
                  }
                />
                <Field
                  id="contact-phone"
                  label="Phone Number"
                  error={errors.phone}
                  input={
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={cn(INPUT_CLASSES, "h-12")}
                      value={values.phone}
                      onChange={updateField("phone")}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "contact-phone-error" : undefined
                      }
                    />
                  }
                />
                <Field
                  id="contact-email"
                  label="Email"
                  error={errors.email}
                  className="sm:col-span-2"
                  input={
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className={cn(INPUT_CLASSES, "h-12")}
                      value={values.email}
                      onChange={updateField("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                    />
                  }
                />
                <Field
                  id="contact-subject"
                  label="Subject"
                  error={errors.subject}
                  className="sm:col-span-2"
                  input={
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      className={cn(INPUT_CLASSES, "h-12")}
                      value={values.subject}
                      onChange={updateField("subject")}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? "contact-subject-error" : undefined
                      }
                    />
                  }
                />
                <Field
                  id="contact-message"
                  label="Your Message"
                  error={errors.message}
                  className="sm:col-span-2"
                  input={
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={7}
                      required
                      className={cn(INPUT_CLASSES, "min-h-40 resize-y py-3")}
                      value={values.message}
                      onChange={updateField("message")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                    />
                  }
                />
              </div>

              <button
                type="submit"
                className="mt-6 h-12 w-full rounded-md bg-white/[0.08] text-sm font-bold tracking-[0.18em] text-white uppercase transition-colors duration-200 hover:bg-amber-400 hover:text-black"
              >
                Send Message
              </button>

              {status === "sent" && (
                <output className="mt-4 block text-sm leading-6 text-emerald-400">
                  Your email app should have opened with the message ready to
                  send. If it didn't, email me directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline transition-colors hover:text-amber-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </output>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */

function Field({
  id,
  label,
  error,
  className,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  input: ReactElement;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase"
      >
        {label}
      </label>
      <div
        className={cn(
          "rounded-md border bg-[#0d0d0d] transition-colors duration-200",
          error
            ? "border-red-500/70"
            : "border-white/10 focus-within:border-amber-400/60",
        )}
      >
        {input}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
