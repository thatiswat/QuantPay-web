import type { HTMLAttributes } from "react";

type QuantPayLogoProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    mark: "h-7 w-7",
    text: "text-[17px]",
    gap: "gap-3",
    letterGap: "gap-[0.16em]",
  },

  md: {
    mark: "h-9 w-9",
    text: "text-[24px]",
    gap: "gap-3.5",
    letterGap: "gap-[0.16em]",
  },

  lg: {
    mark: "h-12 w-12",
    text: "text-[32px]",
    gap: "gap-4",
    letterGap: "gap-[0.15em]",
  },
};

const letters = "QUANTPAY".split("");

export default function QuantPayLogo({
  variant = "wordmark",
  size = "md",
  className = "",
  ...props
}: QuantPayLogoProps) {
  const scale = sizes[size];

  /* ==========================================================
     MARK
  ========================================================== */

  if (variant === "mark") {
    return (
      <div
        className={`inline-flex shrink-0 ${className}`}
        aria-label="QuantPay"
        role="img"
        {...props}
      >
        <img
          src="/quantpay-q.svg"
          alt=""
          className={`${scale.mark} object-contain`}
        />
      </div>
    );
  }

  /* ==========================================================
     WORDMARK
  ========================================================== */

  return (
    <div
      className={`inline-flex items-center ${scale.gap} ${className}`}
      aria-label="QuantPay"
      role="img"
      {...props}
    >
      {/* Q MARK */}

      <img
        src="/quantpay-q.svg"
        alt=""
        className={`${scale.mark} shrink-0 object-contain`}
      />

      {/* WORDMARK */}

      <span
        className={[
          "inline-flex items-center",
          scale.letterGap,
          scale.text,
          "whitespace-nowrap",
          "font-bold",
          "leading-none",
          "text-current",
          "[font-family:'Century_Gothic','Century Gothic',sans-serif]",
        ].join(" ")}
      >
        {letters.map((letter, index) => (
          <span key={`${letter}-${index}`}>
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}