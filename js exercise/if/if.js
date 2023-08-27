let grabe = prompt ('what is your result?')
if (grabe >= 90)
{
    document.write('excellent')
}
else if(grabe >= 80 && 89)
{
    document.write('very good')
}
else if (grabe >= 70 && 79)
{
    document.write('good')
}
else if (grabe >= 60 && 69)
{
    document.write('acceptable')
}
else if (grabe>= 60)
{
    document.write('note')
}
else
{
    document.write('fail')
}