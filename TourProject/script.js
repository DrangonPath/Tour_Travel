document.getElementById("book-now").addEventListener("click", function () {
    alert("Thank you for booking with us!");
  });
  
  var destinationList = document.getElementById("destination-list");
  destinationList.addEventListener("mouseover", function (e) {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "#f5f5f5";
    }
  });
  destinationList.addEventListener("mouseout", function (e) {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "transparent";
    }
  });
  const menuToggle = document.getElementById("menu-toggle");
  const navigation = document.querySelector("nav ul");
  
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });
  
  const watch = document.getElementById('watch');
  
  function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    watch.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateTime, 1000);
  
  const copyright = document.querySelector('footer p');
  const date = new Date();
  const year = date.getFullYear();
  
  copyright.textContent = `Copyright © ${year} Tour and Travel`;