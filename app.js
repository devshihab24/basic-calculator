const input = document.getElementById("input");
const buttons = document.getElementsByClassName("btn");
let string = "";
// console.log(buttons)

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    if (event.target.innerHTML == "=") {
      // console.log(string)
      string = eval(string);
      input.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      input.value = "";
    } else if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += event.target.innerHTML;
      input.value = string;
    }
  });
}
