type OutputProps = {
  title: string;
  amount?: string;
};

export const Output = ({ amount = "0.00", title }: OutputProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-sm text-white lg:text-base">{title}</span>
        <span className="text-xs text-grayish-cyan lg:text-sm ">/ person</span>
      </div>
      <span className="text-3xl text-strong-cyan lg:text-4xl">${amount}</span>
    </div>
  );
};
