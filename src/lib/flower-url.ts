import {
  FLOWERS,
  defaultSelection,
  type FlowerType,
  type Selection,
} from "../components/flowers/registry";

const FLOWER_PARAM = "flor";

const types = Object.keys(FLOWERS) as FlowerType[];

type FlowerChoice = { flower: FlowerType; selection: Selection };

/** Lê a flor e as opções da URL (ex.: `?flor=rosa&tipo=colombiana&cor=azul`).
    Valores desconhecidos são ignorados; sem `flor` válida, devolve `null`. */
export const readFlowerUrl = (search: string): FlowerChoice | null => {
  const params = new URLSearchParams(search);
  const slug = params.get(FLOWER_PARAM)?.toLowerCase();
  const flower = types.find((type) => FLOWERS[type].slug === slug);
  if (!flower) return null;

  const selection = defaultSelection(flower);
  for (const group of FLOWERS[flower].options ?? []) {
    const wanted = params.get(group.param)?.toLowerCase();
    const choice = group.choices.find((c) => c.slug === wanted);
    if (choice) selection[group.id] = choice.value;
  }

  return { flower, selection };
};

/** Escreve a flor e as opções escolhidas na URL, sem criar entrada no histórico. */
export const writeFlowerUrl = (flower: FlowerType, selection: Selection) => {
  const params = new URLSearchParams({ [FLOWER_PARAM]: FLOWERS[flower].slug });

  for (const group of FLOWERS[flower].options ?? []) {
    const choice = group.choices.find((c) => c.value === selection[group.id]);
    if (choice) params.set(group.param, choice.slug);
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${params.toString()}`,
  );
};
