var names = ['Michael','John','Tony'];
var score = [250,350,450];
for(var i = 0; i < names.length; i++)
{
    document.writeln("Score of " + names[i] + " is " + score[i] + " with a percentage of " + (score[i]/500)*100 + "%<br>");
}
