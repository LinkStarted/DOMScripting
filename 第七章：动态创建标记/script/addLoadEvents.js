function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'funciton') {
        window.onload = func;
    } else {
        oldonload();
        func();
    }
}