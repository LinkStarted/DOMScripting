function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        }
    }
}

function showPic(whicpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whicpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false; //nodeName的返回值总为大写字母，即使元素在HTML中是小写。
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whicpic.getAttribute("title") ? whicpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

//window.onload = prepareGallery;
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'funciton') {
        window.onload = func;
    } else {
        oldonload();
        func();
    }
}
addLoadEvent(prepareGallery);