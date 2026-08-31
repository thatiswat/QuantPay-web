import type { HTMLAttributes } from "react";

type QuantPayLogoProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    mark: "h-7 w-7",
    text: "text-[18px]",
  },

  md: {
    mark: "h-9 w-9",
    text: "text-[25px]",
  },

  lg: {
    mark: "h-12 w-12",
    text: "text-[34px]",
  },
};

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
      className={`inline-flex items-center ${className}`}
      aria-label="QuantPay"
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
          "[font-family:'Space_Grotesk',sans-serif]",
        ].join(" ")}
      >
        <span className="text-[#13152A]">
          Quant
        </span>

        <span className="text-[#12B57C]">
          pay
        </span>
      </span>
    </div>
  );
}