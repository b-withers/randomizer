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

//created function to run on button click
randominze = function () {
	//input students names into array studentsArray
var studentsArray = [1,2,3,4,5,6,7,8,9];
studentsArray = shuffle(studentsArray);
}