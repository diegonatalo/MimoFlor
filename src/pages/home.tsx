import { useEffect, useRef, useState } from "react";
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
import { readFlowerUrl, writeFlowerUrl } from "../lib/flower-url";
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

const DEFAULT_FLOWER: FlowerType = "hydrangea";

/** Estado inicial: a flor da URL (se houver) por cima dos padrões. */
const initialState = () => {
  const selections = Object.fromEntries(
    (Object.keys(FLOWERS) as FlowerType[]).map((type) => [
      type,
      defaultSelection(type),
    ]),
  ) as Record<FlowerType, Selection>;

  const fromUrl = readFlowerUrl(window.location.search);
  if (fromUrl) selections[fromUrl.flower] = fromUrl.selection;

  return { flower: fromUrl?.flower ?? DEFAULT_FLOWER, selections };
};

export default function Home() {
  const [initial] = useState(initialState);
  const [flower, setFlower] = useState<FlowerType>(initial.flower);
  const [selections, setSelections] = useState(initial.selections);
  /* sempre a última escolha, mesmo entre dois toques antes de redesenhar */
  const latest = useRef(initial.selections);
  const size = useFlowerSize();

  const selection = selections[flower];
  const groups = FLOWERS[flower].options;
  const { theme } = FLOWERS[flower].view(selection);

  const changeFlower = (type: FlowerType) => {
    setFlower(type);
    writeFlowerUrl(type, latest.current[type]);
  };

  const changeOption = (groupId: string, value: string) => {
    const next = {
      ...latest.current,
      [flower]: { ...latest.current[flower], [groupId]: value },
    };
    latest.current = next;
    setSelections(next);
    writeFlowerUrl(flower, next[flower]);
  };

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
      <FlowerPicker value={flower} onChange={changeFlower} />

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
