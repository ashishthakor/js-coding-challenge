function balancedParanthesis(code) {
    const openingBrackets = ["{", "[", "(", "<"];
    const closingBrackets = ["}", "]", ")", ">"];
    let encounteredOpeningBrackets = [];
    let currentopeningBracket = null;

    code = code.split(' ').join('');
    for (charecter of code) {
        if(openingBrackets.includes(charecter)) {
            encounteredOpeningBrackets.push(charecter);
            currentopeningBracket = encounteredOpeningBrackets[encounteredOpeningBrackets.length-1];

            // console.log("charecter", charecter);
            // console.log("currentopeningBracket", encounteredOpeningBrackets[encounteredOpeningBrackets.length-1]);
            // console.log("encounteredOpeningBrackets", encounteredOpeningBrackets);
        }
        else if (closingBrackets.includes(charecter)) {
            currentopeningBracket = encounteredOpeningBrackets[encounteredOpeningBrackets.length-1];
            switch (charecter) {
                case "}":
                    if (currentopeningBracket === "{") {
                        encounteredOpeningBrackets.pop();
                    } else {
                        return console.log("Currosponding opening bracket '{' Not Found for ", code);
                    }
                    break;
                case "]":
                    if (currentopeningBracket === "[") {
                        encounteredOpeningBrackets.pop();
                    } else {
                        return console.log("Currosponding opening bracket '[' Not Found for ", code);
                    }
                    break;
                case ")":
                    if (currentopeningBracket === "(") {
                        encounteredOpeningBrackets.pop();
                    } else {
                        return console.log("Currosponding opening bracket '(' Not Found for ", code);
                    }
                    break;
                case ">":
                    if (currentopeningBracket === "<") {
                        encounteredOpeningBrackets.pop();
                    } else {
                        return console.log("Currosponding opening bracket '<' Not Found for ", code);
                    }
                    break;
                default:
                    console.log("switch default");
                    break;
            }
        }
        else{
            continue;
        }
    }
    if(encounteredOpeningBrackets.length > 0 ){
        console.log('Brackets Not Balanced For ', code);
    }else{
        console.log('Brackets Balanced for ', code);
    }
    // return;
}

balancedParanthesis("[{{()}}]");
balancedParanthesis("import React from 'react' const balancedParanthesis = () = {return (<div>balancedParanthesis</div>) } export default balancedParanthesis;");
balancedParanthesis("}{");
balancedParanthesis("import React from 'react' const balancedParanthesis = () => {return (<div>balancedParanthesis</div>) } export default balancedParanthesis;");
