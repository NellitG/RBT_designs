<template>
  <section class="bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 class="text-3xl font-semibold mb-2">{{ contactInfo.title }}</h2>
          <p class="text-gray-600">{{ contactInfo.subtitle }}</p>
        </div>
        <div class="text-sm text-gray-500">
          <p>{{ contactInfo.email }}</p>
          <p>{{ contactInfo.phone }}</p>
          <p>{{ contactInfo.address }}</p>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="bg-white p-6 rounded-2xl shadow-md space-y-4 max-w-3xl">
        <!-- Row 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">First name *</label>
            <input
              v-model="form.firstName"
              type="text"
              class="w-full border border-orange-600 rounded-lg p-2"
            />
            <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Last name *</label>
            <input
              v-model="form.lastName"
              type="text"
              class="w-full border border-orange-600 rounded-lg p-2"
            />
            <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Email *</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full border border-orange-600 rounded-lg p-2"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Phone number</label>
            <input
              v-model="form.phone"
              type="tel"
              class="w-full border border-orange-600 rounded-lg p-2"
            />
          </div>
        </div>

        <!-- Topic -->
        <div>
          <label class="block text-sm font-medium mb-1">Topic *</label>
          <select v-model="form.topic" class="w-full border border-orange-600 rounded-lg p-2">
            <option value="">Select a topic</option>
            <option v-for="topic in topics" :key="topic" :value="topic">{{ topic }}</option>
          </select>
          <p v-if="errors.topic" class="text-red-500 text-sm mt-1">{{ errors.topic }}</p>
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-medium mb-1">Message *</label>
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full border border-orange-600 rounded-lg p-2"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <!-- Terms -->
        <div class="flex items-center gap-2">
          <input
            v-model="form.termsAccepted"
            type="checkbox"
            id="terms"
            class="w-4 h-4"
          />
          <label for="terms" class="text-sm">I agree to the Terms and Privacy Policy *</label>
        </div>
        <p v-if="errors.termsAccepted" class="text-red-500 text-sm mt-1">{{ errors.termsAccepted }}</p>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="bg-green-500 text-white px-6 py-2 rounded-lg transition"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <!-- Success Message -->
        <p v-if="successMessage" class="text-green-600 font-medium mt-3">
          {{ successMessage }}
        </p>
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-600 font-medium mt-3">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contactInfo = {
  email: 'godfrey@rbtdesigns.org',
  phone: '+254712345678',
  address: 'Nairobi, Kenya',
  title: 'Contact us',
  subtitle: "We're ready to bring your design vision to life"
}

const topics = ['Design', 'Development', 'Branding', 'Startups']

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  termsAccepted: false
})

const errors = ref({})
const successMessage = ref('')
const errorMessage = ref('')
const loading = ref(false)

function validateForm() {
  errors.value = {}

  if (!form.value.firstName) errors.value.firstName = 'First name is required.'
  if (!form.value.lastName) errors.value.lastName = 'Last name is required.'
  if (!form.value.email) errors.value.email = 'Email is required.'
  else if (!/\S+@\S+\.\S+/.test(form.value.email)) errors.value.email = 'Invalid email format.'
  if (!form.value.topic) errors.value.topic = 'Please select a topic.'
  if (!form.value.message) errors.value.message = 'Message cannot be empty.'
  if (!form.value.termsAccepted) errors.value.termsAccepted = 'You must accept the terms.'

  return Object.keys(errors.value).length === 0
}

async function submitForm() {
  if (!validateForm()) return
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const API_URL = import.meta.env.VITE_API_URL || ''
    const response = await fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: form.value.firstName,
        last_name: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone,
        topic: form.value.topic,
        message: form.value.message
      })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.detail || data.error || 'Submission failed.')

    successMessage.value = data.message || '✅ Message sent successfully!'
    form.value = { firstName: '', lastName: '', email: '', phone: '', topic: '', message: '', termsAccepted: false }

  } catch (err) {
    errorMessage.value = err.message || '❌ Something went wrong. Please try again.'
  } finally {
    loading.value = false
    setTimeout(() => (successMessage.value = ''), 5000)
  }
}

</script>
