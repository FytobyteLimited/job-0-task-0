import DarkMode from '../../components/DarkMode/DarkMode';
import '../../App.css';

const Navbar = () => {

    return (
        <div className=''>
            <div className='lg:fixed w-full top-3 z-50'>
                <div id='navbar-glass' className="hidden py-3 px-5 text-sm rounded-full max-w-5xl md:flex justify-between items-center mx-auto">
                    <figure id='nav-logo'></figure>
                    <div className='navbar-menu'>
                        <ul className='flex gap-5'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Solution</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <DarkMode></DarkMode>
                        <a className="px-5 py-1 bg-black text-white text-xs rounded-3xl">Talk with us</a>
                    </div>
                </div>
                {/* for small nav */}
                <div className="lg:hidden pt-6 px-5 text-sm w-full flex justify-between items-center mx-auto">
                    <figure id='nav-logo'></figure>
                    <div className="flex items-center">
                        <DarkMode></DarkMode>
                        <a className="px-5 py-1 bg-black text-white text-xs rounded-3xl">Talk with us</a>
                        <figure className='menu-logo'></figure>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;