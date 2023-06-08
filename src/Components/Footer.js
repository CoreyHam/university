import React from "react";

export default function Footer({ fixed }) {
    return (
        <footer className="relative bg-red-700 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </button>
                            <button
                                className="bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fa-brands fa-facebook-square"></i>
                            </button>
                            <button
                                className="bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button
                                className="bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={() => window.open("https://www.linkedin.com/in/corey-hampton-dev/")}
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </button>
                            <button
                                className="bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={() => window.open("https://github.com/CoreyHam")}
                            >
                                <i className="fa-brands fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm hover:cursor-pointer"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm hover:cursor-pointer"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            href="https://github.com/CoreyHam"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            href="https://www.linkedin.com/in/corey-hampton-dev/"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">
                                    Other Resources
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm hover:cursor-pointer"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm hover:cursor-pointer"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm hover:cursor-pointer"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            Made by{" "}
                            <a
                                href="https://coreyham.github.io"
                                className="text-white hover:text-gray-900"
                            >
                                Corey Hampton
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}