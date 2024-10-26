import dynamic from "next/dynamic";
import { items } from "@/utils/items";

const Linktree = dynamic(() => import("linkees"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <main>
        <Linktree
          cardItems={items}
          headerAvatar="/assets/johannes.png"
          name="Johannes"
        />
      </main>
    </>
  );
}
