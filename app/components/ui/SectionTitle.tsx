"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({
  label,
  title,
  center = true,
}: {
  label: string;
  title: string;
  center?: boolean;
}) {
  return (
    <ScrollReveal
      className={`${center ? "text-center" : "text-left"} mb-10 md:mb-16`}
    >
      <h2 className="gaber-section-title">{title}</h2>
      <div className={center ? "mt-4 flex justify-center" : "mt-4"}>
        <Image
          src="/assets/design/line-1.webp"
          alt=""
          aria-hidden="true"
          width={52}
          height={8}
          className="inline-block"
        />
      </div>
      {label && (
        <span
          className="block mt-3 text-base font-medium tracking-wide"
          style={{ color: "#6a6d76" }}
        >
          {label}
        </span>
      )}
    </ScrollReveal>
  );
}