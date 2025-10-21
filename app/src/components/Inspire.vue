<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <header
        class="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        data-aos="fade-down"
      >
        <!-- <p class="mb-3 font-semibold md:mb-4">Portfolio</p> -->
        <h2 class="mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-5xl">
          Our design journey
        </h2>
        <p class="md:text-md">Crafting visual stories across multiple print mediums</p>
      </header>

      <div class="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="0">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="../assets/hood.png"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Startup team hoodies</a></h3>
          <p>
            Bold branding for local business events, enhancing team spirit and visibility.
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="100">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-vector/creative-music-background_1176-197.jpg?t=st=1760791058~exp=1760794658~hmac=52eeed20e3a51831c8a1f33314d8d2f30117f320826c7d6f4eea300cf51656f4&w=1480"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Music festival merch</a></h3>
          <p>
            Vibrant designs that capture the energy of live performances and resonate with festival-goers.
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="200">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="../assets/Teamshirts.jpg"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Corporate Team Shirts</a></h3>
          <p>
            Comfortable apparel that reflects modern tech company culture
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="300">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/portrait-cartoon-sports-team_23-2151756329.jpg?t=st=1760790605~exp=1760794205~hmac=63d199bd41d93cb2e46f2a5c34224114ece506d7919d64ec731f9dcc7680ef08&w=1480"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Charity run shirts</a></h3>
          <p>
            Meaningful designs supporting local community fundraising efforts
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="400">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/blue-monday-arrangement-with-doughnuts_23-2149139129.jpg?t=st=1760789772~exp=1760793372~hmac=791c9e9ac31f05b39e4294ab5da4303fe1b270da11df5c1655fd274949dd5f6e&w=1480"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Custom coffee mugs</a></h3>
          <p>
            Personalized drinkware that tells a unique story, perfect for gifts or promotional items.
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="500">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-vector/sport-fans-supporters-realistic-mockup-accessories_1284-17412.jpg?t=st=1760790297~exp=1760793897~hmac=af030e6bc536d7dd9c4c05054c3178719f2ba8f6d325e1b0daa7fd409341dfd4&w=1480"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-sembold md:text-2xl"><a href="#">Sports team merchandise</a></h3>
          <p>
            Dynamic designs that capture team spirit and energy for fans and players alike.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: 'ease-in-out',
    once: false, // animation happens only once while scrolling down
  })
})
</script>
