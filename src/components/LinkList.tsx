"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = {
  id: string;
  label: string;
  href: string;
  color?: string;
};

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        setCounts((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {});
  }, []);

  const handleVisit = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          label={link.label}
          href={link.href}
          color={link.color}
          count={counts[link.id] ?? 0}
          onVisit={() => handleVisit(link.id)}
        />
      ))}
    </div>
  );
}
