<template>
  <section class="max-w-5xl mx-auto px-6 py-12">
    <h1 class="text-2xl font-semibold mb-8">
      Make A <span class="text-green-500">Reservation</span>
    </h1>

    <!-- Step 1: Date -->
    <div class="border border-green-500 rounded-xl mb-6">
      <details open class="p-6">
        <summary class="font-semibold text-lg mb-4 cursor-pointer">
          1. Choose Date
        </summary>
        <div>
          <input
            type="date"
            v-model="selectedDate"
            class="border border-orange-600 px-3 py-2 rounded-md w-full max-w-xs"
          />
        </div>
      </details>
    </div>

    <!-- Step 2: User Info -->
    <div class="border border-green-500 rounded-xl mb-6">
      <details open class="p-6">
        <summary class="font-semibold text-lg mb-4 cursor-pointer">
          2. Add Your Information
        </summary>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-1">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              class="border border-orange-600 w-full px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="border border-orange-600 w-full px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm mb-1">Phone</label>
            <input
              v-model="form.phone"
              type="tel"
              class="border border-orange-600 w-full px-3 py-2 rounded-md"
            />
          </div>

          <!-- County -->
          <div>
            <label class="block text-sm mb-1">County</label>
            <select
              v-model="form.county"
              class="border border-orange-600 w-full px-3 py-2 rounded-md"
            >
              <option disabled value="">Select County</option>
              <option v-for="county in counties" :key="county" :value="county">
                {{ county }}
              </option>
            </select>
          </div>

          <!-- Message -->
          <div class="md:col-span-2">
            <label class="block text-sm mb-1">Message</label>
            <textarea
              v-model="form.message"
              class="border border-orange-600 w-full px-3 py-2 rounded-md"
            ></textarea>
          </div>
        </div>
      </details>
    </div>

    <!-- Step 3: Payment -->
    <div class="border border-green-500 rounded-xl mb-6">
      <details open class="p-6">
        <summary class="font-semibold text-lg mb-4 cursor-pointer">
          3. Payment
        </summary>

        <div>
          <label class="flex items-center gap-2 mb-2">
            <input type="radio" v-model="form.payment" value="cash" /> Cash at
            location
          </label>
          <label class="flex items-center gap-2 mb-2">
            <input type="radio" v-model="form.payment" value="card" /> Credit
            Card
          </label>
          <label class="flex items-center gap-2 mb-4">
            <input type="radio" v-model="form.payment" value="mpesa" /> M-Pesa
          </label>

          <!-- Card Payment -->
          <div v-if="form.payment === 'card'" class="border rounded-lg p-4">
            <div class="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Card Number"
                v-model="form.card.number"
                class="border px-3 py-2 rounded-md"
              />
              <input
                placeholder="Name on Card"
                v-model="form.card.name"
                class="border px-3 py-2 rounded-md"
              />
              <input
                placeholder="Expiry Date"
                v-model="form.card.expiry"
                class="border px-3 py-2 rounded-md"
              />
              <input
                placeholder="CVC"
                v-model="form.card.cvc"
                class="border px-3 py-2 rounded-md"
              />
            </div>
          </div>

          <!-- M-Pesa -->
          <div v-else-if="form.payment === 'mpesa'" class="border rounded-lg p-4">
            <input
              placeholder="Enter M-Pesa Number"
              v-model="form.card.number"
              class="border px-3 py-2 rounded-md w-full"
            />
            <div class="text-right">
              <button
                @click.prevent="submitPayment"
                class="px-6 mt-2 py-3 bg-orange-600 text-white font-semibold rounded-md transition"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>

    <!-- Submit -->
    <div class="text-right">
      <button
        @click="submitReservation"
        class="px-6 py-3 bg-green-500 text-white font-semibold rounded-md transition"
      >
        Book Now
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { counties } from '@/data/counties.js'

const selectedDate = ref('')

const form = ref({
  name: '',
  email: '',
  phone: '',
  county: '',
  message: '',
  payment: 'cash',
  card: { number: '', name: '', expiry: '', cvc: '' },
})

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    county: '',
    message: '',
    payment: 'cash',
    card: { number: '', name: '', expiry: '', cvc: '' },
  }
  selectedDate.value = ''
}

const submitReservation = async () => {
  console.log("✅ Book Now clicked");
  if (!selectedDate.value) return alert('Please select date');
  
  if (!form.value.name || !form.value.county)
    return alert('Please fill in all required fields.');

  const payload = {
    date: selectedDate.value,
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    county: form.value.county,
    message: form.value.message,
    payment: form.value.payment,
    card_number: form.value.card.number,
    card_name: form.value.card.name,
    expiry: form.value.card.expiry,
    card_cvc: form.value.card.cvc
  };

  try {
    const res = await fetch('http://localhost:8000/api/reservations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('✅ Reservation successful!! HooooRaaaayyy!!');
      resetForm();
    } else {
      const errorData = await res.json();
      console.error('Server Error:', errorData);
      alert('❌ Failed to submit reservation.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('❌ Network error. Please try again.');
  }
};

</script>
