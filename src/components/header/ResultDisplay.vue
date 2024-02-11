<template>
  <div class="result-display">
    <div class="result-display__card">
        <div class="result-display__card__title">IP Address</div>
        <p class="result-display__card__value clearfix">192.212.174.101</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">Location</div>
        <p class="result-display__card__value">Brooklyn, NY 10001</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">Timezone</div>
        <p class="result-display__card__value">UTC-05:00</p>
    </div>
    <div class="result-display__card">
        <div class="result-display__card__title">ISP</div>
        <p class="result-display__card__value">SpaceX Starlink</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ResultDisplay',
    data() {
      return {
        
      };
    },
  }
</script>