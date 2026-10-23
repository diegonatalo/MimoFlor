import type { CSSProperties } from "react";
import { FLOWERS, type FlowerType } from "./flowers/registry";

const DOTS: Record<FlowerType, string> = {
  rose: "radial-gradient(circle at 35% 30%, #fda4af, #e11d48 70%)",
  sunflower: "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 70%)",
  hydrangea: "radial-gradient(circle at 35% 30%, #bfdbfe, #2563eb 70%)",
  lily: "radial-gradient(circle at 35% 30%, #ffffff, #cbd5e1 75%)",
};

const NAMES: Record<FlowerType, string> = {
  rose: "Rosa",
  sunflower: "Girassol",
  hydrangea: "Hortênsia",
  lily: "Lírio",
};

type FlowerPickerProps = {
  value: FlowerType;
  onChange: (type: FlowerType) => void;
};

export const FlowerPicker = ({ value, onChange }: FlowerPickerProps) => {
  return (
    <div
      role="radiogroup"
      aria-label="Escolha uma flor"
      className="fade-in picker"
    >
      {(Object.keys(FLOWERS) as FlowerType[]).map((type) => (
        <button
          key={type}
          type="button"
          role="radio"
          aria-checked={type === value}
          aria-label={FLOWERS[type].label}
          onClick={() => onChange(type)}
          className="picker-item"
        >
          <span
            className="picker-dot"
            style={{ "--dot": DOTS[type] } as CSSProperties}
          />
          <span className="picker-label">
            <span>{NAMES[type]}</span>
          </span>
        </button>
      ))}
    </div>
  );
};
