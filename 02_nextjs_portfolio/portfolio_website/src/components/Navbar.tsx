import Menu from "./Menu"
import { ButtonDemo } from "./ButtonDemo"
import  DarkMode  from "./DarkMode"



export default function Navbar() {
    return (
        <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between items-center w-screen ">
            icons

        <div className="hidden md:flex justify-center gap-x-3">
            <Menu />
        </div>
        
        <div className="justify-self-start gap-x-3">
            <DarkMode />
            <ButtonDemo />
        </div>

        </header>
    )
}