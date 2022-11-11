// In a factory, a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
// for the sake of simplicity, are named with letters a to m.
// The colors used by the printer are recorded in a control string & would be aaabbbbhaijjjm meaning that the printer 
// printed three times color a, four times color b, one time color h then one time color a ...
// Sometimes, there are problems: lack of colors, technical malfunction and a 'bad' control string is produced 
// e.g aaaxbbbbyyhwjjjwm with letters not from a to m
// You have to write a function 'print _error ' which given a string, will RETURN the ERROR RATE of the printer as a 
//string representing a rational whose numerator is the number of errors and the denominator the length of the control 
// string. Dont reduce this fraction to a simpler expression.
// The string length has a length greater or equal to one and contains only letters from a to z

            //    SOLUTION
// Declare  a function
function printErrors(str){
    // declare variable to hold the returned error rate count
    let count = 0

    // loop through the string to check for the wrong colors
    for(let i = 0; i < str.length; i++){
        if(str[i] > 'm'){
            count++
        }
    }
    return count+'/'+str.length
}
console.log(printErrors('aasdssdfrttyhhjffdvcjjdknsk'))













 // Extracting the wrong Color letters
function printErrors(s){
    let count  = ''
    for(let i = 0; i < s.length; i++){
        if(s[i] > 'm'){
            count+= s[i]
        } 
    }
    return count+"/"+s
}
alert(printErrors('aaaxbbbbyyhwjjjwm'))
