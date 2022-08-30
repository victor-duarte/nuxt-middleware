<template>
  <div>
    <h1>Ipsum</h1>
    <p>Curabitur semper tortor a enim pretium, vel sollicitudin metus rhoncus. Sed commodo faucibus nulla, nec ultricies
      est vehicula sed. Quisque turpis mi, porta a vestibulum eget, feugiat sed ipsum. Sed libero turpis, imperdiet nec
      est suscipit, feugiat aliquam libero. Ut non blandit nulla, at convallis elit. Ut at est interdum, pharetra nisi
      eu, laoreet elit. Maecenas ante lacus, auctor vitae nulla id, sodales suscipit sapien. Ut nec venenatis diam.
      Nulla ac urna dui. Nulla sit amet arcu libero. Nunc nec cursus sapien. Cras eu rutrum ipsum, sed porta ante. Sed
      fermentum est vel risus vehicula pulvinar non vitae sem. Donec luctus vestibulum ornare.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'base',
  middleware: 'lorem',
  title: 'Home'
})

console.log('Page: Ipsum')
</script>
