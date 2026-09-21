/**
 * Cores do tema em hexadecimal, para as imagens geradas (ícone e compartilhamento).
 *
 * O gerador de imagens do Next (satori) não entende oklch, que é o formato usado
 * em globals.css. Estes valores são a conversão exata dos tokens do tema — se uma
 * cor mudar lá, precisa mudar aqui também.
 */
export const ogColors = {
  background: "#0b0e14",
  ink2: "#10151f",
  glass: "#1a2230",
  foreground: "#cfd8e3",
  muted: "#7e8a9c",
  primary: "#2cd4bf",
} as const;
