
//const message = "enter a list of comma-separated froyo flavors."

//function displayAlert(){
  //alert (`${message} `)
//}
//displayAlert()
// (input prompt)
const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
function getFroyo(userInputString){
    const stringArray = userInputString.split(",");
    console.log(stringArray)
    const flavorObj = {}

console.table(getFroyo(userInputString))

  for (let i = 0; i < stringArray.length; i++){
    const  active =  stringArray[i];
   console.log(stringArray[i]);
    
  }
}

 
  // const froyoFlavor = [];
// for (let i = 0; i < stringArray.length; i++) {
  // const str = stringArray[i];
  // const flavor = parseInt(str);
  // froyoFlavor.push(flavor);
// }
// console.table(froyoFlavor);

// const froyoFlavor = {
//     flavorOne: "vanilla",
//     flavorTwo: "strawberry",
//     flavorThree: "coffee",

// }
// console.table(froyoFlavor);
// console.log(stringArray);