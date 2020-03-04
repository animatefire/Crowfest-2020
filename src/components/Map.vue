<template>
  <div class="map" />
</template>

<script>
  /////////////
  import gmapsInit from '../assets/utils/gmaps';

  export default {
    name: 'map',
    async mounted() {
      try {
        const google = await gmapsInit();

        const map = new google.maps.Map(this.$el, {
          center: { lat: 42.058, lng: -76.3445 },
          zoom: 17
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
</script>

<style></style>
