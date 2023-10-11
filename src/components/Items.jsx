import { itemsData } from "../data/itemsData"
import { Item } from "./Item"


export const Items = () => {

  return (
    <section className="flex flex-wrap place-content-center gap-6">
        {
            itemsData.map( item => 
                <Item name={item.name } icon={ item.icon } m2={ item.m2 } key={item.name}/>
            )
        }
        
    </section>
  )
}
