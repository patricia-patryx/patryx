/** Divisor da marca: linha com par de folhas, inspirado no manual de identidade. */
export function Divisor({
  centro = false,
  className = "",
}: {
  centro?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 16"
      aria-hidden
      className={`block h-4 w-28 ${centro ? "mx-auto" : ""} ${className}`}
    >
      <path d="M0 8h44M76 8h44" stroke="currentColor" strokeWidth="1" className="text-cobre" />
      <path
        d="M60 9C54 2 47 1 42 3c4 5 11 7 18 6Z"
        className="fill-salvia"
      />
      <path
        d="M60 9c6-7 13-8 18-6-4 5-11 7-18 6Z"
        className="fill-cobre"
      />
    </svg>
  );
}
