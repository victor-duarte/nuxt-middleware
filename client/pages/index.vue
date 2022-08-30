<template>
  <div>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, gravida ut quam eu, pellentesque
      euismod risus. Quisque bibendum felis nisl, vel varius tellus varius quis. Duis sit amet convallis neque. Nam nec
      arcu non risus porttitor blandit. Vestibulum at massa porta, consectetur erat ut, porttitor ante. Etiam lobortis
      nec mauris volutpat facilisis. Nullam sed purus neque.</p>
  </div>
</template>

<script setup lang="ts">
console.log('Page: Home')

definePageMeta({
  layout: 'base',
  middleware: 'lorem',
  title: 'Home'
})
</script>
