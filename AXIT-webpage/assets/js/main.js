var name, text;
function openTab(evt, tab_id) {
    var i, id, tabcontent, tablinks;
    id = document.getElementById(tab_id);
    tabcontent = document.getElementsByClassName("text__content");
    tablinks = document.getElementsByClassName("listitem__tablink");

    console.log(evt);
    if ((name == "listitem__tablink active" && text == evt.currentTarget.innerText) || (evt.currentTarget.className == "listitem__tablink active" && evt.currentTarget.innerText == "TAB 1")) {
        name.replace(" active", "");
        id.style.display = "none";
        for (i = 0; i < tabcontent.length; ++i) {
            tabcontent[i].style.display = "none";
        }
        for (i = 0; i < tablinks.length; ++i) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        name = "";
        text = "";
    } else {
        for (i = 0; i < tabcontent.length; ++i) {
            tabcontent[i].style.display = "none";
        }
        id.style.display = "block";
        for (i = 0; i < tablinks.length; ++i) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        evt.currentTarget.className += " active";
        name = evt.currentTarget.className;
        text = evt.currentTarget.innerText;
        // console.log(name, text);
    }
}

function responsive() {
    var x = document.getElementById("menu__nav__head");
    // console.log(x.className);
    if (x.className === "menu__nav__head") {
        x.className += " responsive";
        // console.log(x.className);
    } else {
        x.className = "menu__nav__head";
        // console.log(x.className);
    }
}

// $(function() {
//
//     var $window           = $(window),
//         win_height_padded = $window.height() * 1.1,
//         isTouch           = Modernizr.touch;
//
//     if (isTouch) { $('.revealOnScroll').addClass('animated'); }
//
//     $window.on('scroll', revealOnScroll);
//
//     function revealOnScroll() {
//         var scrolled = $window.scrollTop(),
//             win_height_padded = $window.height() * 1.1;
//
//         // Showed...
//         $(".revealOnScroll:not(.animated)").each(function () {
//             var $this     = $(this),
//                 offsetTop = $this.offset().top;
//
//             if (scrolled + win_height_padded > offsetTop) {
//                 if ($this.data('timeout')) {
//                     window.setTimeout(function(){
//                         $this.addClass('animated ' + $this.data('animation'));
//                     }, parseInt($this.data('timeout'),10));
//                 } else {
//                     $this.addClass('animated ' + $this.data('animation'));
//                 }
//             }
//         });
//         // Hidden...
//         $(".revealOnScroll.animated").each(function (index) {
//             var $this     = $(this),
//                 offsetTop = $this.offset().top;
//             if (scrolled + win_height_padded < offsetTop) {
//                 $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
//             }
//         });
//     }
//
//     revealOnScroll();
// });