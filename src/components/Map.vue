<template>
  <div class="map" />
</template>

<script>
  /////////////
  import gmapsInit from '/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/utils/gmaps.js';

  export default {
    name: 'map2',
    async mounted() {
      var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

      mapboxgl.accessToken =
        'pk.eyJ1Ijoiam9obnBmYW5ua3VjaGVuIiwiYSI6ImNrNzU2YjF2MTB2ZmEza3I5ZWI1em1veWoifQ.JzP8nbkHZg8SzFeC6U0mKQ';
      var map = new mapboxgl.Map({
        container: $this.$el,
        style: 'mapbox://styles/mapbox/streets-v11'
      });
    },

    name: 'map',
    async mounted() {
      try {
        const google = await gmapsInit();

        const map = new google.maps.Map(this.$el, {
          center: { lat: 42.058, lng: -76.3445 },

          address: '5 Locust St, Barton, NY 13734, USA',
          zoom: 17
        });

        //map.map

        /*
        const geocoder = new google.maps.Geocoder();
        const map = new google.maps.Map(this.$el);

        geocoder.geocode(
          { address: '5 Locust St, Barton, NY 13734, USA' },
          (results, status) => {
            if (status !== 'OK' || !results[0]) {
              throw new Error(status);
            }

            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
          }

        );
        */
      } catch (error) {
        console.error(error);
      }
    }
  };
</script>

<style></style>
