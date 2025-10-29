<template>
  <header class="bg-orange-600 relative w-full text-sm ">
    <nav class="text-black py-4 relative">
      <div class="container mx-auto px-4 flex items-center justify-between relative">
        
        <!-- Logo on the left -->
        <div class="flex items-center">
          <!-- <img class="h-16 mr-4" src="../assets/Semilogo.png" alt="Your Logo" width="100"> -->
        </div>

        <!-- Centered Navbar Links -->
            <ul class="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <li><router-link to="/" class="hover:text-yellow-500 font-medium text-gray-700">Services</router-link></li>
              <li><router-link to="/portfolio" class="hover:text-yellow-500 font-medium text-gray-700">Portfolio</router-link></li>
              <li><router-link to="/process" class="hover:text-yellow-500 font-medium text-gray-700">Process</router-link></li>
              <!-- <li><router-link to="/shop" class="hover:text-yellow-500 font-medium text-gray-700">Shop</router-link></li> -->
            </ul>

        <!-- Right side: Auth buttons + Hamburger -->
        <div class="flex items-center space-x-4">
          <a href="/Contact" class="px-4 py-2  border border-black text-black rounded-lg">Contact</a>
  
          <!-- Hamburger icon (mobile only) -->
          <button id="menu-toggle" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
  
</template>

<script></script>
