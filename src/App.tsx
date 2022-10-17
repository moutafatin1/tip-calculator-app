import { ChangeEvent, useState } from "react";
import Logo from "./assets/logo.svg";
import { InputField } from "./components/form";
import { IconDollar } from "./components/IconDollar";
import { IconPerson } from "./components/IconPerson";
import { Output } from "./components/Output";
import { TipList } from "./components/TipList";

export type TipCalculator = {
  bill: string;
  tip: number;
  numberOfPeople: string;
};

function App() {
  const [tips, setTips] = useState([5, 10, 15, 25, 50]);
  const [tipState, setTipState] = useState({
    total: 0,
  });
  const [state, setState] = useState<TipCalculator>({
    bill: "",
    tip: 0,
    numberOfPeople: "",
  });
  const bill = parseFloat(state.bill);
  const numberOfPeople = parseFloat(state.numberOfPeople);

  const tipPerPerson = () => {
    if (numberOfPeople >= 0) {
      return (bill * (state.tip / 100)) / numberOfPeople;
    }

    return 0;
  };

  const totalPerPerson = () => {
    if (numberOfPeople >= 1 && bill >= 0) {
      return bill / numberOfPeople + tipPerPerson();
    }
    return 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };
  return (
    <main className="container mx-auto p-4 font-space-mono">
      <img src={Logo} alt="Logo" className="mx-auto py-10" />
      <div className="grid grid-cols-1 gap-5 rounded-3xl bg-white p-8 lg:grid-cols-2 ">
        {/* Form */}
        <div className="space-y-12">
          <InputField
            name="bill"
            onChange={handleChange}
            value={state.bill}
            startIcon={<IconDollar />}
            label="Bill"
            placeholder="0"
          />
          <div className="space-y-4">
            <p className="text-sm text-dark-grayish-cyan lg:text-base">
              Select Tip %
            </p>
            <TipList
              state={state}
              setState={setState}
              setTips={setTips}
              tips={tips}
            />
          </div>
          <InputField
            onChange={handleChange}
            name="numberOfPeople"
            min={1}
            value={state.numberOfPeople}
            startIcon={<IconPerson />}
            label="Number of People"
            error={
              parseFloat(state.numberOfPeople) || state.numberOfPeople == ""
                ? ""
                : "Can't be zero"
            }
            placeholder="0"
          />
        </div>
        {/* output */}
        <div className=" flex flex-col justify-between space-y-8 rounded-2xl bg-very-dark-cyan p-6 pt-8 lg:space-y-0 lg:p-8 ">
          <div className="space-y-8">
            <Output title="Tip Amount" amount={tipPerPerson().toFixed(2)} />
            <Output title="Total" amount={totalPerPerson().toFixed(2)} />
          </div>
          <button
            onClick={() =>
              setState({
                bill: "",
                numberOfPeople: "",
                tip: 0,
              })
            }
            className="w-full rounded-md bg-strong-cyan py-2 text-lg  uppercase text-very-dark-cyan"
          >
            reset
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
