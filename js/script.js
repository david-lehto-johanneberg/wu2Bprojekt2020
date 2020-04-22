function myFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("burgermenuitems");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
  }
  }