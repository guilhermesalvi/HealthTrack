$(document).ready(function() {
    
    $("#btnLogin").click(function() {
        goToHomePage();
    });

    $("#btnProfileBack").click(function()
    {
        goToHomePage();
    });

    $("#btnWeight").click(function()
    {
        goToWeightPage();
    });

    $("#btnWeightBack").click(function()
    {
        goToHomePage();
    });

    $("#btnProfile").click(function()
    {
        goToProfilePage();
    });
});

function goToHomePage()
{
    window.location.replace("./home.html");
}

function goToWeightPage()
{
    window.location.replace("./weight.html");
}

function goToProfilePage()
{
    window.location.replace("./profile.html");
}