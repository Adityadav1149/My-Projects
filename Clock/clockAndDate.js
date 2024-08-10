const currentDate = document.querySelector(".currentDate");
const currentTime = document.querySelector(".currentTime");

const findDay = (num) => {
  switch (num) {
    case 0:
      return `Sunday`;
      break;
    case 1:
      return `Monday`;
      break;
    case 2:
      return `Tuesday`;
      break;
    case 3:
      return `Wednesday`;
      break;
    case 4:
      return `Thursday`;
      break;
    case 5:
      return `Friday`;
      break;
    case 6:
      return `Satarday`;
      break;

    default:
      break;
  }
};

setInterval(() => {
  // for date and day
  let date = new Date();
  currentDate.innerHTML = `${date.toLocaleDateString()} & ${findDay(
    date.getDay()
  )}`;

  // for  time
  let time = new Date();
  currentTime.innerHTML = time.toLocaleTimeString();
}, 1000);
