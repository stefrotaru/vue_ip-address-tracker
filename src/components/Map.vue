<template>
  <div id="map"></div>
</template>

<script>
  import L from "leaflet";
  import locationIconSvg from "../assets/icon-location.svg";
  import { store } from '../store/store.js';
  
  const locationIcon = L.icon({
    iconUrl: locationIconSvg,
    iconSize: [46, 56],
    iconAnchor: [31, 54],
  });

  export default {
    name: "Map",
    data() {
      return {
        map: null,
        marker: null
      };
    },
    mounted() {
      this.initializeMap();
    },
    computed: {
      long() {
        return store.getLong();
      },
      lat() {
        return store.getLat();
      }
    },
    watch: {
      long() {
        this.updateMap();
      },
      lat() {
        this.updateMap();
      }
    },
    methods: {
      initializeMap() {
        if (store.state.ipAddress === '--') {
          if (sessionStorage.getItem('long') && sessionStorage.getItem('lat')) {
            store.setLong(sessionStorage.getItem('long'));
            store.setLat(sessionStorage.getItem('lat'));
            store.setIpAddress(sessionStorage.getItem('ipAddress'));
            store.setLocation(sessionStorage.getItem('location'));
            store.setTimezone(sessionStorage.getItem('timezone'));
            store.setIsp(sessionStorage.getItem('isp'));

            console.log('***** GRABBED FROM SESSION STORAGE *****')

          } else {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}`)
                  .then(response => response.json())
                  .then(data => {
                    store.setLong(data.location.lng);
                    store.setLat(data.location.lat);
                    store.setIpAddress(data.ip);
                    store.setLocation(`${data.location.city}, ${data.location.region} ${data.location.postalCode}`);
                    store.setTimezone(`UTC${data.location.timezone}`);
                    store.setIsp(data.isp);

                    sessionStorage.setItem('long', data.location.lng);
                    sessionStorage.setItem('lat', data.location.lat);
                    sessionStorage.setItem('ipAddress', data.ip);
                    sessionStorage.setItem('location', `${data.location.city}, ${data.location.region} ${data.location.postalCode}`); 
                    sessionStorage.setItem('timezone', `UTC${data.location.timezone}`);
                    sessionStorage.setItem('isp', data.isp);
                  })
                  .catch(error => {
                    console.log(error);
                  });
          }
        }

        this.map = L.map("map", { zoomControl: false }).setView([store.state.long, store.state.lat], 3);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 3,
          maxZoom: 18,
          attribution: "Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
        }).addTo(this.map);        
      },
      updateMap() {
        let newLong = store.getLong();
        let newLat = store.getLat();

        if (!this.marker) {
          this.map.setView([newLat, newLong], 13);
          this.marker = L.marker([newLat, newLong], { icon: locationIcon }).addTo(this.map);
        } else {
          this.map.setView([newLat, newLong], 13);
          this.marker.setLatLng([newLat, newLong]);
        }
      },
    },
  };
</script>