type LinkCardProps = {
  label: string;
  href: string;
  color?: string;
};

export default function LinkCard({ label, href, color }: LinkCardProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={
        color
          ? {
              backgroundColor: `${color}17`,
              borderColor: `${color}33`,
              color,
            }
          : undefined
      }
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/50 bg-white/40 text-base font-medium text-stone-800 shadow-[0_4px_20px_-8px_rgba(60,40,20,0.25)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(60,40,20,0.3)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100"
    >
      {label}
    </a>
  );
}
