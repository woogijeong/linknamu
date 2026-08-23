import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const links = [
  {
    id: "github",
    label: "🐙 GitHub",
    href: "https://github.com/",
    color: "#181717",
  },
  {
    id: "blog",
    label: "📝 Blog",
    href: "https://blog.naver.com/sozx2002",
    color: "#03C75A",
  },
  {
    id: "email",
    label: "📧 Email",
    href: "mailto:sozx2002@gmail.com",
    color: "#EA4335",
  },
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
        <LinkList links={links} />
      </main>
    </div>
  );
}
