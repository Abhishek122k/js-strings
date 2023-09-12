// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var x="I am a";
var y=" Kalvian";
console.log(x+ y);
// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var a="If you fail, never give up because FAIL means First Attempt In Learning";
console.log(a);
// Challenge 3: Store a string in a variable and display the length of the string.
var b="hello";
console.log(b.length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
var c="hello World";
var d=c.toUpperCase();
console.log(d);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var e="I love programming";
var f=e.replace("programming","JavaScript Programming");
console.log(f);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var g="hello";
console.log(g.repeat(3));

//Challenge 7: Store the string as "I am  a Kalvian" in a variable and convert the string into array and print the array in console.
var h="I am  a Kalvian";
var arr=h.split('');
console.log(arr);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var t="Time and Tide wait for none"
var index = t.indexOf("Ti");
console.log("Index of 'Ti' is: " + index);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var l="When life gives you lemons make lemonade";
if (l.includes("lemon")) {
    console.log("The string includes 'lemon'.");
} 
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var w="You must be the change you wish to see in the world.";
var m = w.slice(19, 25);
console.log(m); 
var o = w.substring(42, 47);
console.log(o); 
