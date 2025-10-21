<template>
   <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-2 mt-20 bg-orange-200">
  <div class="container">
    <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
      <div>
        <div class="rb-5 mb-5 md:mb-6">
          <img
            src="../assets//Animation.png"
            class="size-20"
            alt="Relume logo"
          />
        </div>
        <h2 class="rb-5 mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-5xl">
          Precision meets <span class="text-orange-600">Creativity</span><br>in every <span class="text-green-500">design</span>
        </h2>
        <p class="md:text-md">
          We are passionate designers who transform blank canvases into powerful brand statements. Our team combines technical expertise with artistic vision..
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <router-link 
            to="portfolio"
            class="bg-orange-600 focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
            title="Button"
          >
            Learn More
            </router-link>
        </div>
      </div>
      <div>
        <img
          src="../assets/Black tshirt.png"
          class="w-full h-96 object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </div>
  </div>
</section>

</template>

<script setup>

</script>