import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POWERS — Chapter 06" },
      { name: "description", content: "Chapter 6: Powers — energy, faculties and functions; physical, nervous and vital faculty." },
      { property: "og:title", content: "POWERS — Chapter 06" },
      { property: "og:description", content: "Energy, faculties and functions; physical, nervous and vital faculty." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/powers/index.html"
      title="POWERS — Chapter 06"
      className="block h-screen w-full border-0"
    />
  );
}
