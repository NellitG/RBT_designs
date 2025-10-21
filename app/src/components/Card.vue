<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28 bg-green-100" ref="relumeSection">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="rb-12 mb-12 text-center md:mb-18 lg:mb-20 heading">
          <div class="w-full max-w-lg">
            <h2 class="mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-3xl">
              Explore Our <span class="text-orange-500 font-semibold">designs</span> Tailored Just for You
            </h2>
            <p2>Get to see our different designs that are created just for you. From modern to classic.</p2>
          </div>
        </div>
        <div class="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div v-for="(item, index) in plans" :key="index" class="flex w-full flex-col items-center text-center travel-card opacity-0 translate-y-10">
            <div class="rb-6 mb-2 md:mb-8">
              <img :src="item.image" :alt="item.alt" />
            </div>
            <h3 class="mb-2 text-2xl font-semibold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-2xl">{{ item.title }}</h3>
            <p class="mb-2">{{ item.description }}</p>
            <a :href="item.link" :class="item.buttonClass">{{ item.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import arab from '../assets/Arab.png'
import woman from '../assets/Woman.png'
import whitehoodie from '../assets/Whitehoodie.png'

const relumeSection = ref(null)

const plans = [
  {
    image: arab,
    alt: 'Black Hoodies are now available in our store',
    title: 'Black Hoodies are now available in our store',
    description: 'Get yours now and stay cozy while looking stylish with our latest collection of black hoodies.',
    link: '#',
    linkText: 'Discover the Process',
    buttonClass:
      'mt-4 inline-block rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition duration-200 '
  },
  {
    image: woman,
    alt: 'Need that blue Hoodie with a white graffiti?',
    title: 'Need that blue Hoodie with a white graffiti?',
    description: 'Stand out from the crowd with our unique blue hoodie featuring eye-catching white graffiti designs.',
    buttonClass: 'text-orange-600 underline hover:text-black font-medium'
  },
  {
    image: whitehoodie,
    alt: 'We brand you with a smile. High quality designs.',
    title: 'We brand you with a smile. High quality designs.',
    description: 'Experience the perfect blend of comfort and style with our high-quality white hoodies, designed to make you smile.',
    buttonClass: 'text-orange-600 underline hover:text-black font-medium'
  }
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.heading', {
    opacity: 0,
    y: -50,
    duration: 3
  })

  tl.to('.travel-card', {
    opacity: 1,
    y: 0,
    duration: 5,
    stagger: 0.3
  }, "-=0.5")
})
</script>
