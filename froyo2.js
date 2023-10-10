const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
//const inputstring =  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"

function getFroyo(str) {
  const list = str.split(",");
  console.log(list);
  const object = {};

  for (let i = 0; i < list.length; i++) {
    const liveView = list[i];
    console.log(list[i]);
    if (object[liveView]) {
      object[liveView] += 1;
    } else {
      object[liveView] = 1;
    }
  }
  return object;
}

console.table(getFroyo(userInputString));
