<template>
  <div>
    <nav aria-label="primary">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/lorem">Lorem</NuxtLink>
      <NuxtLink to="/ipsum">Ipsum</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
nav a {
  padding: 10px;
}
</style>
