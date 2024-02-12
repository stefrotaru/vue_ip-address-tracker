<template>
  <div class="result-display">
    <div class="result-display__card">
        <div class="result-display__card__title">IP Address</div>
        <p class="result-display__card__value clearfix">{{ this.ipAddress }}</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">Location</div>
        <p class="result-display__card__value">{{ this.location }}</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">Timezone</div>
        <p class="result-display__card__value">{{ this.timezone }}</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">ISP</div>
        <p class="result-display__card__value">{{ this.isp }}</p>
    </div>
  </div>
</template>

<script>
  import { store } from '../../store/store.js';

  export default {
    name: 'ResultDisplay',
    data() {
      return {
        ipAddress: store.getIpAddress(),
        location: store.getLocation(),
        timezone: store.getTimezone(),
        isp: store.getIsp()
      };
    },
    computed: {
      updateStore() {
        this.ipAddress = store.getIpAddress();
        this.location = store.getLocation();
        this.timezone = store.getTimezone();
        this.isp = store.getIsp();
      }
    },
    watch: {
      updateStore() {
        this.ipAddress = store.getIpAddress();
        this.location = store.getLocation();
        this.timezone = store.getTimezone();
        this.isp = store.getIsp();
      }
    },
  }
</script>