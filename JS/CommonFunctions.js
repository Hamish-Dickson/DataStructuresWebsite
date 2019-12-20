function displayMenu() {//This function displays the menu bar property shared across pages
    var element = document.getElementById("menuBar");//gets the container to write the menu bar into
    var pageTitle = document.getElementById("title").innerText;//gets the page title to use as a header

    element.innerHTML = '<ul style="clear: both">' +
        '    <li style="float: right"><a class="about" href="Index.HTML">About</a></li>\n' +
        '    <li style="float: right"><a class="title">' + pageTitle + '</a></li>' +
        '    <li><a href="Arrays.html">Arrays</a></li>\n' +
        '    <li><a href="Lists.html">Lists</a></li>\n' +
        '    <li><a href="MapsSets.html">Maps & Keys</a></li>' +
        ' </ul>';
    //outputs the necessary ul
}

function changeContent(slide) {//this function changes the contents displayed on page, using jQuery to lookup elements
    var bname = "#scene" + slide;
    $("[id^='scene']").hide();
    $(bname).show();
}

function moveStuff() {//rough guide taken from w3schools animation tutorial: https://www.w3schools.com/js/js_htmldom_animate.asp
    var elem = document.getElementsByClassName("arrayEl");
    var pos = 0;
    setInterval(frame, 10);

    function frame() {
        for (var x = 0; x < 10; x++) {
            if (!(pos >= 225)) {
                pos += 0.1;
                for (var i = 0; i < 10; i++) {
                    elem[i].style.top = pos + 'px';
                }
            }
        }

    }

}