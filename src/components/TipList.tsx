import clsx from "clsx";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TipCalculator } from "../App";
import { InputField } from "./form";

export const TipList = ({
  tips,
  setTips,
  setState,
  state,
}: {
  tips: number[];
  setTips: Dispatch<SetStateAction<number[]>>;
  setState: Dispatch<SetStateAction<TipCalculator>>;
  state: TipCalculator;
}) => {
  const [tipInput, setTipInput] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTipInput(e.target.value);
  };
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {tips.map((tip) => (
        <button
          onClick={() => setState((prev) => ({ ...prev, tip: tip }))}
          key={tip}
          className={clsx(
            "rounded-md bg-very-dark-cyan px-12 py-2 text-xl font-bold  text-white hover:bg-strong-cyan/50 hover:text-very-dark-cyan ",
            tip === state.tip && "bg-strong-cyan text-very-dark-cyan"
          )}
        >
          ${tip}
        </button>
      ))}
      <InputField
        placeholder="Custom"
        className="placeholder:text-lg"
        value={tipInput}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTips((prev) => [...prev, parseFloat(tipInput)]);
            setTipInput("");
            return;
          }
          return;
        }}
      />
    </div>
  );
};
