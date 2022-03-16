var divs = document.querySelectorAll("div");

/*
divs[0].textContent = divs[0].className;

divs[1].textContent = divs[1].className;

divs[2].textContent = divs[2].className;

divs[3].textContent = divs[3].className;
*/

var i = 0;
while (i < 4) {
  divs[i].textContent = divs[i].className;
  i = i + 1;
}
