function createParagraph(){
    var adjOne= document.getElementById('Adjective1').value
    var nationality= document.getElementById('Nationality').value
    var person= document.getElementById('Person').value
    var nounOne= document.getElementById('Noun1').value
    var adjTwo= document.getElementById('Adjective2').value
    var nounTwo= document.getElementById('Noun2').value
    var adjThree= document.getElementById('Adjective3').value
    var adjFour= document.getElementById('Adjective4').value
    var plouralNoun= document.getElementById('Ploural Noun').value
    var numOne= document.getElementById('Number1').value
    var shapes= document.getElementById('Shapes').value
    var foodOne= document.getElementById('Food1').value
    var foodTwo= document.getElementById('Food2').value
    var numTwo= document.getElementById('Number2').value

    


    var paragraph = "<br><br><p class='chalkText'> Pizza was invented by a " + adjOne + " " + nationality + " chef named " + person + " . To make a pizza, you need to take a lump of " + nounOne + " , and make a thin, round, " + adjTwo + " " + nounTwo + " . Then you cover it with " + adjThree + " sauce, " + adjFour + " cheese, and fresh chopped " + plouralNoun + " . When it is done, cut it into " + numOne + " " + shapes + ". Some kids like " + foodOne + "  pizza the best, but my favorite is the " + foodTwo + "  pizza. If I could, I would eat pizza " + numTwo + " times a day!</p>"

    document.getElementById('answer').innerHTML = paragraph;
}