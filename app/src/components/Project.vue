<template>
    <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-12">
  <div class="container">
    <div class="mb-8 md:mb-10 lg:mb-10">
      <div class="mx-auto w-full max-w-lg text-center">
        <div class="flex flex-wrap items-center justify-center gap-3">
        <h2 class="inline mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-4xl">
          Let's discuss your project
        </h2>
        <p class="md:text-md">
          Book a free consultation to explore how we can transform your design ideas into reality.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <RouterLink
            to="/book"
            class="bg-orange-600 focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
            title="Button"
          >
            Book Now
        </RouterLink>
          <RouterLink
            to="/process"
            class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
            title="Button"
          >
            View Process
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

</template>