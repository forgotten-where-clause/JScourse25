let count = 0; //initialize count to 0

function increaseCount() {
    count++; //increment by 1
    displayCount(); //display count
    checkCountValue(); //check and display messages
    console.log("clicked");
    console.log(count);
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
