// Practical Exam Of Data Mining
// Dr.Ghada  ( MIS )

let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector(".output")

let stop_words = ["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into",
"is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these",
"they", "this", "to", "was", "will", "with"];

var array_of_output = "";

button.onclick = function() {
    let result_of_output = input.value;

    // apply lowercase
    let result_after_lowercase = result_of_output.split(" ").map(function(e){
        return e.toLowerCase();
    }).join(" ")

    array_of_output = result_after_lowercase.split(" ");

    // remove URL
    for(i=0; i<array_of_output.length; i++) {
        let regUrl = /(https?)?:?(\/\/)?(www.)?\w+\.\w+:?.+/ig.test(array_of_output[i]);

        if(regUrl === true) {
            array_of_output[i] = "";
        }else {
            array_of_output[i] = array_of_output[i];
        }

        // remove special characters
        let chars = Array.from(array_of_output[i])
        for (j=0; j<chars.length; j++) {
            reg_special_char = /\w/ig.test(chars[j]);
            if (reg_special_char === true) {
                chars[j] = chars[j];
            }else {
                chars[j] = "";
            }
            
        }
        array_of_output[i] = chars.join("");

        // remove stop words
        for(k=0; k<stop_words.length; k++) {
            if (stop_words[k] !== array_of_output[i]) {
                array_of_output[i] = array_of_output[i];
            }else {
                array_of_output[i] = "";
            }
        }
    }

    // remove white spaces
    array_of_output = array_of_output.filter(Boolean).join(" ");

    console.log(array_of_output);
    if(output.textContent === "") {
        output.textContent = array_of_output;
    }else {
        output.textContent = array_of_output;
    }
};
