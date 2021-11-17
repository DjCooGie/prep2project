$(document).ready(function () {
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let myBirthday = document.getElementById("myBirthDate").value;
    let myGender = document.getElementsByName("gender");
    let dateOfBirth = new Date(myBirthday);
    let dayOfTheWeek = dateOfBirth.getDay();
    if (myBirthday === "") {
        document.getElementById('message').innerHTML = "<p class=\"alert alert-danger\">Submit a Valid Date!</p>";
        $('#message').addClass("animated bounce");
    }
    else {
        for (var i = 0; i < myGender.length; i++) {
            if (myGender[i].checked) {
                if (myGender[i].value === "Male") {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male fa-1x\"></i></span>&nbsp;&nbsp;<span>" + maleAkanNames[dayOfTheWeek] + "</span>" + "&nbsp;&nbsp; Born on&nbsp;&nbsp" + days[dayOfTheWeek];
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp;<span>" + femaleAkanNames[dayOfTheWeek] + "</span>" + "&nbsp;&nbsp; Born on&nbsp;&nbsp" + days[dayOfTheWeek];
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }
            else {
                document.getElementById('message').innerHTML = "<p class=\"alert alert-danger\">Select Gender!</p>";
                $('#message').addClass("animated bounce");
            }
        }
    }
}

function clearAkanMessage() {
    document.getElementById('message').innerHTML = "";
}