var A = [24, 53, 78, 91, 12];
document.writeln("Method 1  : " + "<br>");
document.writeln("Array Items : " + A + "<br>");
A.sort();
document.writeln("Largest Item In Array is : " + A[A.length-1]+ "<br>");
A = [24, 53, 78, 91, 12];
document.writeln("Method 2  : " + "<br>");
document.writeln("Array Items : " + A + "<br>");
var highest = A[0];
for(var i = 1; i < A.length; i++)
{
    if(highest < A[i])
    {
        highest = A[i];
    }
}
document.writeln("Largest Item In Array is : " + highest);