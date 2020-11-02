var profileNames = ["ESR1_Pamela", "ESR2_Pietro", "ESR3_Roger", "ESR4_Shubham", "ESR5_Bernhard", "ESR6_Pooya", "ESR7_Mohamed", "ESR8_Deniz", "ESR9_Anatolii", "ESR10_Panagiotis", "ESR11_Marina", "ESR12_Tommaso", "ESR13_Kateryna", "ESR14_Sara", "ESR15_Larissa"];
var hash = window.location.hash;
for (var i = 0; i < profileNames.length; i++) {   
    if (hash.substring(1) == profileNames[i]) {
        document.getElementById(profileNames[i]).style.display='block';
    }
}
function showAccordion(IDName) {
  var x = document.getElementById(IDName);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    var accordionName = ["ProjectMission", "Jobs", "Fellows", "Training", "DissComm"];
    for (var i = 0; i < accordionName.length; i++) {
      var y = document.getElementById(accordionName[i]);
        if (accordionName[i] != IDName) {
          if (y.className.indexOf("w3-show") != -1) {
            y.className = y.className.replace(" w3-show", "");
          }
        }
    }
    if (IDName.includes("ReadMore")) {
    var z = document.getElementById(IDName.concat("Btn"));
    z.innerHTML = "-&nbsp;&nbsp;Read Less";
    z.className += " background-websiteRed";
    }
  } else { 
    x.className = x.className.replace(" w3-show", "");
    if (IDName.includes("ReadMore")) {
    var z = document.getElementById(IDName.concat("Btn"));
    z.innerHTML = "+&nbsp;&nbsp;Read More";
    z.className = z.className.replace(" background-websiteRed", "");
    }
  }
}
function animateBars(y) {
y.classList.toggle("change")
}
var WP = document.getElementsByClassName("WorkPackages");
for (var i = 0; i < WP.length; i++) {
  WP[i].addEventListener("click", function() {
    this.classList.toggle("wpTabActive");
    var wpDescription = this.nextElementSibling;
    if (wpDescription.style.maxHeight) {
      wpDescription.style.maxHeight = null;
    } else {
      wpDescription.style.maxHeight = wpDescription.scrollHeight + "px";
    } 
  });
}

// For CountDown Timer On Coming Soon Page
var countDownDate = new Date("Octuber 1, 2020 11:00:00").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = countDownDate - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (timeRemaining < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").style.display="none";
    }
}, 1000);

function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  var x = document.getElementById(elementId+"_Btn");
  if (elementId != 'blogpostURL') {
      x.classList.add("w3-animate-zoom");
      setTimeout(function changeBack(){x.classList.remove("w3-animate-zoom");},1000);
  } else {
      x.classList.add("background-websiteRed");
      x.classList.add("w3-spin");
      setTimeout(function changeBack(){x.classList.remove("background-websiteRed");x.classList.remove("w3-spin");},1000);
  }
}
