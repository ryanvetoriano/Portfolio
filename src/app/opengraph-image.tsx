import { ogImage, ogSize } from "./og-image";

export const alt = "Ryan Vetoriano — Desenvolvedor Full Stack";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return ogImage({
    eyebrow: "RYAN VETORIANO",
    title: "Construo sistemas que não mentem.",
    description:
      "Desenvolvedor full stack. Duas aplicações internas em uso diário na GEMM, do banco à interface.",
    footer: "Desenvolvedor Full Stack · São Paulo",
  });
}
