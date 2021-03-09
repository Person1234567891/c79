var array1 = [];
function submit1(){
document.getElementById("sort").style.display = "inline-block";
document.getElementById("submit").style.display = "none";
var temp = document.getElementById("N1").value;
array1.push(temp); 
var temp = document.getElementById("N2").value;
array1.push(temp); 
var temp = document.getElementById("N3").value;
array1.push(temp); 
var temp = document.getElementById("N4").value;
array1.push(temp); 
document.getElementById("display_name").innerHTML = array1;
}
function sort(){
    array1.sort();
    document.getElementById("display_name").innerHTML = array1;
}

