// Iteration 1: Names and Input
let hacker1 = "Maria"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Belen"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.legth) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`);
}

// Iteration 3: Loops
// print it with spaces and uppercase
let hacker1Space ="";
for (const value of hacker1) {
  hacker1Space += value.toUpperCase() + " ";
}
console.log(hacker1Space)

// reverse
let hacker2Reverse = "";
for (let i=hacker2.length -1 ; i>=0 ; i--) {
    hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse)

// lexicographic order

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name");
}

// bonus

//lorem ipsum
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac commodo mauris. Cras pretium tempus venenatis. Vestibulum at egestas enim. Integer vel viverra elit. Ut iaculis risus vitae lacus condimentum vulputate. Donec dapibus aliquet dui sit amet fermentum. Ut at dignissim sapien, in maximus urna. Fusce lectus felis, luctus eget porttitor vel, pharetra vel turpis. Maecenas scelerisque aliquet turpis, sed pharetra massa cursus maximus. Nulla facilisi. Praesent nec massa eleifend, molestie nibh in, commodo ex. Integer in lacus ipsum. Mauris luctus massa arcu, sit amet suscipit magna dignissim nec. Aliquam ut ex lobortis massa posuere consectetur. Pellentesque ut massa risus. Pellentesque eget orci vel nibh suscipit lobortis vulputate ut lacus. Quisque commodo magna sed turpis fermentum, ac varius eros rutrum. Morbi venenatis congue orci, vitae pulvinar turpis scelerisque sit amet. Aenean ullamcorper pellentesque diam, vel scelerisque augue ultrices eget. Fusce id nisl ut turpis porttitor fermentum. Maecenas efficitur enim tempus ligula iaculis, sollicitudin porta felis sodales. Donec vel velit id arcu pellentesque convallis efficitur non diam. Morbi faucibus sagittis leo, vel rutrum felis accumsan eu. Duis sodales nulla vitae nisi molestie suscipit. Fusce pellentesque ante ut orci ultrices posuere. Fusce ullamcorper congue blandit. Donec vehicula justo at maximus hendrerit. Nunc fermentum vitae odio in egestas. Fusce dapibus feugiat libero, sit amet tristique sapien malesuada nec. Cras eu massa luctus libero volutpat posuere ut vel dolor. Vivamus a faucibus velit. Quisque eget ornare ex. Maecenas quis pretium sapien, non convallis dui. Integer eget metus non nisl tincidunt vestibulum. Integer malesuada dolor sed fermentum posuere. Morbi volutpat at metus nec cursus. Aliquam euismod nibh vitae nisi feugiat accumsan. Nam tincidunt ipsum nec sapien tincidunt, vitae vestibulum sapien facilisis. Aliquam imperdiet ac augue sed tincidunt. Proin egestas varius arcu, in euismod augue tristique nec. Donec facilisis gravida elit in aliquet. Phasellus dolor purus, convallis sit amet ullamcorper eu, tincidunt sit amet massa."

let wordsCounter = 0;
for (let i=0; i<longText.length; i++) {
  if(longText[i] === " ") {
    wordsCounter++;
  } else {
    continue;
  }
}

console.log(wordsCounter)

//phraseToCheck

let phraseToCheck = "race car"

let phraseToCheckJoined = phraseToCheck.toLowerCase().replaceAll(" ", "");
let phraseToCheckReversed = "";
for(let i=phraseToCheckJoined.length -1; i>=0; i--) {
    phraseToCheckReversed += phraseToCheckJoined[i];
};

if (phraseToCheckJoined === phraseToCheckReversed) {
    console.log("palindrome")
} else {
    console.log("not now")
}
