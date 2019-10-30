
// Function to validate form
function formValidate() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = document.getElementById("year").value;
  let gender = document.getElementById("gender").value;
  let CC = parseInt(year.slice(0, 2));
  let YY = parseInt(year.slice(2, 4));


  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (day < 1 || day > 31 || day == "") {
    alert("You have entered an invalid day!");
  }

  if (month < 1 || month > 12 || month == "") {
    alert("You have entered an invalid month!");
  }

  if (year < 1900 || year > 2020 || year == "") {
    alert("You have entered an invalid year!");
    return document.getElementById("final").innerHTML = "Enter valid date!"
  }


  let a = Math.floor((14 - month) / 12);
  let y = YY - a;
  let m = month + 12 * a - 2;
  let bdate = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;


  if (gender == "male") {
    return document.getElementById("final").innerHTML =weekday[bdate] + ": " + maleName[bdate];
  }

  else if (gender == "female") {
    return document.getElementById("final").innerHTML = weekday[bdate] + ": " + femaleName[bdate];
  }

}
