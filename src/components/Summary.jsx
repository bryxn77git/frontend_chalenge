import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function formatCurrency(number) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).replace(/\.00$/, '');
}

export const Summary = () => {

  const { clear, summary } = useContext(DataContext);

  return (
    <section className="mx-1 my-14">
      <div className="flex justify-between gap-1">
        <button className="border-2 rounded-md border-[#FD9255] w-[222.21px] h-[61.16px] active:bg-[#FD9255]" onClick={clear}>Clear</button>
        {/* <button className="border-2 rounded-md bg-[#FD9255] border-[#FD9255] w-[222.21px] h-[61.16px] active:bg-[#e98952] active:border-[#e98952]" onClick={clear}>Calculate</button> */}
      </div>
      <div className="flex flex-col items-center mt-5">
        <h2 className="text-4xl">Summary</h2>

        <div className="w-[416px] h-[322px] bg-[#F9F9F9] mt-14 p-10 flex flex-col justify-around">
          <span className="flex"><p className="basis-3/4">Total Items</p><p className="basis-1/4">{summary.totalItems}</p></span>
          <span className="flex"><p className="basis-3/4">Total m²</p><p className="basis-1/4">{summary.totalM2.toFixed(2)}</p></span>
          <span className="flex"><p className="basis-3/4">Subtotal</p><p className="basis-1/4">{formatCurrency(summary.subtotal)}</p></span>
          <span className="flex"><p className="basis-3/4">Tax</p><p className="basis-1/4">{formatCurrency(summary.tax)}</p></span>
          <span className="flex font-bold"><p className="basis-3/4">Total</p><p className="basis-1/4">{formatCurrency(summary.total)}</p></span>
          <span className="flex font-bold"><p className="basis-3/4">Due Today 50%</p><p className="basis-1/4">{formatCurrency(summary.dueToday50)}</p></span>
        </div>
      </div>
    </section>
  )
}
