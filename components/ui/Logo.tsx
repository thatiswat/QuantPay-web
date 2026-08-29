import type { HTMLAttributes } from "react";

type QuantPayLogoProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    mark: "h-7 w-7",
    text: "text-[19px]",
    tracking: "tracking-[0.16em]",
    gap: "gap-3",
  },

  md: {
    mark: "h-9 w-9",
    text: "text-[26px]",
    tracking: "tracking-[0.155em]",
    gap: "gap-3.5",
  },

  lg: {
    mark: "h-12 w-12",
    text: "text-[34px]",
    tracking: "tracking-[0.15em]",
    gap: "gap-4",
  },
};

export default function QuantPayLogo({
  variant = "wordmark",
  size = "md",
  className = "",
  ...props
}: QuantPayLogoProps) {
  const scale = sizes[size];

  /*
   * ==========================================================
   * MARK ONLY
   * ==========================================================
   */

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

  /*
   * ==========================================================
   * WORDMARK
   * ==========================================================
   */

  return (
    <div
      className={`inline-flex items-center ${scale.gap} ${className}`}
      aria-label="QuantPay"
      role="img"
      {...props}
    >
      {/* ======================================================
          Q MARK
      ====================================================== */}

      <img
        src="/quantpay-q.svg"
        alt=""
        className={`${scale.mark} shrink-0 object-contain`}
      />

      {/* ======================================================
          QUANTPAY
      ====================================================== */}

      <span
        className={[
          scale.text,
          scale.tracking,
          "whitespace-nowrap",
          "font-[700]",
          "leading-none",
          "text-current",
          "[font-family:Montserrat,sans-serif]",
        ].join(" ")}
      >
        QUANTPAY
      </span>
    </div>
  );
}