import type { HTMLAttributes } from "react";

type QuantPayLogoProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    mark: "h-8 w-8",
    text: "text-[20px]",
  },

  md: {
    mark: "h-10 w-10",
    text: "text-[28px]",
  },

  lg: {
    mark: "h-12 w-12",
    text: "text-[36px]",
  },
} as const;

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
        aria-label="Quantpay"
        role="img"
        {...props}
      >
        <img
          src="/quantpay-q.svg"
          alt=""
          aria-hidden="true"
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
      className={`inline-flex items-center ${className}`}
      aria-label="Quantpay"
      role="img"
      {...props}
    >
      <span
        className={[
          "whitespace-nowrap",
          "font-bold",
          "leading-none",
          "tracking-[-0.045em]",
          scale.text,
          "font-[family-name:var(--font-space-grotesk)]",
        ].join(" ")}
      >
        <span className="text-[#13152A]">Quant</span>
        <span className="text-[#12B57C]">pay</span>
      </span>
    </div>
  );
}