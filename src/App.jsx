import { Items } from "./components/Items"
import { NavBar } from "./components/NavBar"


export const App = () => {

  return (
    <>
      <NavBar />

      <div className="max-w-[1258px] mr-auto ml-auto">
        <section className="flex flex-col max-w-[717px]  my-24 items-center mr-auto ml-auto px-5 sm:px-10 gap-5">
          <h1 className="text-5xl text-center">What items to store?</h1>
          <p className="text-center sm:px-28">Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
        </section>

        <Items />

      </div>
    </>
  )

}