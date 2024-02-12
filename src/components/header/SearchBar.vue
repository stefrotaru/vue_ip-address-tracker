<template>
  <div class="search-bar">
        <form>
            <input id="input" type="text" @input="getInput" v-model="searchInput" placeholder="Search for any IP address or domain">
            <button type="submit" for="input" @click="search">
                <img src="../../assets/icon-arrow.svg" alt="search">
            </button>
        </form>
    </div>
</template>

<script>
  import { store } from '../../store/store.js';

  export default {
    name: 'SearchBar',
    data() {
      return {
        inputData: '',
      };
    },
    methods: {
      getInput(e) {
        this.inputData = e.target.value;
      },
      search(e) {
        e.preventDefault();
        
        let input = this.inputData;
        const ipAddressPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipAddressPattern.test(input)) {          
          fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${input}`)
                .then(response => response.json())
                .then(data => {
                  store.setLong(data.location.lng);
                  store.setLat(data.location.lat);
                  store.setIpAddress(data.ip);
                  store.setLocation(`${data.location.city}, ${data.location.region} ${data.location.postalCode}`);
                  store.setTimezone(`UTC${data.location.timezone}`);
                  store.setIsp(data.isp);
                })
                .catch(error => {
                  console.log(error);
                });

          // dummy data
          // store.setLong(26.10626);
          // store.setLat(44.43225);
          // store.setIpAddress('82.137.11.198');
          // store.setLocation(`Bucharest, București `);
          // store.setTimezone(`UTC+02:00`);
          // store.setIsp('Digi.Net.Mobil');
        } else {
          // handle error on #input
        }
      }
    }
  }
</script>