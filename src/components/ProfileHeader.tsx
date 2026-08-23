import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarSrc,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-black/10 blur-xl translate-y-2 dark:bg-black/40" />
        <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white/80 shadow-[0_16px_32px_-12px_rgba(60,40,20,0.35),0_4px_10px_-4px_rgba(60,40,20,0.25)] dark:ring-white/10">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            sizes="128px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-black/10" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {name}
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">{bio}</p>
      </div>
    </div>
  );
}
