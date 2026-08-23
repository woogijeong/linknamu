type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarInitial,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        {avatarInitial}
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
