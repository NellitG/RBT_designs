<template>
  <footer id="relume" class="px-[5%] py-12 md:py-18 lg:py-20">
    <div class="container">
      <div class="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
        <a href="#" class="mb-8">
          <img
            src="../assets/Logo.png"
            alt="Logo image"
            class="inline-block w-32 animate-spin-slow"
          />
        </a>
        <ul
          class="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
        >
          <li><router-link to="/" class="hover:text-green-500 font-medium text-gray-700">Services</router-link></li>
              <li><router-link to="/portfolio" class="hover:text-green-500 font-medium text-gray-700">Portfolio</router-link></li>
              <li><router-link to="/process" class="hover:text-green-500 font-medium text-gray-700">Process</router-link></li>
              <!-- <li><router-link to="/shop" class="hover:text-green-500 font-medium text-gray-700">Shop</router-link></li> -->
        </ul>
      </div>
      <div class="h-px w-full bg-black"></div>
      <div
        class="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8"
      >
        <p class="mt-8 md:mt-0">© 2025 RBT Design. All rights reserved.</p>
        <ul
          class="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0"
        >
          <li class="underline decoration-black underline-offset-1">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="underline decoration-black underline-offset-1">
            <a href="#">Terms of Service</a>
          </li>
          <li class="underline decoration-black underline-offset-1">
            <a href="#">Cookies Settings</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
</style>
