var all = document.querySelectorAll('.calc');

all.forEach((num) => {
  num.addEventListener('click', () => {
    console.log(num.innerHTML);
  });
})


var num1;

var num2;

var outcome;

document.addEventListener("keypress", function(event) {
  pressword(event.key);
  num1 = event.key;
});

function pressword(key) {
  switch (key) {
    case "1":
      console.log(key);
      break;

    case "2":
      console.log(key);
      break;

    case "3":
      console.log(key);
      break;

    case "4":
      console.log(key);
      break;

    case "5":
      console.log(key);
      break;

    case "6":
      console.log(key);
      break;

    case "7":
      console.log(key);
      break;

    case "8":
      console.log(key);
      break;

    case "9":
      console.log(key);
      break;

    case "0":
      console.log(key);
      break;


    case "-":
      console.log(key);
      break;

    case "+":
      console.log(key);
      break;

    case "/":
      console.log(key);
      break;



    default:

  }

}
