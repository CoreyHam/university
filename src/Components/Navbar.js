import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>  <nav className="fixed relative flex flex-wrap items-center justify-between px-2 bg-red-700 m-0 shadow" >
            <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-end text-lg lg:text-xs text-white">
                <button className="py-2 px-4 hover:bg-red-900">MAP</button>
                <button className="py-2 px-4 hover:bg-red-900">NEWS</button>
                <button className="py-2 px-4 hover:bg-red-900">VISIT</button>
                <button className="py-2 px-4 hover:bg-red-900">APPLY</button>
                

            </div>
        </nav>
            <nav className="relative lg:absolute lg:bg-transparent w-screen z-10 flex flex-wrap items-center justify-between px-2 py-3 bg-red-950 m-0 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            Saturn University
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/academics"
                                ><p className="border-b-4 border-transparent hover:border-white">ACADEMICS</p>
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/admissions"
                                    
                                ><p className="border-b-4 border-transparent hover:border-white">ADMISSIONS & AID</p>
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/student-life"
                                ><p className="border-b-4 border-transparent hover:border-white">STUDENT LIFE</p>
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/research"
                                ><p className="border-b-4 border-transparent hover:border-white">RESEARCH</p>
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/athletics"
                                ><p className="border-b-4 border-transparent hover:border-white">ATHLETICS</p>
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 flex items-center text-lg uppercase font-bold leading-snug text-white"
                                    to="/about"
                                ><p className="border-b-4 border-transparent hover:border-white">ABOUT</p>
                                </CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

// figure out how to condense this down by dynamically making the lis