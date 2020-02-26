import schedule from '../../assets/data/schedule';
//import artists from '../../assets/data/artists';

/*
const header = `
  style="
    height: 45vh;
    background-image: url(/img/artists/${schedule[i].image});
    background-size: cover;
    border-image-repeat: no-repeat;
  "
  `;
*/
//Only what's inside Artists gets exported...
//But Artists has access to global variables within this file...

let Artists = {
  render: () => {
    let day = 'FRIDAY';
    let markup = `
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
    markup += `</div>`;

    ////////////////////////////////////

    day = 'SATURDAY';
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
    return markup;
  }
};

export default Artists;
