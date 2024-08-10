const form = document.querySelector("form");

// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid number in height.`;
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid number in weight.`;
    result.style.color = "red";
  } else {
    const finalbmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your Body Mass Index is ${finalbmi}kg/m2 and ${findHelth(
      finalbmi
    )}`;
  }
});

const findHelth = (bmi) => {
  if (bmi < 18.5) {
    return `You are Underweight`;
  } else if (bmi < 24.9 && bmi > 18.5) {
    return `It's Your Normal weight`;
  } else if (bmi < 29.9 && bmi > 25) {
    return `You are Overweight`;
  } else {
    return `You are Obesity`;
  }
};
