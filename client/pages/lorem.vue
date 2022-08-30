<template>
  <div>
    <h1>Lorem</h1>
    <p>Vestibulum lobortis nec augue a luctus. Aliquam interdum massa non lacinia pretium. Nullam dictum porttitor
      tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam convallis eros erat, ut faucibus
      ligula tristique id.</p>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{  item.email  }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'base',
  middleware: 'lorem',
  title: 'Home'
})

console.log('Page: Lorem')

const { data } = await useFetch('https://jsonplaceholder.typicode.com/users');
</script>
