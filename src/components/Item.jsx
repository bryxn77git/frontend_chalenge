import { Counter } from "./Counter"


export const Item = ({ name, icon, m2 }) => {
  return (
    <div>
        <div className="flex flex-col place-content-center items-center drop-shadow-xl bg-white w-[220px] h-[222px] xl:basis-1/6 lg:basis-1/5 md:basis-1/4 basis-1/3">
            <img src={icon} alt={`${name} icon`} />
            <p className="text-[21px] mt-5">{name}</p>
        </div>

        <Counter />
    
    </div>
  )
}
