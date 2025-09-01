<template>
  <section id="contact" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Get in touch</h2>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-text-field v-model="name" label="Name" :rules="[v => !!v || 'Name is required']" required />
        <v-text-field v-model="email" label="Email" :rules="emailRules" required />
        <v-textarea v-model="message" label="Message" :rules="[v => !!v || 'Message is required']" required rows="4" />
        <v-btn type="submit" color="primary" :disabled="!valid">Send</v-btn>
      </v-form>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const valid = ref(false)
const form = ref()
const emailRules = [(v: string) => !!v || 'Email is required', (v: string) => /.+@.+\\..+/.test(v) || 'Email must be valid']
const submit = () => {
  if (form.value?.validate()) {
    alert('Form submitted')
    name.value = ''
    email.value = ''
    message.value = ''
  }
}
</script>
