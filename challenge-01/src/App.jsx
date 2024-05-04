import './App.css'
import DarkMode from './components/DarkMode/DarkMode'
import { FaGears } from "react-icons/fa6";
import { FaUmbrella } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";
import { FaPiedPiper } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

function App() {

    return (
        <div id='app-css' className=''>
            {/* navbar */}
            <div className='lg:fixed w-full top-3 z-50'>
                <div id='navbar-glass' className="hidden py-3 px-5 text-sm rounded-full max-w-5xl md:flex justify-between items-center mx-auto">
                    <figure id='nav-logo'></figure>
                    <div className='navbar-menu'>
                        <ul className='flex gap-5'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Solution</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">About us</a></li>
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
            {/* banner */}
            <div id='hero-banner' className="hero min-h-screen relative">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center relative">
                    <div className="max-w-3xl flex flex-col relative">
                        <h1 className="fade-text-main mb-5 text-5xl font-bold">Transform your workflow with cutting-edge solutions from FYTOBYTE LIMITED.</h1>
                        <p className="hidden lg:block mb-5 max-w-xl mx-auto text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquid sapiente suscipit amet
                            optio quia fuga rerum ex cupiditate maiores,
                            perferendis blanditiis, quam a.</p>
                        <div className='flex gap-2 lg:gap-5 mx-auto'>
                            <button className="px-3 py-2 rounded-md text-xs lg:text-sm">Get Started</button>
                            <button className="px-3 py-2 rounded-md text-xs lg:text-sm">Join us</button>
                        </div>
                    </div>
                    <figure className='w-full absolute top-80 lg:top-[220px] lg:left-1/2 transform lg:-translate-x-80 -translate-y-4 lg:-translate-y-1 -z-10'>
                        <img className='w-[600px]' src="/public/banner-img.png" alt="" />
                    </figure>
                </div>
            </div>
            {/* section */}
            <div className='mt-56'>
                <div id='badge' className='w-fit flex gap-2 mx-auto rounded-full px-3 justify-center items-center border-[1.5px] border-black'>
                    <h3>Our Services</h3>
                    <FaGears />
                </div>
                <div className='text-center space-y-5 mt-5 flex flex-col items-center'>
                    <h3 className='fade-text lg:w-full w-1/2 text-3xl font-bold max-w-lg'>Transform your tech business with tailored services</h3>
                    <p className='text-gray-400'>Websites / Applications / Web3 / Blockchain</p>
                </div>

                <div className='max-w-4xl lg:p-0 p-10 mx-auto space-y-5 lg:mt-10'>

                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8">
                        <div id='badge-card' className="h-52 w-40 lg:w-full mx-auto col-span-1 rounded-3xl p-5">
                            <figure id='logo-cloud'></figure>
                            <p className='text-lg font-bold'>Lorem Ipsum</p>
                            <p className='text-[11px]'>Create Fast And Simple</p>
                            <p className='text-xs mt-3 lg:mt-5 line-clamp-3 lg:line-clamp-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos voluptatem quo laborum perferendis eligendi voluptas nam dignissimos hic dolorem inventore…</p>
                        </div>
                        <div className="h-52 lg:col-span-2">
                            <img className='w-full h-52 object-cover rounded-3xl' src="/public/grid-img-1.png" alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="h-52"><img className='w-full h-52 object-cover rounded-3xl' src="/public/grid-img-2.png" alt="" /></div>

                        <div id='badge-card' className="h-52 w-40 lg:w-full mx-auto col-span-1 rounded-3xl p-5">
                            <figure id='logo-code'></figure>
                            <p className='text-lg font-bold'>Custom Web Development</p>
                            <p className='text-[11px]'>SPA / MPA</p>
                            <p className='text-xs mt-3 lg:mt-5 line-clamp-3 lg:line-clamp-none'>Tailored website solutions to meet specific
                                business needs and goals.</p>
                        </div>

                        <div className="h-52 w-40 lg:w-full mx-auto col-span-2 lg:col-span-1 rounded-3xl p-5 bg-gradient-to-br from-[#e7a0ff9a] to-[#977cff6a]">
                            <figure id='logo-code'></figure>
                            <p className='text-lg font-bold'>Custom Web Development</p>
                            <p className='text-[11px]'>SPA / MPA</p>
                            <p className='text-xs mt-3 lg:mt-5 line-clamp-3 lg:line-clamp-none'>Tailored website solutions to meet specific
                                business needs and goals.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* section cards */}
            <div className='mt-28 mb-20'>
                <div id='badge' className='w-fit flex gap-2 mx-auto rounded-full px-3 justify-center items-center border-[1.5px] border-black'>
                    <h3>Our Solution</h3>
                    <FaUmbrella />
                </div>
                <div className='text-center space-y-5 mt-5 flex flex-col items-center'>
                    <h3 className='fade-text lg:w-full w-1/2 text-3xl font-bold max-w-lg'>Streamlining operations,
                        unleashing seamless digital solutions</h3>
                    <p className='text-gray-400'>Innovative solutions for seamless digital transformation.</p>
                </div>
                <div className='lg:max-w-4xl mx-auto lg:mt-5'>
                    <div className="lg:grid flex flex-col lg:grid-cols-2 items-center gap-8 py-5 px-10 lg:p-0">
                        <div id='kb-badge' className="h-full lg:w-full w-64 flex flex-col rounded-xl">
                            <img
                                alt=""
                                src="/public/card-1.png"
                                className="h-32 w-full object-cover lg:h-1/2 rounded-t-xl"
                            />
                            <div className='px-5 py-5'>
                                <h3 className="lg:text-lg font-bold text-sm">FYTOBYTE LIMITED</h3>
                                <p className="lg:text-base font-bold text-sm">Solutions</p>
                                <p className="mt-2 text-xs line-clamp-2 lg:line-clamp-none">
                                    A comprehensive business service app offering efficient solutions for seamless operations
                                    and growth.
                                </p>
                            </div>
                        </div>
                        <div id='kb-badge' className="h-full lg:w-full w-64 flex flex-col rounded-xl">
                            <img
                                alt=""
                                src="/public/card-2.png"
                                className="h-32 w-full object-cover lg:h-1/2 rounded-t-xl"
                            />
                            <div className='px-5 py-5'>
                                <h3 className="text-lg font-bold sm:text-xl">FYTOBYTE LIMITED</h3>
                                <p className='lg:text-base font-bold text-sm'>Innovate</p>
                                <p className="mt-2 text-xs line-clamp-2 lg:line-clamp-none">
                                    A comprehensive business service app offering efficient solutions for seamless operations
                                    and growth.
                                </p>
                            </div>
                        </div>
                        <div id='kb-badge' className="h-full lg:w-full w-64 flex flex-col rounded-xl">
                            <img
                                alt=""
                                src="/public/card-3.png"
                                className="h-32 w-full object-cover lg:h-1/2 rounded-t-xl"
                            />
                            <div className='px-5 py-5'>
                                <h3 className="text-lg font-bold sm:text-xl">FYTOBYTE LIMITED</h3>
                                <p className='lg:text-base font-bold text-sm'>Connect</p>
                                <p className="mt-2 text-xs line-clamp-2 lg:line-clamp-none">
                                    A comprehensive business service app offering efficient solutions for seamless operations
                                    and growth.
                                </p>
                            </div>
                        </div>
                        <div id='kb-badge' className="h-full lg:w-full w-64 flex flex-col rounded-xl">
                            <img
                                alt=""
                                src="/public/card-4.png"
                                className="h-32 w-full object-cover lg:h-1/2 rounded-t-xl"
                            />
                            <div className='px-5 py-5'>
                                <h3 className="text-lg font-bold sm:text-xl">FYTOBYTE LIMITED</h3>
                                <p className='lg:text-base font-bold text-sm'>Sphere</p>
                                <p className="mt-2 text-xs line-clamp-2 lg:line-clamp-none">
                                    A comprehensive business service app offering efficient solutions for seamless operations
                                    and growth.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* section cards */}
            <div className='mt-20 mb-20'>
                <div id='badge' className='w-fit flex gap-2 mx-auto rounded-full px-3 justify-center items-center border-[1.5px] border-black'>
                    <h3>Knowledge Base</h3>
                    <SiKnowledgebase />
                </div>
                <div className='text-center space-y-5 mt-5 flex flex-col items-center'>
                    <h3 className='fade-text lg:w-full w-1/2 text-3xl font-bold max-w-lg'>FAQ & Documentation</h3>
                    <p className='text-gray-400 w-96'>FYTOBYTE LIMITED provides customers complete entry to knowledge base API and documentation.</p>
                </div>
                <div className='max-w-4xl mx-auto mt-5'>
                    <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="h-64 w-1/2 lg:w-full">
                            <img
                                alt=""
                                src="/public/robot-2.png"
                                className="lg:h-full h-64 lg:w-full object-cover rounded-3xl"
                            />
                        </div>
                        <div className="h-fit w-1/2 lg:w-full rounded-xl">
                            <div id='badge-card' className="col-span-1 rounded-3xl px-5 py-7">
                                <FaPiedPiper className='text-4xl' />
                                <p className='lg:text-lg font-bold'>Full API ACCESS</p>
                                <p className='text-xs mt-5 line-clamp-4 lg:line-clamp-none'>Sign up and access our intuitive platform. Upload your data , then customize preferences. Our robust tools analyze and generate insights promptly. Collaborate seamlessly with team members using integrated communication features. Watch your operations optimize as our app streamlines workflows and drives efficiency for your success.</p>
                                <button className='faq-btn px-3 py-1'>Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* section cards */}
            <div className='mt-20 mb-20'>
                <div id='badge' className='w-fit flex gap-2 mx-auto rounded-full px-3 justify-center items-center border-[1.5px] border-black'>
                    <h3>Tech News</h3>
                    <IoNewspaperOutline />
                </div>
                <div className='text-center space-y-5 mt-5 flex flex-col items-center'>
                    <h3 className='fade-text lg:w-full w-1/2 text-3xl font-bold max-w-lg'>Our Blog & News</h3>
                    <p className='text-gray-400 w-96'>We share essential insights from the technology sector, AI,
                        and the world of software development.</p>
                </div>
                <div className='max-w-4xl mx-auto space-y-5 mt-10 grid grid-cols-1 rounded-xl lg:p-0 px-6'>
                    <div id='badge-card' className="h-72 rounded-2xl flex">
                        <div className="lg:w-1/2 w-1/2 px-5 py-3 lg:p-5">
                            <p className='text-md font-bold'>Unveiling the Art of Web Design: A Step-by-Step Guide</p>
                            <p className='text-xs mt-5 line-clamp-5 lg:line-clamp-none'>In the ever-evolving digital landscape, a visually appealing
                                anduser-friendly website is crucial for success. Whether you&rsquo;re aseasoned designer or a novice looking to dip your toes into the world of web design, this step-by-
                                step guide will help you create a stunning and effective…</p>
                            <button className='faq-btn px-3 py-1'>Learn More</button>
                        </div>
                        <img
                            alt=""
                            src="/public/blog.png"
                            className="lg:h-full lg:w-full w-[220px] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
            {/* footer */}
            <footer className="">
                <div className="mx-auto max-w-5xl p-5 lg:px-20">
                    <div className="mt-8 flex lg:grid lg:grid-cols-4 gap-14 lg:mt-0">
                        <div className="col-span-1">
                            <p className="font-bold text-sm lg:text-base">Explore</p>

                            <ul className="hidden lg:block mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75">About FYTOBYTE LIMITED</a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75">Our Solutions</a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75">Our Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <p className="font-bold text-sm lg:text-base">Expertise</p>

                            <ul className="hidden lg:block mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> Cloud Integration Solutions </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> Custom Web Development </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> Data Analytics and Insights </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <p className="font-bold text-sm lg:text-base">Services</p>

                            <ul className="hidden lg:block mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> Cybersecurity & Compliance </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> AI-Powered Automation </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> User Experience Design </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <p className="font-bold text-sm lg:text-base">Info</p>

                            <ul className="hidden lg:block mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> FAQ </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75">Documentation </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-400 transition hover:opacity-75"> Get in touch </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <img className='w-32' src="/public/logo-mark.svg" alt="" />
                    </div>

                    <ul className="mt-3 flex justify-center gap-6 md:gap-3">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className=""
                            >
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="mt-2 pt-2">
                        <p className="text-center text-xs/relaxed">© 2023 Fytobyte. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
