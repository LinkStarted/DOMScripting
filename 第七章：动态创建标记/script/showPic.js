function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'funciton') {
        window.onload = func;
    } else {
        oldonload();
        func();
    }
}
//使用insertBefore方法编写的insetAfter方法
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("alt", "my image gallery");
    placeholder.setAttribute("src", "images/fireworks.jpg");
    placeholder.setAttribute("width", "400px");
    placeholder.setAttribute("length", "400px");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
    //document.getElementsByTagName("body")[0].appendChild(placeholder);
    //document.getElementsByTagName("body")[0].appendChild(description);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
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
    return false;
}
preparePlaceholder();
prepareGallery();