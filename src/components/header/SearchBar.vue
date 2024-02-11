<template>
  <div class="search-bar">
        <form>
            <input type="text" v-model="searchInput" placeholder="Search for any IP address or domain">
            <button @click="search">
                <img src="../../assets/icon-arrow.svg" alt="search">
            </button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      
    };
  },
  methods: {
    search(e) {
      e.preventDefault();
      // this.$emit('search', this.searchInput);
    },
  },
  mounted() {
    
  },
};
</script>