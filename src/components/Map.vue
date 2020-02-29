<template>
  <div class="map" />
</template>

<script>
/////////////
import gmapsInit from "/Users/johnpfannkuchen/Documents/Development/crowfest2020/src/assets/utils/gmaps.js";

export default {
  name: "map",
  async mounted() {
    try {
      const google = await gmapsInit();

      const map = new google.maps.Map(this.$el, {
        center: { lat: 42.058, lng: -76.3445 },
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
