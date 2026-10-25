"use client";

import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const ROLES = ["UI/UX Designer", "Web Developer", "Problem Solver"] as const;

const INTRO =
  "I use animation as a third dimension by which to simplify experiences and guiding thru each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.";

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function Banner() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const typedRole = useTypewriter(ROLES);

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-[#0f0f0f]">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="flex w-full flex-1 flex-col lg:ml-auto ">
          <div className="grid gap-y-10 lg:grid-cols-[minmax(0,550px)_minmax(0,400px)] lg:gap-x-15 justify-between items-center">
            {/* ---------------- Copy ---------------- */}
            <div className="flex flex-col gap-6">
              <p className="text-[13px] font-bold tracking-[0.28em] text-white/85 uppercase">
                Welcome to my world
              </p>

              <h1 className="text-[38px] leading-[1.1] font-extrabold tracking-tight text-white sm:text-[50px] lg:text-[70px] lg:leading-[1.08] lg:whitespace-nowrap">
                Hi, I&apos;m <span className="text-amber-400">Saber</span>
                <br />a {typedRole}
                <span
                  aria-hidden="true"
                  className="ml-1.5 inline-block h-[0.78em] w-[5px] translate-y-[0.04em] rounded-[1px] bg-amber-400 align-baseline animate-blink"
                />
              </h1>

              <p className="max-w-[550px] text-[15px] leading-[1.85] text-white/50">
                {INTRO}
              </p>

              {/* ---------------- Link groups ---------------- */}
              <div className="flex flex-wrap gap-x-14 gap-y-8 pt-6">
                <div className="bg-black rounded-t-2xl">
                  <h3 className="text-xl text-amber-200 text-center border border-amber-200 rounded-t-2xl py-1 px-5 ">
                    Find me on
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 mt-6 bg-black p-5">
                    <Link
                      href={"mailto:sabermahmud01@gmail.com"}
                      className=" text-2xl p-4 rounded-full shadow-2xl shadow-gray-200 hover:text-amber-200 hover:shadow-amber-200"
                    >
                      <FiMail />
                    </Link>
                    <Link
                      href={"https://github.com/sabermahmud"}
                      className=" text-2xl bg-black p-4 rounded-full shadow-2xl shadow-gray-200 hover:text-amber-200
                    hover:shadow-amber-200"
                    >
                      <FiGithub />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/in/saber-mahmud"}
                      className=" text-2xl bg-black p-4 rounded-full shadow-2xl shadow-gray-200 hover:text-amber-200
                    hover:shadow-amber-200
                    "
                    >
                      <FiLinkedin />
                    </Link>
                    <Link
                      href={"https://x.com/SaberMahmud01"}
                      className=" text-2xl bg-black p-4 rounded-full shadow-2xl shadow-gray-200 hover:text-amber-200
                    hover:shadow-amber-200
                    "
                    >
                      <FaXTwitter />
                    </Link>
                    <Link
                      href={"https://leetcode.com/u/sabermahmud"}
                      className=" text-2xl bg-black p-4 rounded-full shadow-2xl shadow-gray-200 hover:text-amber-200
                    hover:shadow-amber-200"
                    >
                      <SiLeetcode />
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            {/* ---------------- Portrait ---------------- */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-0 h-[76%] w-[78%] bg-[#181818] border border-amber-200"
              />
              <Image
                src="/images/profile.png"
                alt="Saber Mahmud"
                width={500}
                height={500}
                priority
                className="relative w-full max-w-[440px] lg:max-w-none lg:w-[120%]"
              />
            </div>
          </div>

          <div className="mt-auto border-t border-white/10" />
        </div>
      </div>

      {/* ---------------- Sound toggle ---------------- */}
      <button
        type="button"
        onClick={() => setIsSoundOn((on) => !on)}
        aria-pressed={isSoundOn}
        aria-label={
          isSoundOn ? "Mute background sound" : "Play background sound"
        }
        className="fixed bottom-8 left-6 z-40 grid size-11 place-items-center rounded-full bg-amber-400 text-black shadow-lg shadow-amber-400/25 transition-transform hover:scale-110 lg:left-12"
      >
        {isSoundOn ? (
          <Volume2 className="size-5" />
        ) : (
          <VolumeX className="size-5" />
        )}
      </button>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */

function useTypewriter(
  words: readonly string[],
  typingSpeed = 95,
  deletingSpeed = 45,
  pause = 1800,
) {
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((index) => index + 1);
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(
        () => {
          setText((current) =>
            isDeleting
              ? word.slice(0, current.length - 1)
              : word.slice(0, current.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
