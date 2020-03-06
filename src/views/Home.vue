<template>
  <header :style="{
      backgroundImage: `url('${schedule[x].img}')`
    }" class="header">
    <div class="screen">
      <h1 class="title">{{ title }}</h1>
      <ticket-button />
    </div>
  </header>
</template>

<script>
import schedule from "../assets/data/schedule";
const x = Math.floor(Math.random() * schedule.length);
const title = "Crowfest2020";
export default {
  data() {
    return {
      schedule,
      title,
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
}

.title {
  display: block;
  font-size: 5rem;
}

.screen {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  padding: 1em;
}

.btn {
  margin-top: 18rem;
}
</style>
