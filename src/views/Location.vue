<template>
  <div class="location">
    <div class="location__info">
      <h2 alt="ransom park">Ransom Park</h2>
      <p alt="street address">Route 17 C, Tioga Center, NY 13845</p>
      <p alt="phone number">1-607-687-2292</p>
    </div>
    <google-map></google-map>
  </div>
</template>


<style lang="scss" scoped>
iframe,
.location-info {
  height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
}

.location__info {
  padding: 1rem;
}

@media screen and (min-width: 400px) {
  .location {
    display: flex;
  }

  .location__info {
    flex: 1;
    min-width: 50vw;
    height: 100vh;
  }

  iframe {
    flex: 1;
    height: 100vh;
  }
}
</style>