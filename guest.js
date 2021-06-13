Name_Of_The_Guest_Array = [];
var blankTxt = "";
function add() {
    var Guest_Name = document.getElementById("namesget").value;
    Name_Of_The_Guest_Array.push(Guest_Name);
    document.getElementById("setNames").innerHTML = Name_Of_The_Guest_Array;
    console.log(Name_Of_The_Guest_Array);
}
function show() {
    document.getElementById("showNames").innerHTML = Name_Of_The_Guest_Array.join("<br>").toString();
    console.log(Name_Of_The_Guest_Array);
}
function sort() {
    var sorting_letters = Name_Of_The_Guest_Array.sort();
    document.getElementById("sortNames").innerHTML = sorting_letters.join("<br>").toString();
}
function search() {
    s=document.getElementById("srchName").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++)
    {
        if(s==Name_Of_The_Guest_Array[j])
        {
            found = found+1;
        }
        document.getElementById("srchLbl").innerHTML = "Name found " + found + " time/s"
        console.log(found);
    }
}