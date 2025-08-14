"use client";
import { useEffect } from "react";

import { CMSLink } from "@/components/Link";
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import { useHeaderTheme } from "@/providers/HeaderTheme";

import type { Page } from "@/payload-types";

export const HighImpactHero = ({ links, media, richText }: Page["hero"]) => {
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme("dark");
  });

  return (
    <div
      className="relative -mt-[10.4rem] overflow-hidden rounded-3xl text-white ring-1 ring-black/5 dark:ring-white/5"
      data-theme="dark"
    >
      <div className="relative z-10 container mb-8 flex items-center justify-center p-8 md:p-14">
        <div className="max-w-146 md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-3 md:justify-center">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* background image */}
      <div className="min-h-[80vh] select-none">
        {media && typeof media === "object" && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
    </div>
  );
};
