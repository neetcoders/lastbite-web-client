'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { CgMenu, CgClose } from "react-icons/cg";
import { ButtonBlackLarge, ButtonWhiteLarge } from '../Button/Button';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from "react-icons/io";

import clsxm from '@/lib/clsxm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShowNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className='sticky top-0 z-[100] w-full bg-success-main text-typo-white'>
      <div className="flex flex-row items-center h-16 md:h-20 justify-center md:justify-between px-24">
        {!isOpen && (
          <button
            className='block md:hidden absolute left-5'
            onClick={toggleShowNav}
          >
            <CgMenu className='text-typo-white text-h6' />
          </button>
        )}
        <Link href='/' className='flex flex-row items-center gap-2 md:gap-4'>
          <p className='text-h5 text-typo-white font-bold'>Last<span className='text-typo-main'>Bite</span></p>
        </Link>

        {/* Navbar Desktop */}
        <nav className='hidden md:block'>
          <ul className='flex flex-row gap-8 justify-between items-center'>
            <li>
              <Link href='#about-us'>
                <p className='text-paragraph text-typo-main font-bold'>
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href='#order'>
                <p className='text-paragraph text-typo-main font-bold'>
                  Order
                </p>
              </Link>
            </li>
            <li>
              <Link href='/user/register'>
                <ButtonBlackLarge text='Register'></ButtonBlackLarge>
              </Link>
            </li>
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center items-center rounded-xl py-3 px-3 text-sm font-medium text-white bg-typo-white focus:outline-none focus-visible:ring-2">
                    <p className='text-paragraph text-typo-main font-bold'>
                      Login
                    </p>
                  <IoIosArrowDown className="-mr-1 ml-2 h-5 w-5 text-typo-main"/>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active ? 'bg-success-hover text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href='/user/login'
                          >
                            as customer
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active ? 'bg-success-hover text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href='/store/login'
                          >
                            as seller
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsxm(
          'fixed left-0 top-0 flex flex-col items-center gap-12',
          'w-full h-screen px-4 pt-10 pb-24 md:hidden bg-success-main',
          'transition ease-in-out duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
         <Link
          href='/'
          className='flex flex-row items-center gap-2 md:gap-4'
          onClick={closeNav}
        >
          <p className='text-h5 text-typo-white font-bold'>Last<span className='text-typo-main'>Bite</span></p>
        </Link>
        <nav className='flex-1 w-full'>
          <ul className='space-y-4'>
            <div className='space-y-4 w-full text-base p-2.5'>
              <li>
                <Link href='#about-us' onClick={closeNav}>
                  <p className='text-paragraph text-typo-main font-bold'>
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href='#order' onClick={closeNav}>
                  <p className='text-paragraph text-typo-main font-bold'>
                    Order
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/user/register'>
                  <ButtonBlackLarge text='Register'></ButtonBlackLarge>
                </Link>
              </li>
              <li>
                <Menu as="div" className="relative text-left">
                  <div>
                    <Menu.Button className="flex w-full justify-center items-center rounded-xl py-3 px-3 text-sm font-medium text-white bg-typo-white focus:outline-none focus-visible:ring-2">
                      <p className='text-paragraph text-typo-main font-bold'>
                        Login
                      </p>
                    <IoIosArrowDown className="-mr-1 ml-2 h-5 w-5 text-typo-main"/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active ? 'bg-success-hover text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              href='/user/login'
                            >
                              as customer
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active ? 'bg-success-hover text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              href='/store/login'
                            >
                              as seller
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </div>
          </ul>
        </nav>

        <button
            className='rounded-full border border-white bg-transparent p-2 hover:bg-warning-main'
            onClick={toggleShowNav}
          >
            <CgClose className='text-white text-2xl' />
          </button>
      </div>
    </header>
  );
}