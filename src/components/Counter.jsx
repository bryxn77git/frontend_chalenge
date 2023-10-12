import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataContext";

export const Counter = ({ m2 }) => {

    const [count, setCount] = useState(0);
    const { handleSummary, resetCounter , decrement } = useContext(DataContext);

    useEffect(() => {
        if(resetCounter === true ){
            setCount(0);
        }
    }, [resetCounter])
    

    const handleSubstractCount = () => {
        if(count === 0) return
        decrement( m2 )
        setCount(count - 1) 
    }

    const handlePlusSummary = () => {
        handleSummary( m2 )
        setCount(count + 1) 
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
            onClick={ () => handlePlusSummary() }    
        >
              +
        </button>
    </div>
  )
}
