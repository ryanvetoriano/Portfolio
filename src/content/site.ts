// NEXT_PUBLIC_SITE_URL manda em tudo: é o que garante o domínio certo mesmo
// depois de trocar o endereço do projeto na Vercel. Sem ela, usa o domínio de
// produção que a Vercel injeta no build e, fora da Vercel (dev, CI), o localhost.
const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Ryan Vetoriano",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Construo sistemas internos do banco à interface, com atenção a segurança de credenciais, testes automatizados e dados que não mentem.",
  url: explicitUrl ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  email: "vetorianosilva@gmail.com",
  github: "https://github.com/ryanvetoriano",
  linkedin: "https://linkedin.com/in/ryanvetoriano",
  cv: "/ryan-vetoriano-cv.pdf",
} as const;
