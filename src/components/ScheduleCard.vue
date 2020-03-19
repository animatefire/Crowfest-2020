<template>
  <div
    id="background"
    :style="{ backgroundImage: `url('${schedule[hover].img}')` }"
  >
    <div class="screen">
      <logo class="poster-header" />

      <div>
        <div class="artists">
          <div
            v-for="(artist, i) in schedule"
            @mouseover="hover = i"
            :class="artist"
            :key="`artist-${i}`"
            :alt="artist"
          >
            <div class>
              <p>
                <span class="schedule-artist">{{ artist.artist }}</span>
                <br />

                <span @click="billingSwitch('byDay')" class="schedule-day">{{
                  artist.day
                }}</span>
                at <span class="schedule-time">{{ artist.time }}</span> on the
                <span @click="billingSwitch('byStage')" class="schedule-stage"
                  >{{ artist.stage }} stage</span
                >
              </p>

              <div
                class="members-and-bio"
                v-if="
                  schedule[hover].members &&
                    schedule[hover].members == schedule[i].members
                "
              >
                <a :href="artist.website" target="_blank">
                  <website-icon v-if="artist.website" class="icon" />
                </a>
                <a :href="artist.twitter" target="_blank">
                  <twitter-icon v-if="artist.twitter" class="icon" />
                </a>
                <a :href="artist.facebook" target="_blank">
                  <facebook-icon v-if="artist.facebook" class="icon" />
                </a>
                <a :href="artist.instagram" target="_blank">
                  <instagram-icon v-if="artist.instagram" class="icon" />
                </a>
                <a :href="artist.youtube" target="_blank">
                  <youtube-icon v-if="artist.youtube" class="icon" />
                </a>
                <a :href="artist.music" target="_blank">
                  <music-icon v-if="artist.music" class="icon" />
                </a>
                <a :href="artist.spotify" target="_blank">
                  <spotify-icon v-if="artist.spotify" class="icon" />
                </a>
                <p>
                  Members:
                  <span class="members">{{ schedule[hover].members }}</span>
                  <br />
                  {{ schedule[hover].bio }}
                  {{ schedule[hover].bioB }}
                  {{ schedule[hover].bioC }}
                  <span v-if="artist.quote" class="schedule-quote">
                    {{ artist.quote }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import schedule from '../assets/data/schedule.js';
  let byBilling = true;
  //let byDay = false;
  //let byStage = true;

  /*
function billingSwitch(event) {
  if (event == byBilling) {
    byBilling = true;
    byDay = false;
    byStage = false;
  } else if (event == byDay) {
    byDay == true;
    byBilling = false;
    byStage = false;
  } else {
    byStage = true;
    byDay = false;
    byBilling = false;
  }
}
*/

  export default {
    data() {
      return {
        schedule,
        hover: 0
        //byBilling: true,
        //byDay: false,
        //byStage: false
      };
    }
    //methods: { billingSwitch }
  };
</script>

<style scoped lang="scss">
  #background {
    transition: all 0.5s ease;
    transition-delay: 0.3s;
    background-repeat: no-repeat;
    //background-size: contain;
    background-size: cover;
    //width: 100%;
    background-attachment: fixed;
  }

  .poster-header {
    width: 75vw;
    height: auto;
    fill: #eee;
  }

  h1 {
    text-align: center;
    font-size: 4rem;
  }

  .screen {
    //display: flex;
    //justify-content: center;
    //flex-flow: row nowrap;

    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    padding: 1rem;
  }

  .schedule-quote {
    color: orange;
  }

  .members {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    //line-height: 3rem;
    color: orange;
  }

  .artists {
    //display: flex;
    //flex-flow: row wrap;
  }

  .artist {
    margin-top: 1rem;
    transition: all 0.5s ease;
    //flex: 1 0 auto;

    &:hover {
      color: orange;
    }
  }

  .schedule-artist {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    max-width: 56rem;
    transition: all 0.5s ease;
  }

  .members-and-bio {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 40rem) {
    .poster-header {
      width: 50vw;
    }

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
        transform: scale(1.05) translateX(4rem);
        margin: 2rem;
      }
    }
  }
</style>
