//variable for onkeyup function
var input = document.getElementById("inputtext");
//empty array for random items
var studentsArray = [];

function shuffle(array) {
  let students1 = []
  let students2 = []
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
	//split random array into two arrays
  for(let i=0; i<array.length; i++){
    if(i % 2 === 0){
      students1.push(array[i])
    }else{
      students2.push(array[i])
    }
  }
  console.log(students1)
  console.log(students2)
  // print to DOM
document.getElementById("studentsOne").innerHTML = students1;
document.getElementById("studentsTwo").innerHTML = students2;
}

// run the function
randominze = function () {
	//input students names into array studentsArray
studentsArray = shuffle(studentsArray);
}

//function to add items to array
function addRecord() {
  var inp = document.getElementById('inputtext');
  studentsArray.push(inp.value);
	inp.value = "";  
	console.log(studentsArray);
	document.getElementById("values").innerHTML = studentsArray.join(",  ");
}

//click enter to add item function
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("add button-addon2").click();
  }
});

