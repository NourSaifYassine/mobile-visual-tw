import { Link } from "react-router-dom";
import image from "../assets/image.png";
import { useState } from "react";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const handleMenuClick = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="flex w-screen bg-sky-200 flex-col justify-center items-center pt-4 pl-5 pr-5">
            <div className="flex">
                <h1 className="mr-[80px]">Mobile-Visual-TW</h1>
                <img
                    className="w-[20vw] h-[10vh]"
                    alt="menu burger"
                    src={image}
                    id="menu"
                    onClick={handleMenuClick}
                />
            </div>
            <ul
                className={`flex-col bg-sky-400 h-full h-[72px] w-screen transition ease-in-out flex ${
                    navOpen ? "translate-x-0" : "translate-x-[100vw]"
                }`}
                id="nav-links"
            >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/coding">Coding</Link>
                </li>
                <li>Hello</li>
            </ul>
        </nav>
    );
}
