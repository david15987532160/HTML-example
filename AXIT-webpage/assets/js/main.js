function openTab(evt, tab_id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("text__content");
    for (i = 0; i < text__content.length; i++) {
        text__content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("listitem__tablink");
    for (i = 0; i < listitem__tablink.length; i++) {
        listitem__tablink[i].className = listitem__tablink[i].className.replace(" active", "");
    }
    document.getElementById(tab_id).style.display = "block";
    evt.currentTarget.className += " active";
}