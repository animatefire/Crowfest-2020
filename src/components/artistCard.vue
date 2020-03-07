<template>
  <div id="background" :style="{ backgroundImage: `url('${schedule[hover].img}')`}">
    <div class="screen">
      <div
        v-for="(artist, i) in schedule"
        @mouseover="hover = i"
        :id="`${schedule[i].img}`"
        :class="artist"
        :key="`artist-${i}`"
      >
        <h2>{{ schedule[i].artist }}</h2>
        <h4>{{ schedule[i].day }}</h4>
        <p>
          <strong>{{ schedule[i].time }}</strong>
          <em>{{ schedule[i].stage }}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import schedule from "../assets/data/schedule.js";
export default {
  data() {
    return {
      schedule,
      hover: 1,
      isActive: false
    };
  }
};
</script>

<style scoped lang="scss">
#background {
  display: flex;
  flex-flow: row wrap;
  transition: all 0.5s ease;
  transition-delay: 0.5s;
  background-repeat: no-repeat;
  background-size: cover;
}

.screen {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  padding: 1em;
}

.artist {
  text-align: center;
  max-width: 50rem;
  transition: all 0.5s ease;
  //display: inline-block;
  line-height: 2rem;
  flex: 0 1 auto;

  /*
  activeClass {
    transform: scale(2);
    position: absolute;
    transform-origin: center;
    top: 50%;
    left: 50%;
  }
  */

  &:hover {
    transform: scale(1.4);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    //@include color-secondary;
  }
}

h1,
h2,
h3,
h4,
h5,
p {
  color: hsl(20, 20, 85);
}
</style>
