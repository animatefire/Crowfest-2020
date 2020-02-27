<template>
  <div class="schedule" v-if="day == schedule.day">
    <h2>{{schedule[i].artist}}</h2>
    <h3>{{schedule[i].time}}pm {{schedule[i].day}}</h3>
    <h6>Performing at the {{schedule[i].stage}}</h6>
  </div>
</template>

<script>
////////////////////////////////////
/*

day = "SATURDAY";
markup += `
    <div class = "row">
    <div class="col-1-of-2">
    <h1>${day}</h1>`;
schedule.forEach((cur, i, arr) => {
  if (schedule[i].day == day) {
    markup += `
      <div class="schedule">
        <h2>${schedule[i].artist}</h2>
        <h3>${schedule[i].time}pm [${schedule[i].day}]</h3>
        <h6>Performing at the ${schedule[i].stage}</h6>
      </div>
      `;
  }
});
markup += `</div></div>`;
*/
</script>
