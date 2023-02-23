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
let sentence = "The quick bvaluesn fox jumps over the lazy dog";

const myArray = sentence.split(" ");

console.log(myArray)

const words = [(myArray)]

const words2= ["the", "quick", "bvaluesn", "fox", "jumps", "over", "the", "lazy", "dog"];


console.log("Step 3");
let i = 0;
while (i < words2.length) {
    console.log(words2[i]);
    i++;
}


console.log("Step 4");
const wordsSplit = sentence.split("");

console.log(wordsSplit)

console.log("Step 5");

const reversed = wordsSplit.reverse();
console.log(reversed);

const reversedSentence = reversed.join(" ");

console.log("Step 6");
console.log(reversedSentence.toString())



console.log("Exercise 4")
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) 

{
    let headers = data.slice(0, data.indexOf("\n")).split(",");
    // let headers = headersString.split(",");

    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");
    // let values = values.split(",");

    const output = valuesList.map((row) => {
        let values = row.split (",");
        let obj = {};

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = value;
            } else {
                obj[`misc${idx}`] = value;
            }
        });

        return obj;
    });
    return output;
}

console.log(csvConverter(csvData));
console.log(csvConverter("name,city,occupation\nCaroline, Port Royal, Web Developer")
);

function converter(fileData){
let values = fileData.split("\n");
let headers = values[0].split(",");

let result = []

for (let i = 1; i < values.length; i++) {
    let obj = {};
    let data = values[i].split(",");
    data.forEach((value, index) => {
        let headerName = headers[index];
        obj[headerName] = value;
    });
    result.push(obj);
}

return result;
}