import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);

    const handleSubstractCount = () => {
        if(count === 0) return
        setCount(count - 1);
    }


  return (
    <div className="flex mt-6 rounded-md border justify-between items-center">
        <button 
            onClick={ handleSubstractCount }
            className="bg-[#E2E2E2] rounded-l-md w-[41.35px] h-[50px] flex place-content-center transition hover:bg-[#FD9255] hover:text-white duration-150 text-4xl font-light active:bg-[#d87e4a]"
        >
            -
        </button>
        <p className="text-[20px] font-semibold">{count}</p>
        <button 
            className="bg-[#E2E2E2] rounded-r-md w-[41.35px] h-[50px] flex place-content-center transition hover:bg-[#FD9255] hover:text-white duration-150 text-4xl font-light active:bg-[#d87e4a]"
            onClick={ () => setCount(count + 1) }    
        >
              +
        </button>
    </div>
  )
}
