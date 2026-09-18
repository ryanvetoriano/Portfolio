// A Vercel injeta o domínio de produção em build. Fora dela (dev, CI), cai no localhost.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Ryan Vetoriano",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Construo sistemas internos do banco à interface, com atenção a segurança de credenciais, testes automatizados e dados que não mentem.",
  url: productionHost ? `https://${productionHost}` : "http://localhost:3000",
  email: "vetorianosilva@gmail.com",
  github: "https://github.com/ryanvetoriano",
  linkedin: "https://linkedin.com/in/ryanvetoriano",
  cv: "/ryan-vetoriano-cv.pdf",
} as const;
