// Data container

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


// Function to validate form
function formValidate() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;
  var gender = document.getElementById("gender").value;

  if (day < 1 || day > 31 || day == "" || day == 0) {
    alert("You have entered an invalid date!");
  }

  if (month < 1 || month > 12 || month =="" || month == 0) {
    alert("You have entered an invalid date!");
  }

  if (year < 1900 || year > 2020 || year == "" || year == 0) {
    alert("You have entered an invalid year!");
  }


  if (gender == "") {
    alert("Kindly, add your gender!");
  }
  








}