let item = 100;

if (item < 50) {
  console.log("ნაკლებია 50-ზე");
} else {
  console.log("შეცდომა");
}

let result1 = item < 50 ? "ნაკლებია 50-ზე" : "შეცდომა";
console.log(result1);

//--
if (item > 20) {
  console.log("მეტია 20-ზე");
} else {
  console.log("შეცდომა");
}

let result2 = item > 20 ? "მეტია 20-ზე" : "შეცდომა";
console.log(result2);

 //--

let person = "მარიამი";

if ((person = "მარიამი")) {
  console.log(true);
} else {
  console.log(false);
}

let result3 = (person = "მარიამი" ? true : false);
console.log(result3);

//--
switch (person) {
  case "მარიამი":
    console.log("true");
    break;
  default:
    console.log("false");
}
