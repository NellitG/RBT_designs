<template>
    <section id="relume" class="relative px-[5%] py-16 md:py-24 lg:py-12">
  <div
    class="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16"
  >
    <h1 class="text-5xl font-sembold md:text-7xl lg:text-5xl">Ready to bring your <br><span class="text-orange-600">design to life?</span> </h1>
    <div>
      <p class="md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
        commodo diam libero vitae erat.
      </p>
      <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
        <RouterLink
          to="book"
          class="bg-black focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-white text-text-alternative px-6 py-3"
          title="book"
        >
          Request Quote</RouterLink
        >
        <RouterLink
          to="process"
          class="bg-yellow-500 focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
          title="Button"
        >
          View Process
      </RouterLink>
      </div>
    </div>
  </div>
</section>

</template>