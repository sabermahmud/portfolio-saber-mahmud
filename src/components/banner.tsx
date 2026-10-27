"use client";

import { cn } from "cn";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const ROLES = [
  "Web Developer",
  "Frontend Developer",
  "Problem Solver",
] as const;

const INTRO =
  "I build responsive, user-friendly web applications with modern technologies. I enjoy turning ideas into practical digital experiences through clean code, thoughtful design, and continuous learning.";

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:sabermahmud01@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/sabermahmud",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-mahmud",
    icon: FiLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/SaberMahmud01",
    icon: FaXTwitter,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sabermahmud",
    icon: SiLeetcode,
  },
];

export function Banner() {
  const typedRole = useTypewriter(ROLES);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-5rem)] scroll-mt-20 flex-col overflow-hidden bg-[#0f0f0f] text-white"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 -z-10 size-112 rounded-full bg-amber-300/6 blur-[120px]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-12">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
          {/* Hero content */}
          <div className="flex flex-col items-start">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-300/6 px-4 py-2">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-300 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-amber-300" />
              </span>

              <span className="text-xs font-medium tracking-wide text-amber-200/90 sm:text-sm">
                Welcome to my portfolio
              </span>
            </div>

            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-amber-300/45 uppercase sm:text-lg">
              Hello, I&apos;m
            </p>

            <h1
              id="hero-heading"
              className="text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Saber
              <span className="text-amber-300"> Mahmud</span>
              <span className="text-amber-300">.</span>
            </h1>

            <div className="mt-6 flex min-h-12 flex-wrap items-center gap-x-2 text-xl font-semibold sm:text-2xl lg:text-3xl">
              <span className="text-white/70">A</span>

              <span aria-hidden="true" className="text-amber-400">
                {typedRole}
                <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-0.5 animate-blink bg-amber-300" />
              </span>

              <span className="sr-only">
                AI-enabled full-stack web developer
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              {INTRO}
            </p>

            {/* Primary actions */}
            <div className="mt-9 flex w-full flex-wrap gap-3 sm:w-auto">
              <Link
                href="#myportfolio"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-300 px-5 py-3 text-base md:text-lg font-bold text-black transition-all duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
              >
                Explore My Work
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-12 w-full max-w-xl border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                Let&apos;s connect
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                    title={label}
                    className="group grid size-11 place-items-center rounded-xl border border-white/10 bg-white/3 text-lg text-white/60 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative mx-auto w-full max-w-105 lg:mx-0 lg:ml-auto lg:max-w-115">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-amber-400/6 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171717] p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-4/4.5 overflow-hidden rounded-[1.25rem] bg-[#202020]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-amber-400/5"
                />

                <Image
                  src="/images/profile.png"
                  alt="Portrait of Saber Mahmud"
                  width={500}
                  height={563}
                  priority
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 90vw"
                  className="relative z-10 h-full w-full object-cover object-center"
                />
              </div>

              {/* Decorative corner accents */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-8 h-1 w-16 rounded-b-full bg-amber-400"
              />
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-8 h-16 w-1 rounded-l-full bg-amber-400/70"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-3 right-5 size-6 rounded-lg border border-amber-400/40 bg-amber-400/10 rotate-12"
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex justify-center pt-5 lg:mt-12">
          <Link
            href="#myportfolio"
            className="group inline-flex items-center gap-2 text-lg lg:text-xl font-medium tracking-wide text-amber-300"
          >
            <ArrowDown
              size={20}
              aria-hidden="true"
              className="animate-bounce"
            />
            Explore my work
          </Link>
        </div>
      </div>
    </section>
  );
}

function useTypewriter(
  words: readonly string[],
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
) {
  const [text, setText] = useState(words[0] ?? "");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0] ?? "");
      return;
    }

    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && text === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(
        () => {
          setText((current) =>
            isDeleting
              ? currentWord.slice(0, current.length - 1)
              : currentWord.slice(0, current.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeoutId);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
    reducedMotion,
  ]);

  return text;
}
