
import Link from 'next/link';
import React from 'react';

const Nav = () => {

  return (
    <div>
      <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-1 pt-2 sm:px-1 lg:px-1">
          <div class="flex items-center justify-between h-5">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="flex items-baseline ">
                  <a href="#" class="text-red-500  hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs ffont-thin">Cars</a>
                  <a href="#" class="text-black-100 hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Prestige cars</a>
                  <a href="#" class="text-black-100   hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Vans</a>
                  <a href="#" class="text-black-100   hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Bikes</a>
                  <a href="#" class="text-black-100   hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Motorhomes</a>
                  <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Carvans</a>
                  <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Trucks</a>
                  <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Farm</a>
                  <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Plant</a>                 <a href="#" class="text-black-50   hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Security advice</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="text-red-500  hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs ffont-thin">Cars</a>
            <a href="#" class="text-black-100 hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Prestige cars</a>
            <a href="#" class="text-black-100   hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Vans</a>
            <a href="#" class="text-black-100   hover:bg-opacity-75 block px-2 py-2 rounded-md text-xs font-thin">Bikes</a>
            <a href="#" class="text-black-100   hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Motorhomes</a>
            <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Carvans</a>
            <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Trucks</a>
            <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Farm</a>
            <a href="#" class="text-black-100  hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Plant</a>
            <a href="#" class="text-black-50   hover:bg-opacity-75 px-2 py-2 rounded-md text-xs font-thin">Security advice</a>
          </div>

        </div>
      </nav>
      <nav class="bg-white border-gray-100 border-b-2" >
        <div class="max-w-6xl mx-auto px-1 sm:px-1 lg:px-1">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-6 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
              </div>

              <div class="hidden md:block">

                <div class="ml-1 flex items-baseline ">

                  <a href="#" class=" text-black  py-1 rounded-md text-2xl font-medium">AutoTrader</a>
                  <div class="ml-6 flex items-baseline hover:text-gray-400 ">
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Used cars</a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">New cars</a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Sell your car</a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Value your car </a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Car reviews</a>
                    <a href="#" class="text-black-500 hover:text-black px-1 py-2 rounded-md text-sm font-medium">Car leasing</a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Finance</a>
                    <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Insurance</a>

                  </div>
                </div>
              </div>
            </div>

            <div class="hidden md:block">
              <div class="ml-1 flex items-center md:ml-1">
                <div class=" ml-2  relative">
                  <div>
                    <button class=" rounded-full   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <svg class="ml-1 mt-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <span class="text-black-100 hover:bg-opacity-75 block rounded-md text-xs font-extralight">Saved</span>
                </div>

                <div class=" ml-6 relative">
                  <div>
                    <button type="button" class="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                      <svg class="ml-1 h-8 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <span class="text-black-100 hover:bg-opacity-75 block rounded-md text-xs font-extralight">Sign in</span>
                </div>
              </div>

              <div class="-mr-2 flex md:hidden">
                <button type="button" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="ml-1 flex items-baseline ">
            <a href="#" class=" text-black  py-1 rounded-md text-2xl font-medium">AutoTrader</a>
            <div class="ml-6 flex items-baseline hover:text-gray-400 ">

              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Used cars</a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">New cars</a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Sell your car</a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Value your car </a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Car reviews</a>
              <a href="#" class="text-black-500 hover:text-black px-1 py-2 rounded-md text-sm font-medium">Car leasing</a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Finance</a>
              <a href="#" class="text-black-500  hover:text-black px-1 py-2 rounded-md text-sm font-medium">Insurance</a>
            </div>
          </div>
          <div class="pt-4 pb-3 border-t border-indigo-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=T6AY8bD1bU&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}
export default Nav;