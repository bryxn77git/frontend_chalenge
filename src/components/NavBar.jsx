import house from '../assets/cil_house.svg';

export const NavBar = () => {

    return (
        <header className='bg-[#FD9255] h-[196px] flex place-content-center'>
            <nav className=" flex place-content-around items-center max-w-[1145px] w-[100%] h-[100%]">
                <img src={house} className='w-[97px] h-[96px]' />
                
                <ul className='text-[18px] flex place-content-end w-[60%] text-white'>
                    <li className='ml-16'>
                        <a href='#'>How We Work</a> 
                    </li>   
                    <li className='ml-16'>
                        <a href='#'>Services</a> 
                    </li>
                    <li className='ml-16'>
                        <a href='#'>Free Quote</a> 
                    </li>
                    <li className='ml-16'>
                        <a href='#'>Contact</a> 
                    </li>
                </ul>

            </nav>
        </header>
    );

}