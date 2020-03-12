<template>
  <section id="camping">
    <i class="material-icons compass">explore</i>
    <ul class="list">
      <li>
        <p>Pitch a tent or park a camper.</p>
      </li>
      <li>
        <p>First come first serve.</p>
      </li>
      <li>
        <p>Totally free.</p>
      </li>
      <li>
        <p>Bathrooms available, but no showers.</p>
      </li>
      <li>
        <p>Take out what you bring in.</p>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#camping {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 100, 200, 0.4),
      rgba(45, 100, 0, 0.4),
      rgba(255, 0, 150, 0.3)
    )
    /*,
    url(/img/artists/fireside.jpg)*/;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1em;
  height: 85vh;
  color: white;
  position: relative;
}

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.compass {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
