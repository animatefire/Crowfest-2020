<template>
  <p>
    {{`${remainingWeeks} weeks, ${remainingDays} day${
    remainingDays == 1 ? "" : "s"
    }, ${remainingHours} hour${
    remainingHours == 1 ? "" : "s"
    }, ${remainingMinutes} minute${remainingMinutes == 1 ? "" : "s"}`}}
  </p>
</template>

<style scoped lang="scss">
</style>

<script>
let now = new Date();
let festival = new Date("June 12, 2020 05:00:00");
let difference = festival - now;
let seconds = difference / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let weeks = days / 7;

let remainingHours = Math.floor(days % 24);
let remainingMinutes = Math.floor(hours % 60);
let remainingDays = Math.floor(days % 7);
let remainingWeeks = Math.floor(weeks);

export default {
  data() {
    return {
      remainingHours,
      remainingMinutes,
      remainingDays,
      remainingWeeks
    };
  }
};
</script>