import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ActionVariant = "primary" | "secondary" | "quiet";

const variantStyles: Record<ActionVariant, string> = {
  primary:
    "border border-ink bg-ink text-canvas shadow-sm hover:-translate-y-0.5 hover:bg-[#17233f] hover:shadow-panel",
  secondary:
    "border border-line bg-white/80 text-ink shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white",
  quiet:
    "border border-transparent bg-transparent text-muted hover:text-ink",
};

export function actionClassName(variant: ActionVariant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantStyles[variant],
    className,
  );
}

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  external?: boolean;
  variant?: ActionVariant;
};

export function ActionLink({
  children,
  className,
  external = false,
  rel,
  target,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={actionClassName(variant, className)}
      rel={external ? rel ?? "noreferrer" : rel}
      target={external ? target ?? "_blank" : target}
      {...props}
    >
      <span>{children}</span>
      {external ? <span aria-hidden="true" className="text-xs">&rarr;</span> : null}
    </a>
  );
}
