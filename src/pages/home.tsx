import { useEffect, useState } from "react";
import { Flower } from "../components/flower";
import { FlowerOptions } from "../components/flower-options";
import { FlowerPicker } from "../components/flower-picker";
import {
  FLOWERS,
  defaultSelection,
  type FlowerType,
  type Selection,
} from "../components/flowers/registry";
import { Footer } from "../components/footer";
import { RomanticMessage } from "../components/message";
import { Stage } from "../components/stage";

/* a flor ocupa o que sobra depois da frase, do seletor, das opções e do rodapé */
const getSize = () => {
  const heightBudget = Math.max(270, window.innerHeight - 350);
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

const initialSelections = () =>
  Object.fromEntries(
    (Object.keys(FLOWERS) as FlowerType[]).map((type) => [
      type,
      defaultSelection(type),
    ]),
  ) as Record<FlowerType, Selection>;

export default function Home() {
  const [flower, setFlower] = useState<FlowerType>("hydrangea");
  const [selections, setSelections] = useState(initialSelections);
  const size = useFlowerSize();

  const selection = selections[flower];
  const groups = FLOWERS[flower].options;
  const { theme } = FLOWERS[flower].view(selection);

  const changeOption = (groupId: string, value: string) =>
    setSelections((current) => ({
      ...current,
      [flower]: { ...current[flower], [groupId]: value },
    }));

  return (
    <Stage theme={theme}>
      {/* a chave faz a flor nascer de novo ao trocar de flor ou de opção */}
      <Flower
        key={`${flower}-${Object.values(selection).join("-")}`}
        type={flower}
        selection={selection}
        size={size}
      />
      <RomanticMessage />
      <FlowerPicker value={flower} onChange={setFlower} />

      {/* espaço reservado, para o layout não pular ao trocar de flor */}
      <div className="options-slot">
        {groups && (
          <FlowerOptions
            groups={groups}
            selection={selection}
            onChange={changeOption}
          />
        )}
      </div>

      <Footer />
    </Stage>
  );
}
