<template>
  <div>
    <header class="header" :style="{
      backgroundImage: `url('${schedule[x].img}')`
    }">
      <div class="screen">
        <logo class="logo" />
        <h1>
          <span class="title">June 12-13 2020</span>

          <a href="#/location">
            <span class="subtitle">Ransom Park Tioga Center, NY</span>
          </a>
        </h1>
        <ticket-button />
      </div>
    </header>
    <scheduleCard />
    <!--
    <artists />
    <location />
    <camping />
    <about />
    -->
  </div>
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
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  padding: 1em;
}

.btn {
  position: inline-block;
  //top: 70vh;
  //left: 50%;
  //transform: translate(-50%, -50%);
}
</style>
