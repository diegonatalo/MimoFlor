import type { CSSProperties } from "react";
import type { OptionGroup, Selection } from "./flowers/registry";

type FlowerOptionsProps = {
  groups: OptionGroup[];
  selection: Selection;
  onChange: (groupId: string, value: string) => void;
};

/** Segunda fileira do seletor: variações da flor escolhida (ex.: tipo e cor da rosa). */
export const FlowerOptions = ({
  groups,
  selection,
  onChange,
}: FlowerOptionsProps) => (
  <div className="options">
    {groups.map((group) => (
      <div
        key={group.id}
        role="radiogroup"
        aria-label={group.label}
        className="option-group"
      >
        {group.choices.map((choice) => (
          <button
            key={choice.value}
            type="button"
            role="radio"
            aria-checked={selection[group.id] === choice.value}
            aria-label={choice.label}
            title={choice.label}
            onClick={() => onChange(group.id, choice.value)}
            className="option-item"
          >
            {choice.swatch ? (
              <span
                className="option-swatch"
                style={{ "--dot": choice.swatch } as CSSProperties}
              />
            ) : (
              choice.label
            )}
          </button>
        ))}
      </div>
    ))}
  </div>
);
