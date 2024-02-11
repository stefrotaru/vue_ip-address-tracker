<script setup>
  import SearchBar from './SearchBar.vue';
  import ResultDisplay from './ResultDisplay.vue';
</script>

<template>
  <div class="header">
    <h1 class="header__title">IP Address Tracker</h1>
    <SearchBar />
    <ResultDisplay />
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>