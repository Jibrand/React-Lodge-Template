



import React from "react";
// import Fab from '@mui/material/Fab';
import { Fragment } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";
import { IoMdArrowDropdown } from 'react-icons/io'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const Navigate = useNavigate()


  return (
    <nav className="w-full flex md:justify-center h-20 justify-between items-center  bg-yellow-500 navbar">

      <div className="md:flex-[0.5] flex-initial justify-center items-center " onClick={()=>{Navigate('/')}}>
        <img src={logo} alt="logo" className="w-60 cursor-pointer sm:mr-[400px] ml-5" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link to="/"> <li className={`mx-4 cursor-pointer hover:text-gray-300 p-3 `}>Home</li></Link>
        <Menu as="div" className="relative ml-3"> <div><Menu.Button className="flex text-sm text-white"><span className="hover:text-gray-300 sr-only">Open user menu</span> <p className="hover:text-gray-300"><span > About Us</span></p> <span className="inline-block mr-2 ml-2 mt-1"><IoMdArrowDropdown /></span></Menu.Button></div>
          <Transition as={Fragment} enter="transition ease-out duration-100 transform scale-95 opacity-0" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition ease-in duration-75 transform scale-100 opacity-100" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
            <Menu.Items className="absolute -left-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>{({ active }) => (<Link to="/about" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Who we Are</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/Ecolodge" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Our Ecolodge</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/IquitosPeru" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Iquitos - PERU</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/Testimonials" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Testimonials</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/Contact" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Contact Us</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/Faq" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>FAQ</Link>)}</Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link to="/Programs"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>Program</li></Link>
        <Menu as="div" className="relative ml-3"> <div><Menu.Button className="flex text-sm text-white"><span className="hover:text-gray-300 sr-only">Open user menu</span> <p className="hover:text-gray-300">Volunteering</p> <span className="inline-block mr-2 ml-2 mt-1"><IoMdArrowDropdown /></span></Menu.Button></div>
          <Transition as={Fragment} enter="transition ease-out duration-100 transform scale-95 opacity-0" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition ease-in duration-75 transform scale-100 opacity-100" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
            <Menu.Items className="absolute -left-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Our Volunteering</Link>)}</Menu.Item>
              <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Travel Tips</Link>)}</Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>Contact</li></Link>
        <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>Gallery</li></Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Reservation </button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer sm:mr-5 mr-5" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <p>.</p>)}
        {toggleMenu && (
          <>
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen text-center shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-[24px] w-full my-2 text-center"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
              <Link to="/"> <li className={`mx-4 cursor-pointer text-[24px] hover:text-gray-300 p-3 `}>Home</li></Link>
              <Menu as="div" className="relative ml-3"> <div><Menu.Button className="flex text-sm text-white"><span className="hover:text-gray-300 sr-only">Open user menu</span> <p className="hover:text-gray-300 text-[24px]">About Us</p> <span className="inline-block mr-2 ml-2 mt-1"><IoMdArrowDropdown /></span></Menu.Button></div>
                <Transition as={Fragment} enter="transition ease-out duration-100 transform scale-95 opacity-0" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition ease-in duration-75 transform scale-100 opacity-100" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
                  <Menu.Items className="absolute  -ml-16 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>{({ active }) => (<Link to="/about" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700  text-[25px]')}>Who we Are</Link>)}</Menu.Item>
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>Our Ecolodge</Link>)}</Menu.Item>
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>Iquitos - PERU</Link>)}</Menu.Item>
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>Testimonials</Link>)}</Menu.Item>
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>Contact Us</Link>)}</Menu.Item>
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>FAQ</Link>)}</Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link to="/Programs"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 text-[24px] `}>Our Programs</li></Link>
              <Menu as="div" className="relative ml-3"> <div><Menu.Button className="flex text-sm text-white"><span className="hover:text-gray-300 sr-only">Open user menu</span> <p className="hover:text-gray-300 text-[24px]">Volunteering</p> <span className="inline-block mr-2 ml-2 mt-1"><IoMdArrowDropdown /></span></Menu.Button></div>
                <Transition as={Fragment} enter="transition ease-out duration-100 transform scale-95 opacity-0" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition ease-in duration-75 transform scale-100 opacity-100" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
                  <Menu.Items className="absolute -ml-7 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>{({ active }) => (<Link to="/dashboard" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-[25px]')}>Travel Tips</Link>)}</Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 text-[24px] `}>Contact</li></Link>
              <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3  text-[24px]`}>Gallery</li></Link>

            </ul>
          </>
        )}

      </div>
    </nav>
  );
};

export default Header;
