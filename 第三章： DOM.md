# DOM
## 文档：DOM中的‘D’
当创建一个网页并把它加载到web浏览器中时，DOM在幕后产生。它把你编写的网页文档转换为一个文档对象。

## 对象：DOM中的‘O’
JavaScript语言中对象可以分为三种类型： 
* 用户定义对象：有程序员自行创建的对象。
* 内建对象： 内建在JavaScript语言里的对象，如Array，Math，Date等。
* 宿主对象： 由浏览器提供的对象。

## 模型：DOM中的‘M’
DOM把一份文档表示为一颗家谱树。

## 节点
### 元素节点
DOM的原子是元素节点。  
元素可以包含其他元素。
### 文本节点
文本节点总是包含在元素节点内部。但并非所有的元素节点都包含文本节点。

### 属性节点
属性节点用来对元素做出更具体的描述。

### CSS
#### class属性
例：  
`<p class="special">1234</p>`  
在样式表中为class属性值相同的元素定义统一的样式：  
`.special{ font-style: italic;}`
#### id属性
id属性的用途是给网页的某个元素加上一个独一无二的标志符，例：  
`<ul id="purchases">`  
在样式表中为特定的id属性值的元素定义样式：  
`#purchases { border: 1px solid white;}`

### 获取元素
#### getElementById
它是document对象特有的函数；例：  
`document.getElementById("idname")`  
返回一个与那个有着给定id属性值的元素节点对应的对象；
#### getElementByTagName
`document.getElementByTagName("tagName")`  
返回一个对象数组，每个对象分别对应着文档例给定标签的一个元素。  
这个方法允许把一个通配符作为参数：  
`document.getElementByTagName("*")`通过这个方法可以知道文档中有多少个元素节点。

#### getElementByClassName
`document.getElementByClassName("calssName")`  
返回值为数组

### 获取和设置属性
#### getAttribute
getAttribute是一个函数。  
`object.getAttribute(attribute)`  
getAttribute不属于document对象，不能通过document对象调用。它只能通过元素节点对象调用。若没有值则返回null；

#### setAttribute
`object.setAttribute(attribute,value)`  同上，也只能用于元素节点。