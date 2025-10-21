<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28">
  <div class="container">
    <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
      <div class="order-2 md:order-1">
        <img
          src="../assets/guy.png"
          class="w-full h-96 object-cover"
          alt="Relume placeholder image"
        />
      </div>
      <div class="order-1 md:order-2">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
          <div>
            <div class="mb-3 md:mb-4">
              <img
                src="../assets/Animation.png"
                class="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 class="mb-3 text-xl font-sembold md:mb-4 md:text-2xl">Print & Design Fusion</h3>
            <p>
              Printing and design play a crucial role in transforming concepts and ideas into tangible, visual realities.
            </p>
          </div>
          <div>
            <div class="mb-3 md:mb-4">
              <img
                src="../assets/Animation.png"
                class="size-12"
                alt="Relume logo 2"
              />
            </div>
            <h3 class="mb-3 text-xl font-sembold md:mb-4 md:text-2xl">Print & Design Solutions</h3>
            <p>
              Printing and design are crucial for communication, merging creativity with technology.
            </p>
          </div>
          <div>
            <div class="mb-3 md:mb-4">
              <img
                src="../assets/Animation.png"
                class="size-12"
                alt="Relume logo 3"
              />
            </div>
            <h3 class="mb-3 text-xl font-sembold md:mb-4 md:text-2xl">Print and Design Quality</h3>
            <p>
              Text: Printing and design are key to visual communication, merging creativity with technology.
            </p>
          </div>
          <div>
            <div class="mb-3 md:mb-4">
              <img
                src="../assets/Animation.png"
                class="size-12"
                alt="Relume logo 4"
              />
            </div>
            <h3 class="mb-3 text-xl font-sembold md:mb-4 md:text-2xl">Creative Print Solutions</h3>
            <p>
              Printing and design are vital in visual communication. They turn ideas into tangible experiences.
            </p>
          </div>
        </div>
        <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
          <RouterLink 
            to="portfolio"
            class="bg-orange-600 focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
            title="Learn More"
          >
            Learn More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
</script>

<style scoped>

</style>
