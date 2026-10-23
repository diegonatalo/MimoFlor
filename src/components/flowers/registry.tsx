import type { ReactNode } from "react";
import { HydrangeaDefs, HydrangeaPlant } from "./hydrangea";
import { LilyDefs, LilyPlant } from "./lily";
import { RoseDefs, RosePlant } from "./rose";
import { SunflowerDefs, SunflowerPlant } from "./sunflower";

export type FlowerType = "rose" | "sunflower" | "hydrangea" | "lily";

type FlowerConfig = {
  label: string;
  /** cor dos brilhos */
  sparkle: string;
  /** centro e raio da cabeça, para posicionar os brilhos */
  head: { x: number; y: number; r: number };
  /** segundo em que a flor começa a se abrir */
  bloom: number;
  defs: ReactNode;
  plant: ReactNode;
};

export const FLOWERS: Record<FlowerType, FlowerConfig> = {
  rose: {
    label: "Rosa vermelha",
    sparkle: "#fda4af",
    head: { x: 160, y: 120, r: 92 },
    bloom: 1.7,
    defs: <RoseDefs />,
    plant: <RosePlant />,
  },
  sunflower: {
    label: "Girassol",
    sparkle: "#fde68a",
    head: { x: 160, y: 120, r: 100 },
    bloom: 2.6,
    defs: <SunflowerDefs />,
    plant: <SunflowerPlant />,
  },
  hydrangea: {
    label: "Hortênsia azul",
    sparkle: "#bfdbfe",
    head: { x: 160, y: 116, r: 92 },
    bloom: 1.9,
    defs: <HydrangeaDefs />,
    plant: <HydrangeaPlant />,
  },
  lily: {
    label: "Lírio branco",
    sparkle: "#f8fafc",
    head: { x: 160, y: 112, r: 100 },
    bloom: 2.8,
    defs: <LilyDefs />,
    plant: <LilyPlant />,
  },
};
