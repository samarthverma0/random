var team = [
    "Samarth",
    "Parth",
    "Shashwat",
    "Gunjan",
    "Rishi",
    "Prakhar",
    
  ];
  var text = "";
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      var temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  
  function shuffler() {
    shuffle(team);
    document.getElementById("player-0").innerHTML = team[0];
    document.getElementById("player-1").innerHTML = team[1];
    document.getElementById("player-2").innerHTML = team[2];
    document.getElementById("player-3").innerHTML = team[3];
    document.getElementById("player-4").innerHTML = team[4];
    document.getElementById("player-5").innerHTML = team[5];
    document.getElementById("player-6").innerHTML = team[6];
    document.getElementById("player-7").innerHTML = team[7];
    document.getElementById("player-8").innerHTML = team[8];
  }
  
  // var myInterval = setInterval(shuffler, 50);
  // clearInterval(myInterval);
  
  document.getElementById("random").addEventListener("click", shuffler);
  
  window.addEventListener("keypress", checkKeyPressed, false);
   
  function checkKeyPressed(e) {
      if (e.charCode == "32") {
        document.getElementById("random").addEventListener("click", shuffler);    
      }
  }
  