// Kung Fu Panda Quiz

document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {
  let character = document.getElementById("charcter").value.toLowerCase();
  let name = document.getElementById("name").value.toLowerCase();
  let place = document.getElementById("place").value.toLowerCase();
  let father = document.getElementById("father").value.toLowerCase();

  // Check if answer is correct
  if (character === "Po") {
    document.getElementById("charcter").innerHTML = "Correct";
  } else {
    document.getElementById("charcter").innerHTML = Incorrect;
  }

  if (name === "Oogway") {
    document.getElementById("name").innerHTML = "Correct";
  } else {
    document.getElementById("name").innerHTML = Incorrect;
  }

  if (place === "China") {
    document.getElementById("place").innerHTML = "Correct";
  } else {
    document.getElementById("place").innerHTML = Incorrect;
  }

  if (father === "Mr.Ping") {
    document.getElementById("father").innerHTML = "Correct";
  } else {
    document.getElementById("father").innerHTML = Incorrect;
  }
}
