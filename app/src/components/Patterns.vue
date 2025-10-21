<template>
  <section id="relume" ref="section" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
        <div ref="textContent" class="text-content">
          <h1 class="rb-5 mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-5xl">
            Discover the Process of <span class="text-green-400">Printing designs</span> and <span class="text-orange-600">design patterns</span>
          </h1>
          <p class="mb-6 md:mb-8 md:text-md">
            Explore how we bring your creative visions to life with cutting-edge printing techniques and vibrant design patterns.
          </p>
          <div class="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
            <div>
              <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">High Quality</h6>
              <p>Deliver exceptional results that stand out in a competitive market.</p>
            </div>
            <div>
              <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Good Customer Service</h6>
              <p>Provide exceptional customer service to meet your needs and expectations.</p>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
    <router-link
      to="/book"
      class="hover:bg-orange-500 border border-border-primary text-text-primary bg-background-primary px-6 py-3 inline-block"
    >
      Book a Consultation
    </router-link>
    
    <router-link
      to="/Process"
      class="bg-green-500 border border-border-primary text-text-primary bg-background-primary px-6 py-3 inline-block"
    >
      Learn the Process
    </router-link>
  </div>
        </div>
        <div ref="imageContent">
          <img
            src="../assets/template.png"
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

onMounted(() => {
  gsap.from(textContent.value, {
    opacity: 0,
    x: -50,
    duration: 5,
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(imageContent.value, {
    opacity: 0,
    x: 50,
    duration: 5,
    delay: 0.2,
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })
})
</script>
