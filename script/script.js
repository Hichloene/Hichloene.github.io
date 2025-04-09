
function showMessage()
{
    let name = "James";
    let age = 21;
    let bonus = age + 5;
    let school = "SADT";
    let message = "Hey "+ name+", your age is "+ age +" You are qualified to be at "+ school +". You have got a bonus";
    alert(message);
}

function checkAge()
{
    let age = 19;
    if(age>=18)
    {
        alert("Hey you can enter the party. You are old enough")
    }
    else
    {
        alert("Hey, you are too young.")
    }
}

function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't close me now! You clicked me "+1 +" times");
    } 
}

function changeColor()
{
    document.getElementById("main").style.color="green";
    document.getElementById("main").style.backgroundColor="yellow";
}

function changeToJuice()
{
    document.getElementById("cakejuice"). src="https://njaes.rutgers.edu/fs542/fs542-main-1.jpg";
}

function changeToCake()
{
    document.getElementById("cakejuice"). src="https://mccormick.widen.net/content/ghspdwly3h/original/cake24823_800x800.jpg"; height=300; width=300;
}

function changeTheme()
{
    document.getElementById("cakejuice"). src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"; height=300; width=300;
}

function changeInner()
{
    document.getElementById("OkButton"). src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"; height=300; width=300;
}

function hoverFunction()
{
    
}