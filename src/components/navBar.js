import React from 'react'
import CartBut from './cart'

const Navbar = () => {
  return (
<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
</svg>
      <span class="ml-3 text-xl">HyperStore</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white" href='#'>Inicio</a>
      <a class="mr-5 hover:text-white" href='#'>Productos</a>
      <a class="mr-5 hover:text-white" href='#'>Quienes somos</a>
      <a class="mr-5 hover:text-white" href='#'>Contacto</a>
    </nav>
    <CartBut></CartBut>
  </div>
</header>
  )
} 

export default Navbar