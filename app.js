// let eye_wrapper = document.querySelector('.eye_wrapper');
// let eye = document.querySelector('.eye');
// let slash_eye = document.querySelector('.slash_eye');
// let result = document.getElementById('result');

// eye_wrapper.addEventListener('click', function(){
//     eye.classList.toggle('d-none');
//     slash_eye.classList.toggle('d-none');

//     if(eye.classList.contains('d-none')){
//         document.getElementById('password').setAttribute('type', 'password');
//     }else{
//         document.getElementById('password').setAttribute('type', 'text');
//     }
// });

// password.addEventListener('input', listener);

// function listener(){
//     let passwordValue = password.value;
//     let passLen = passwordValue.length;

//     if(passLen < 6){
//         result.innerHTML = "<span class='text-danger'>password is too week</span>";
//     }else if(passLen >= 6 && passLen <= 11){
//         result.innerHTML = "<span class= 'text-warning'>password is medium</span>";
//     }else{
//         result.innerHTML = "<span class= 'text-success'>password is strong</span>";
//     }

// }

const eye_wrapper = document.querySelector(".eye_wrapper");
const eye = document.getElementById("eye");
const slash = document.getElementById("slash");
const result = document.getElementById("result");

eye_wrapper.addEventListener("click", function () {
  eye.classList.toggle("d-none");
  slash.classList.toggle("d-none");

  if (eye.classList.contains("d-none")) {
    document.getElementById("password").setAttribute("type", "password");
  } else {
    document.getElementById("password").setAttribute("type", "text");
  }
});

password.addEventListener("input", listener);

function listener() {
  passwordValue = password.value;
  passLen = passwordValue.length;

  if (passLen < 6) {
    result.innerHTML =
      "<span class = 'text-danger'>password is too week</span>";
  } else if (passLen >= 6 && passLen <= 11) {
    result.innerHTML = "<span class = 'text-warning'>password is medium</span>";
  } else {
    result.innerHTML = "<span class = 'text-success'>password is strong</span>";
  }
}

const cars = ["Honda", "Toyota", "Lambor gini", "Marsities BenZ"];
const flowers = ["Rose", "Chapa", "Lily", "Hasna Hena"];
const fruits = ["Apple", "Banana", "jackfruit", "Grave"];
const birds = ["Dowel", "Eagle", "Kobutor", "Hamim bird"];
const container = document.getElementById("container");

container.style.display = "flex";
container.style.gap = "20px";

const carList = document.createElement("div");
carList.innerHTML = "<h5 class='text-light'>Cars</h5>" + cars.join("<br>");

const flowerList = document.createElement("div");
flowerList.innerHTML = "<h5 class='text-light'>Flower</h5>" + flowers.join("<br>");

const fruitList = document.createElement("div");
fruitList.innerHTML = "<h5 class='text-light'>Fruits</h5>" + fruits.join("<br>");

const birdList = document.createElement("div");
birdList.innerHTML = "<h5 class='text-light'>Birds</h5>" + birds.join("<br>");

container.appendChild(carList);
container.appendChild(flowerList);
container.appendChild(fruitList);
container.appendChild(birdList);

cars[6] = "BMW";
cars[7] = "Audi";
cars[8] = "TATA";
cars.push("Banana", "Tomato");
cars.unshift("Apple");

console.log(cars.lastIndexOf("Audi"));

/* Numbers */ 
const number = [0, 1, 20, 10, 800, 50, 25, 70];
const number2 = [0, 1, 20, 10, 800, 50, 25, 70];
const number3 = [0, 1, 20, 10, 800, 50, 25, 70];
const multiply = number.flatMap((x) => [x * 10]);



number2.sort(function (a, b) {
  return b - a;
});

number3.sort(function (a, b) {
  return a - b;
});




container2.style.display = "flex-left";
container2.style.gap = "20px";


const numList = document.createElement("div");
numList.innerHTML = "" + number.join(", ");


container2.appendChild(numList);


const num2List = document.createElement("div");
num2List.innerHTML = ""+ multiply + number2.join("<br>");

container2.appendChild(num2List);


const num3List = document.createElement("div");
num3List.innerHTML = "" + number3.join(", ");

container2.appendChild(num3List);

// number2.sort(function (a, b) {
//   return a - b;
// });
// document.getElementById("para1").innerHTML = number.join("<br>");
// numbers.appendChild(numList);

// const multiply = number2.flatMap((x) => [x * 10]);
// document.getElementById("para0").innerHTML = multiply.join("<br>");

// number.sort(function (a, b) {
//   return b - a;
// });
// document.getElementById("para2").innerHTML = number;



/* Calculator*/

const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function appendFunc(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
