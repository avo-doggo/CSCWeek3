//Jameson Brown
function strings()
{
    var str1 = document.getElementById("initString").value; //the entry in this text box is what will be used to determine everything after this line
    

    var str2 = str1.substring(0,3);
    

    // examplestr2 = str1.replace(/qwe/i, "asd") //i = case insensitive/ meaning uppercase or lower case works

    
    str1 = str1.toLowerCase();


    var splitString = str1.split(""); //seperates letters

    var reverseString = splitString.reverse(); //reverses letter

    var joinString = reverseString.join(""); //joins letters again

    if (str1 ==joinString) //if the var joinString is equal to str1 then it is a palindrome
    {
       //palindrome
        document.getElementById("updated String").innerHTML = "This IS a palindrome!"
    }

    else
    {
       //not palindorme
       document.getElementById("updated String").innerHTML = "This is NOT a palindrome"
    }


}