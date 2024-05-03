import './App.css'
import DarkMode from './components/DarkMode/DarkMode'
import { FaGears } from "react-icons/fa6";

function App() {

    return (
        <div id='app-css' className=''>
            {/* navbar */}
            <div className='fixed w-full top-3 z-50'> {/* Increase z-index to ensure navbar is above other elements */}
                <div id='navbar-glass' className="py-3 px-5 text-sm rounded-full max-w-5xl flex justify-between items-center mx-auto">
                    <figure><img className='w-32' src="/public/logo.png" alt="" /></figure>
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
            </div>
            {/* banner */}
            <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(/banner.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center relative">
                    <div className="max-w-3xl flex flex-col relative">
                        <h1 className="mb-5 text-5xl font-bold">Transform your workflow with cutting-edge solutions from FYTOBYTE LIMITED.</h1>
                        <p className="mb-5 max-w-xl mx-auto text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquid sapiente suscipit amet
                            optio quia fuga rerum ex cupiditate maiores,
                            perferendis blanditiis, quam a.</p>
                        <div className='flex gap-5 mx-auto'>
                            <button className="">Get Started</button>
                            <button className="">Join us</button>
                        </div>
                    </div>
                    <figure className='w-full absolute top-[220px] left-1/2 transform -translate-x-80 -translate-y-1 -z-10'>
                        <img className='w-[600px]' src="/public/banner-img.png" alt="" />
                    </figure>
                </div>
            </div>

            <div className='min-h-screen mt-56'>
                <div className='w-fit flex gap-1 mx-auto rounded-full px-3 justify-center items-center border-[1.5px] border-black'>
                    <h3>Our Services</h3>
                    <FaGears />
                </div>
                <div className='text-center space-y-5 mt-10 flex flex-col items-center'>
                    <h3 className='text-3xl font-bold max-w-lg'>Transform your tech business with tailored services</h3>
                    <p className='text-gray-400'>Websites / Applications / Web3 / Blockchain</p>
                </div>
                <div className='max-w-4xl mx-auto mt-10 space-y-5'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="h-52 col-span-1 rounded-3xl bg-gray-100 p-5">
                            <img className='w-10' src="/public/cloud.png" alt="" />
                            <p className='text-lg font-bold'>Lorem Ipsum</p>
                            <p className='text-[11px]'>Create Fast And Simple</p>
                            <p className='text-xs mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos voluptatem quo laborum perferendis eligendi voluptas nam dignissimos hic dolorem inventore…</p>
                        </div>
                        <div className="h-52 col-span-2 rounded-3xl"><img className='w-full h-52 object-cover rounded-3xl' src="/public/grid-img-1.png" alt="" /></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="h-52"><img className='w-full h-52 object-cover rounded-3xl' src="/public/grid-img-2.png" alt="" /></div>
                        <div className="h-52 rounded-3xl bg-white border-2"></div>
                        <div className="h-52 rounded-3xl bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default App
