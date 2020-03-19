<template>
  <!--<div id="background" :style="{ backgroundImage: `url('${schedule[hover].img}')`}">-->
  <div id="background">
    <div class="screen">
      <!--////////////////////////-->
      <logo class="poster-logo" />
      <!--////////////////////////-->

      <div class="artists">
        <div
          class="artists"
          v-for="(artist, i) in schedule"
          @mouseover="hover = i"
          :class="artist.artist"
          :key="`artist-${i}`"
          :alt="artist.artist"
        >
          <p v-if="artist.stage == 'Main' && artist.time[0] > 4 && artist.stage != 'fireside'">
            <span class="schedule-artist headlining">{{ artist.artist }}</span>
          </p>
        </div>

        <div class="poster-header">
          <h1>
            <span class="title">June 12-13 2020</span>
          </h1>

          <span class="subtitle">
            <a href="#/location">Ransom Park Tioga Center, NY</a>
            <countdown />
          </span>
        </div>

        <div class="artists">
          <div
            class="artists"
            v-for="(artist, i) in schedule"
            @mouseover="hover = i"
            :class="artist.artist"
            :key="`artist-${i}`"
            :alt="artist.artist"
          >
            <p v-if="artist.time[0] < 4 || artist.stage == 'Side'">
              <span class="schedule-artist not-headlining">{{ artist.artist }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import festival from "../assets/img/people-at-concert.jpg";
import schedule from "../assets/data/schedule.js";
export default {
  data() {
    return {
      schedule,
      festival,
      hover: 3
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
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 3rem;
}

.poster-logo {
  width: 75vw;
  height: auto;
  fill: #eee;
}

.title {
  font-size: 3.5rem;
  font-weight: 400;
}

.subtitle {
  font-weight: 300;
  font-size: 2.4rem;
}

a {
  text-decoration: none;
}

h1 {
  text-align: center;
  font-size: 4rem;
}

.screen {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  //background-color: rgba(0, 0, 0, 0.4);

  height: 100%;
  width: 100%;
  padding: 1rem;
}

.artists {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.artist {
  //margin-top: 1rem;
  transition: all 0.5s ease;
  //flex: 1 0 auto;

  &:hover {
    transform: scale(1.1);
    transform: translateX(2rem);
  }
}

.schedule-artist {
  transform: translateX(2rem);
}

.headlining {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2rem;

  margin: 1.2rem;
}

.not-headlining {
  font-size: 1.6rem;
  margin: 1rem;
}

@media screen and (min-width: 40rem) {
  .poster-logo {
    width: 50vw;

    height: auto;
    fill: #eee;
  }

  .headlining {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.4rem;

    margin: 1.4rem;
  }

  .not-headlining {
    font-size: 1.8rem;
    margin: 1.2rem;
  }

  .poster-header {
    width: 50vw;
  }

  .screen {
    padding: 4rem;
  }
  h1 {
    font-size: 7rem;
  }

  .artist {
    &:hover {
      transform: scale(1.15);
    }
  }
}
</style>

