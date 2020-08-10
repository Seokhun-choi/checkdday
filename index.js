const NINE_HOURS_MILLISECONDS = 32400000;
const CALCULATE_TIME = document.querySelector(".js-calculate-day");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-11-21:00:00:00+0900");
  const today = new Date();

  const gap = xmasDay.getTime() - today.getTime();
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap - day * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minite = Math.floor(
    (gap - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60) / (1000 * 60)
  );
  const second = Math.floor(
    (gap -
      day * 1000 * 60 * 60 * 24 -
      hour * 1000 * 60 * 60 -
      minite * 1000 * 60) /
      1000
  );

  CALCULATE_TIME.innerHTML = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${
    minite < 10 ? `0${minite}` : minite
  }m ${second < 10 ? `0${second}` : second}s `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
