import Menu from "./Menu"
import { ButtonDemo } from "./ButtonDemo"

export default function Navbar() {
    return (
        <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-items-center">
         icon   
        <Menu />
        <ButtonDemo />
        </header>
    )
}