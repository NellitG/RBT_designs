<template>
  <section id="relume" ref="section" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
        <div ref="textContent">
          <h1 class="mb-5 text-4xl font-sembold leading-[1.2] md:mb-6 md:text-5xl lg:text-5xl">
            Every design tells a story — see how we bring concepts to life
          </h1>
          <p class="mb-6 md:mb-8 md:text-md">
            Explore our portfolio to see how RBT Designs helps brands stand out through originality, clarity, and impact.
          </p>
          <div ref="features" class="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
            <div class="feature flex">
              <div class="mr-4 flex-none self-start">
                <img
                  src="../assets/Animation.png"
                  alt="Relume logo 1"
                  class="size-16"
                />
              </div>
              <div>
                <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Explore More</h6>
                <p>Minimalist logo design for a tech startup.</p>
              </div>
            </div>
            <div class="feature flex">
              <div class="mr-4 flex-none self-start">
                <img
                  src="../assets/Animation.png"
                  alt="Relume logo 2"
                  class="size-16"
                />
              </div>
              <div>
                <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Plan Ahead</h6>
                <p>Custom hoodie line with modern geometric branding.</p>
              </div>
            </div>
          </div>
        </div>
        <div ref="imageContent">
          <img
            src="../assets/designer.png"
            class="w-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const textContent = ref(null)
const imageContent = ref(null)
const features = ref(null)

onMounted(() => {
  gsap.from(textContent.value, {
    opacity: 0,
    x: -60,
    duration: 4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(imageContent.value, {
    opacity: 0,
    x: 60,
    duration: 3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(features.value.querySelectorAll('.feature'), {
    opacity: 0,
    y: 20,
    duration: 3, 
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })
})
</script>
