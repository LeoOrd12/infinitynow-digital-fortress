import { createFileRoute } from "@tanstack/react-router";
import { CorporateSite } from "@/components/corporate-site";

export const Route = createFileRoute("/")({
  component: CorporateSite,
  head: () => ({
    meta: [
      { title: "InfinityNow | Cybersecurity, Infrastructure & Technology" },
      { name: "description", content: "InfinityNow ofrece soluciones de ciberseguridad, infraestructura, cloud, redes, DevSecOps, monitoreo y consultoría especializada." },
      { property: "og:title", content: "InfinityNow | Cybersecurity, Infrastructure & Technology" },
      { property: "og:description", content: "Ciberseguridad, infraestructura y tecnología para empresas que no pueden detenerse." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
