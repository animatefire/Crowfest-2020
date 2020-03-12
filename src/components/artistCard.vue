<template>
  <div id="background" :style="{ backgroundImage: `url('${schedule[hover].img}')`}">
    <div class="screen">
      <logo class="poster-header" />

      <div class="artists">
        <div
          v-for="(artist, i) in schedule"
          @mouseover="hover = i"
          :class="artist"
          :key="`artist-${i}`"
          :alt="artist"
        >
          <p>
            <span class="schedule-artist">{{ schedule[i].artist }}</span>
            <br />
            <span class="schedule-day">{{ schedule[i].day }}</span>/
            <span class="schedule-time">{{ schedule[i].time }}</span>/
            <span class="schedule-stage">{{ schedule[i].stage }}</span>
          </p>
        </div>
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
      hover: 3,
      isActive: false
    };
  }
};
</script>

<style scoped lang="scss">
#background {
  transition: all 0.5s ease;
  transition-delay: 0.3s;
  background-repeat: no-repeat;
  background-size: cover;
}

.poster-header {
  padding: 1rem;
  margin-bottom: 3rem;
  width: 75vw;
  margin: 0 auto;
  height: auto;
  fill: #eee;
}

h1 {
  text-align: center;
  font-size: 4rem;
}

.screen {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  padding: 1rem;
}

.artists {
  display: flex;
  flex-flow: row wrap;
}

.artist {
  margin-top: 1rem;
  transition: all 0.5s ease;
  flex: 1 0 auto;

  &:hover {
    transform: scale(1.1);
    transform: translateX(2rem);
  }
}

.schedule-artist {
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 800;
}

//.schedule-day {}
//.schedule-time {}

.schedule-artist {
  transform: translateX(2rem);
}

@media screen and (min-width: 40rem) {
  .screen {
    padding: 4rem;
  }
  h1 {
    font-size: 7rem;
  }
  .schedule-artist {
    font-size: 2.5rem;
  }
  .artist {
    &:hover {
      transform: scale(1.15);
    }
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

span {
  font-family: "open sans", sans-serif;
}
</style>

