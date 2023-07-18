const $countdown = document.querySelector('.countdown-display');
let count = parseInt($countdown.textContent);
const countdownID = setInterval(() => {
  //console.log(count);
  if (count > 1) {
    $countdown.textContent = --count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}, 1000);
