<template>
  <section id="relume" class="relative overflow-hidden px-[5%] py-12 md:py-12 lg:py-0">
    <div class="container relative">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="../assets/Tshirt.png"
          class="size-full object-cover scale-105 opacity-0"
          alt="Relume placeholder image"
          ref="heroBg"
        />
      </div>

      <!-- Hero Content -->
      <div
        class="relative z-10 flex min-h-[16rem] flex-col items-start justify-center p-8 md:min-h-[40rem] md:p-16"
      >
        <div class="w-full max-w-md">
          <h1
            class="mb-5 text-6xl font-semibold text-text-alternative md:mb-6 md:text-9xl lg:text-5xl opacity-0 translate-y-8"
            ref="heroTitle"
          >
            Transform your brand with <span class="text-orange-600">Custom</span> <span class="text-green-500">Print designs</span>
          </h1>
          <p
            class="text-text-alternative md:text-md opacity-0 translate-y-8"
            ref="heroText"
          >
            RBT Design specializes in creating distinctive, premium printed products that express
            your narrative. We transform concepts into wearable masterpieces with exceptional
            craftsmanship and imagination.
          </p>
        </div>

        <div
          class="mt-6 flex flex-wrap items-center gap-4 md:mt-8 opacity-0 translate-y-8"
          ref="heroButtons"
        >
          <router-link 
            to="/book"
            class="inline-flex gap-3 items-center justify-center transition-all duration-300 border border-green-500 hover:bg-green-500 hover:text-white text-text-alternative px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
            title="Book a consultation"
          >
            Book a Consultation
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const heroTitle = ref(null);
const heroText = ref(null);
const heroButtons = ref(null);
const heroBg = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  // Animate background fade-in and zoom
  tl.to(heroBg.value, {
    opacity: 1,
    scale: 1,
    duration: 2.5,
    ease: "power2.out",
  })
    // Animate title
    .to(
      heroTitle.value,
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
      },
      "-=1" // Overlap start
    )
    // Animate text
    .to(
      heroText.value,
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
      },
      "-=0.5"
    )
    // Animate buttons
    .to(
      heroButtons.value,
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
      },
      "-=0.5"
    );
});
</script>

<style scoped>
#relume img {
  will-change: transform, opacity;
}
</style>
