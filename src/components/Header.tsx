import { Logo } from "./Logo"

const Header = () => {
    return (
        <div className="w-full py-5 flex justify-center align-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </div>
    )
}

export default Header