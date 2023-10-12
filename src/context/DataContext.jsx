import React, { createContext, useState } from "react";

export const DataContext = createContext();

const initialStateSummary = {
  totalItems: 0,
  totalM2: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
  dueToday50: 0,
}

export const DataProvider = ({ children }) => {

  const [summary, setSummary] = useState(initialStateSummary);
  const [resetCounter, setResetCounter] = useState(false)

  const handleSummary = ( m2 ) => {

    setResetCounter(false);
    
    setSummary({
      totalItems: summary.totalItems + 1,
      totalM2: summary.totalM2 + m2,
      subtotal: (summary.totalM2 + m2) * 200 ,
      tax: ((summary.totalM2 + m2) * 200) * 0.16,
      total: (((summary.totalM2 + m2) * 200) * 0.16) + ((summary.totalM2 + m2) * 200 ),
      dueToday50: ((((summary.totalM2 + m2) * 200) * 0.16) + ((summary.totalM2 + m2) * 200 )) / 2,
    })
  }

  const decrement = ( m2 ) => {
    
    setSummary({
      totalItems: summary.totalItems - 1,
      totalM2: summary.totalM2 - m2,
      subtotal: (summary.totalM2 - m2) * 200 ,
      tax: ((summary.totalM2 - m2) * 200) * 0.16,
      total: (((summary.totalM2 - m2) * 200) * 0.16) + ((summary.totalM2 - m2) * 200 ),
      dueToday50: ((((summary.totalM2 - m2) * 200) * 0.16) + ((summary.totalM2 - m2) * 200 )) / 2,
    })
  }

  const clear = () => {
    setSummary(initialStateSummary);
    setResetCounter(true);
  }

  return (
    <DataContext.Provider value={ {summary, clear, handleSummary, resetCounter, decrement} }>
        { children }
    </DataContext.Provider>
  )
}
