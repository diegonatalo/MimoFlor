import type { CSSProperties } from "react";
import { FLOWERS, type FlowerType } from "./flowers/registry";
import { CommonDefs, Ground, Sparkles } from "./flowers/shared";
import "./flower.css";

type FlowerProps = {
  type?: FlowerType;
  size?: number;
};

export function Flower({ type = "rose", size = 380 }: FlowerProps) {
  const flower = FLOWERS[type];

  return (
    <svg
      className="flower"
      viewBox="0 0 320 380"
      width={size}
      height={(size * 380) / 320}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={flower.label}
      style={
        {
          "--bloom": `${flower.bloom}s`,
          color: flower.sparkle,
        } as CSSProperties
      }
    >
      <defs>
        <CommonDefs />
        {flower.defs}
      </defs>

      <Ground />

      <g className="plant">{flower.plant}</g>

      <Sparkles
        x={flower.head.x}
        y={flower.head.y}
        r={flower.head.r}
        start={flower.bloom + 2.4}
      />
    </svg>
  );
}
