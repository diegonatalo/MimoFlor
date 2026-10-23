import { useEffect, useState } from "react";
import { Flower } from "../components/flower";
import { FlowerPicker } from "../components/flower-picker";
import type { FlowerType } from "../components/flowers/registry";
import { Footer } from "../components/footer";
import { RomanticMessage } from "../components/message";
import { Stage } from "../components/stage";

/* a flor ocupa o que sobra depois da frase, do seletor e do rodapé */
const getSize = () => {
  const heightBudget = Math.max(280, window.innerHeight - 330);
  return Math.min(380, window.innerWidth - 32, (heightBudget * 320) / 380);
};

const useFlowerSize = () => {
  const [size, setSize] = useState(getSize);

  useEffect(() => {
    const onResize = () => setSize(getSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
};

export default function Home() {
  const [flower, setFlower] = useState<FlowerType>("hydrangea");
  const size = useFlowerSize();

  return (
    <Stage theme={flower}>
      <Flower key={flower} type={flower} size={size} />
      <RomanticMessage />
      <FlowerPicker value={flower} onChange={setFlower} />
      <Footer />
    </Stage>
  );
}
