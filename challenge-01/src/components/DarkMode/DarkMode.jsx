import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();

    }
    return (
        <label className="swap swap-rotate mx-5 px-5 bg-white border-[1px] w-5 h-6 rounded-2xl">
            <input type="checkbox" id="darkmode-toggle" className="dark_mode_input" onChange={toggleTheme} />
            <figure className="swap-on text-black" xmlns="http://www.w3.org/2000/svg"><IoSunnyOutline /></figure>
            <figure className="swap-off text-black" xmlns="http://www.w3.org/2000/svg" ><IoMoonOutline /></figure>
        </label>
    );
};

export default DarkMode;