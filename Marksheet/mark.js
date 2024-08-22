// alert("Welcome to the Student's Marksheet section");
function Result() {
  document.querySelector(".statusCard").style.visibility = "visible";

  let eng = parseInt(document.querySelector("#english").value);
  let hindi = parseInt(document.querySelector("#hindi").value);
  let math = parseInt(document.querySelector("#math").value);
  let phy = parseInt(document.querySelector("#physics").value);
  let chem = parseInt(document.querySelector("#chemistry").value);

  // Error section

  if (eng == " " && hindi == " " && math == " " && phy == " " && chem == " ") {
    alert("First Enter your subject wise number.....");
  }

  // This section for Total Mark

  if (eng > 100 || hindi > 100 || math > 100 || phy > 100 || chem > 100) {
    alert("Please Enter a valid number.........");
  } else {
    var sum = eng + hindi + math + phy + chem;
    document.querySelector("#totalMark").innerHTML = sum;
  }

  // This section for Percentage

  let per = sum / 5;

  document.querySelector("#perMark").innerHTML = `${per}%`;

  // This is Grade Section

  if (per >= 70 && per <= 100) {
    document.querySelector(
      "#grade"
    ).innerHTML = `<span style="color:green;">A</span>`;
  } else if (per >= 45 && per < 70) {
    document.querySelector(
      "#grade"
    ).innerHTML = `<span style="color:blue;">B</span>`;
  } else if (per >= 33 && per < 45) {
    document.querySelector(
      "#grade"
    ).innerHTML = `<span style="color:rgb(230, 192, 69);">C</span>`;
  } else {
    document.querySelector(
      "#grade"
    ).innerHTML = `<span style="color:red;">D</span>`;
  }

  // this is status section

  if (per >= 33 && per <= 100) {
    document.querySelector(
      "#status"
    ).innerHTML = `<span style="color:green;">Pass</span>`;
  } else {
    document.querySelector(
      "#status"
    ).innerHTML = `<span style="color:red;">Fail</span>`;
  }
}

// Reset function

function Reset() {
  document.querySelector(".hide").value = " ";

  document.querySelector(".statusCard").style.visibility = "hidden";
}
