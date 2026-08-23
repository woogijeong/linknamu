import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 GitHub", href: "https://github.com/", color: "#181717" },
  {
    label: "📝 Blog",
    href: "https://blog.naver.com/sozx2002",
    color: "#03C75A",
  },
  { label: "📧 Email", href: "mailto:sozx2002@gmail.com", color: "#EA4335" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="WoogiJeong"
          bio="자동 제어 개발자 | 요즘은 바이브 코더"
          avatarSrc="/Pikka2.png"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              label={link.label}
              href={link.href}
              color={link.color}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
