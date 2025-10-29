<template>
  <section id="relume" class="px-[5%] py-16 md:py-14 lg:py-10 overflow-hidden bg-green-200">
    <div class="container">
      <div class="flex flex-col items-center">
        <!-- Header -->
        <div class="mb-12 text-center md:mb-18 lg:mb-10">
          <div class="w-full max-w-2xl mx-auto">
            <h2 class="mb-5 text-5xl font-sembold md:mb-6 md:text-7xl lg:text-5xl">
              Services
            </h2>
            <p class="md:text-md">
              RBT Design specializes in the creation of distinctive, premium printed products that uniquely express your narrative and individual story. Our dedicated team turns your innovative concepts into wearable masterpieces, showcasing exceptional craftsmanship and boundless imagination at every step of the process. Each product is a reflection of our commitment to quality and artistic vision, ensuring that your message and style stand out in a remarkable way.
            </p>
          </div>
        </div>

        <!-- Carousel Wrapper -->
        <div class="relative w-full max-w-4xl overflow-hidden">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(item, index) in cards"
              :key="index"
              class="min-w-full flex flex-col items-center text-center px-4"
            >
              <div class="mb-6 md:mb-8">
                <img :src="item.image" :alt="item.title" class="mx-auto w-56 md:w-72 object-contain" />
              </div>
              <h3 class="mb-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
                {{ item.title }}
              </h3>
              <p class="text-sm md:text-base">
                {{ item.text }}
              </p>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full shadow px-3 py-1 md:px-4 md:py-2"
          >
            ‹
          </button>
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full shadow px-3 py-1 md:px-4 md:py-2"
          >
            ›
          </button>

          <!-- Dots -->
          <div class="flex justify-center mt-6 space-x-2">
            <span
              v-for="(card, i) in cards"
              :key="i"
              class="h-3 w-3 rounded-full cursor-pointer transition-all"
              :class="i === currentIndex ? 'bg-yellow-500 w-5' : 'bg-gray-300'"
              @click="goToSlide(i)"
            ></span>
          </div>
        </div>

        <!-- Button -->
        <div class="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <RouterLink 
            to="Pictures"
            class="bg-yellow-500 inline-flex gap-3 items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none border text-text-primary bg-background-primary px-6 py-3"
          >
            Explore More
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import hoodie from "@/assets/hoodie.png";
import cup from "@/assets/cup.png";
import flask from "@/assets/flask.png";
import WhiteTshirt from "@/assets/White Tshirt.png";


  const cards = [
  { title: "Hoodie Printing", image: hoodie, text: "High-quality custom hoodie prints for your brand or events." },
  { title: "Mug & Cup Printing", image: cup, text: "Durable and vibrant mug printing for gifts or merchandise." },
  { title: "Flask Printing", image: flask, text: "Personalized flask printing with elegant, lasting finishes." },
  { title: "T-Shirt Printing", image: WhiteTshirt, text: "Custom t-shirt designs for all occasions and styles." },
]

const currentIndex = ref(0);
let intervalId = null;

// Go to next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length;
};

// Go to previous slide
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + cards.length) % cards.length;
};

// Go to a specific slide
const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-slide every 4 seconds
onMounted(() => {
  intervalId = setInterval(nextSlide, 6000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
