console.log("Exercise 1")


let array = [2, 22, 12, 17, 18, 39, 129];
let sum1 = 0

let arraySum = array.reduce(function(a, b){
  return a + b;
});

console.log(arraySum);

console.log("Exercise 1 done differently")
//I really REALLY tried to do this without the exercise walk through video. 

const numbers= [2, 22, 12, 17, 18, 39, 129];


function arraySum2(arr) {
    let sum = 0;

arr.forEach((number)=>  {
    sum+= number;
});
  
    return sum;
}

console.log(arraySum2(numbers))



console.log("Exercise 2");

let book =  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    pages: 240,
    read: 4
};

book.info = function() {
    return this.title +  ' by ' + this.author + " is " + this.pages + " pages long, and I have read it " + this.read + " times.";
}
console.log(book.info())




console.log("Exercise 3");

console.log("Step 2");
let sentence = "The quick brown fox jumps over the lazy dog";

const myArray = sentence.split(" ");

console.log(myArray)

const words = [(myArray)]

const words2= ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];


console.log("Step 3");
let i = 0;
while (i < words2.length) {
    console.log(words2[i]);
    i++;
}


console.log("Step 4");
const myArray2 = sentence.split("");

console.log(myArray2)

console.log("Step 5");

const reversed = myArray2.reverse();
console.log(reversed);

// https://www.w3schools.com/jsref/jsref_obj_string.asp
// I know the answer to this is in here somewhere....

console.log("Step 6");

const result =  myArray2.toString(reversed);

console.log(result)

console.log("Exercise 4")
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

