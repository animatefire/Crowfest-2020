<template>
  <div>
    <div
      v-for="(artist, i) in schedule"
      @mouseover="hover = i"
      :class="artist"
      :key="`artist-${i}`"
      :alt="artist"
    >
      <p>
        <span class="schedule-artist">{{ artist.artist }}</span>
        <br />
        <span class="schedule-day">{{ artist.day }}</span>/
        <span class="schedule-time">{{ artist.time }}</span>/
        <span class="schedule-stage">{{ artist.stage }}</span>
      </p>

      <div
        class="members-and-bio"
        v-if="schedule[hover].members && schedule[hover].members == schedule[i].members"
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
          <span v-if="artist.quote" class="schedule-quote">
            {{artist.quote}}
            <br />
          </span>
          Members:
          <span class="members">{{schedule[hover].members}}</span>
          <br />
          {{schedule[hover].bio}}
          {{schedule[hover].bioB}}
          {{schedule[hover].bioC}}
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
      hover: 0
    };
  }
};
</script>
