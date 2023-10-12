import { useContext } from "react"
import { itemsData } from "../data/itemsData"
import { Item } from "./Item"
import { DataContext } from "../context/DataContext"


export const Items = () => {

    const {clear} = useContext(DataContext);

  return (
    <>
    <section className="flex flex-wrap place-content-center gap-6">
        {
            itemsData.map( item => 
                <Item name={item.name } icon={ item.icon } m2={ item.m2 } key={item.name}/>
            )
        }

    </section>
    <button className="border bg-[#cccccc]" onClick={clear}>Clear</button>
    </>
  )
}
