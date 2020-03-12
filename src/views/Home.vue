<template>
  <header :style="{
      backgroundImage: `url('${schedule[x].img}')`
    }" class="header">
    <div class="screen">
      <h1>
        <span class="title">June 20-21 2020</span>

        <span class="subtitle">Ransom Park Tioga Center, NY</span>
      </h1>
      <ticket-button />
    </div>
  </header>
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
.header {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  text-align: center;
  //display: flex;
}

span {
  text-transform: uppercase;
  text-align: left;
  display: block;
  line-height: 4rem;
  color: #eee;
}

.title {
  font-size: 3rem;
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
  margin-top: 10rem;
}
</style>
