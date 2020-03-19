<template>
  <artist-card />
</template>

<script>
import schedule from "../assets/data/schedule";
const x = Math.floor(Math.random() * schedule.length);
//const title = "June 20-21 2020";
export default {
  data() {
    return {
      schedule,
      //title,
      x
    };
  }
};
</script>

<style scoped lang="scss">
.logo {
  fill: #eee;
  height: 20rem;
  max-width: 80vw;
  //margin-bottom: -7rem;
  //margin-top: -5rem;
}

.header {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  text-align: center;
}

span {
  text-transform: uppercase;
  text-align: left;
  display: inline-block;
  line-height: 4rem;
  color: #eee;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
}

.subtitle {
  font-weight: 300;
  font-size: 1.6rem;
}

.screen {
  height: 100%;
  padding: 1em;
}
</style>
