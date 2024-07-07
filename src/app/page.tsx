"use client";
import Linktree from "linkees";
import items from "@/utils/items";

export default function Home() {
  return (
    <Linktree
      cardItems={items}
      headerAvatar="/assets/johannes.png"
      name="Johannes"
    />
  );
}
