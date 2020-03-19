<template>
  <section id="camping">
    <i class="material-icons compass"></i>
    <p>
      Camping is free on a first come, first serve basis. Tents and trailers are
      welcome--although there are no hook-ups for trailers. Bathrooms are
      available, but there are <em>no</em> shower facilities.
      <strong>Be sure to take out what you bring in</strong>.
    </p>
  </section>
</template>

<style scoped lang="scss">
  #camping {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1em;
    height: 85vh;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
  }

  p {
    max-width: 80rem;
  }

  .compass {
    display: flex;
  }
</style>
