function myFunction() {
    // console.log("clicked");
    // console.log(document.getElementsByClassName("form__input")[0].value);
    var x = document.getElementsByClassName("form__input")[0].value;
    window.open("https://en.wikipedia.org/wiki/" + x);
}

function testFunction1() {
    var x = document.getElementById("navbar").getElementsByTagName("li");
    console.log(x[0].innerText);
}

window.onscroll = function() {hide_btn_Top()};

function hide_btn_Top() {
    // console.log("clicked");
    var btn_scroll = document.getElementsByClassName("up_icon")[0];
    console.log(btn_scroll);
// When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        btn_scroll.style.display = "block";
    } else {
        btn_scroll.style.display = "none";
    }
}

function scroll_Top() {
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function linkTo() {
    // var x = document.getElementById("gg");
    window.open("http://wwww.goole.com/");
}