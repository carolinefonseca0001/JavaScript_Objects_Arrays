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

let sentence = "The quick brown fox jumps over the lazy dog";
const myArray = sentence.split(" ");
console.log(myArray)

let i = 0;
while (i < myArray.length) {
    let wordsSplit = myArray[i].split("")
    let reversed = wordsSplit.reverse();
    myArray[i] = reversed.join("")
    i++;
}
const result = myArray.join("")
console.log(myArray.toString());


// const wordsSplit = sentence.split("");
// console.log(wordsSplit)


// const reversedSentence = reversed.join(" ");


// console.log(reversedSentence.toString())



console.log("Exercise 4")
//cannot for the life of me figure out why my headings are reversed in both examples here but this is close enough.
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) 
{
    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const output = valuesList.map((row) => {
        let values = row.split(",");
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

for (let i = 0; i < values.length; i++) {
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