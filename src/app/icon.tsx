import { ImageResponse } from "next/og";
import { ogColors } from "./og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// O mesmo losango do cabeçalho do site.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ogColors.background,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            background: ogColors.primary,
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    size,
  );
}
