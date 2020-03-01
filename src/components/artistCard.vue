<template>
  <div>
    <div
      v-for="(artist, i) in schedule"
      :id="`${schedule[i].img}`"
      :class="artist"
      :key="`artist-${i}`"
      :style="{ backgroundImage: `url('img/artists/${schedule[i].img}')`}"
    >
      <div class="screen">
        <div class="info">
          <h2>{{schedule[i].artist}}</h2>
          <h4>{{schedule[i].day}}</h4>
          <p>
            <strong>{{schedule[i].time}}</strong>
            <em>{{schedule[i].stage}}</em>
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
      schedule
    };
  }
};
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
p {
  color: hsl(20, 20, 85);
}
.info {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.screen {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  padding: 1em;
}

.artist {
  background-repeat: no-repeat;
  background-size: cover;
  height: 75vh;
  position: relative;
}
</style>