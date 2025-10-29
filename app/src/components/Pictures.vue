<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-16">
    <div class="container">
      <div class="mb-12 text-center md:mb-18 lg:mb-20">
        <h2 class="mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-6xl">
          Project <span class="text-green-500">Gallery</span>
        </h2>
        <p class="md:text-md">Visual journey of design transformation from concept to final product</p>
      </div>

      <div
        class="grid auto-cols-fr grid-cols-2 grid-rows-2 gap-6 md:auto-cols-auto md:grid-cols-[2fr_1fr_1fr] md:gap-8"
      >
        <a v-for="image in images" :key="image.id" href="#" class="inline-block size-full">
          <div class="size-full">
            <img :src="image.image" :alt="image.title" class="aspect-square size-full object-cover" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"

const images = ref([])

onMounted(async () => {
  const res = await fetch("http://127.0.0.1:8000/api/gallery/")
  images.value = await res.json()
})
</script>
