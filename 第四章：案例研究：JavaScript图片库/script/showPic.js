function showPic(whicpic) {
    var source = whicpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whicpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    /*根据HTML的文件结构，body包含的元素只有3个：h1，ul和img。
        但结果大于3 的原因：chilidNodes 属性返回的数组包含所有类型饿节点，而不仅仅是元素节点。
        事实上，文档里几乎每一样东西都是一个节点，甚至联空格和换行符都被解释为节点，
        而他们也全部包含在childNodes属性返回的数组中。 */
    alert(body_element.nodeType);
    /*nodeType属性总共有12种可取值，其中仅有3中具有实用价值
        1是元素节点，2是属性节点，3是文本节点 */
}
window.onload = countBodyChildren;