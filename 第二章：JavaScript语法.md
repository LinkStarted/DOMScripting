# 第二章：JavaScript语法
## JavaScript放置位置
  1. `<script>`放在HTML文档最后，`</body>`之前；推荐
  2. `<script>`放在head标签中；
  3. JavaScript代码另存为js文件，在head放`<script>`并把src属性指向该文件。
`<script>`的默认脚本是JavaScript，所以不需要指明 `type=“text/javascript”`


## 语法
### 语句
例：  
first statement;<br/>
second statement;

### 注释
  * 单行注释 : //这是一个注释
  * 单行注释：<!--这是一个注释,
  * 多行注释: /* 这是一个注释 */

### 变量
 * 没有强制要求必须提前声明变量；
 * 区分大小写；
 * 变量名允许包含字母，数字，美元符号和下划线，不能以数字开头；
* 驼峰格式是函数名，方法名和对象属性名命名的首选格式；

### 数据类型（字符串、数字、布尔、数组、对象、Null、Undefined）
#### 字符串
字符串必须包含在引号中，单引号和双引号都可以;<br/>
需要转义的情况(转义字符表)<br/>
\' 单引号<br/>
\" 双引号<br/>
\& 和号<br/>
\\\ 反斜杠<br/>
\n 换行符<br/>
\r 回车符<br/>
\t 制表符<br/>
\b 退格符<br/>
\f 换页符

#### 数值
#### 布尔值(true/false)

#### 数组
数组可以用关键字Array声明。javascript不要求在声明数组时必须给出元素个数。<br/>
数组元素以0为第一个元素的下标。<br/>
数组的创建例：<br/>
* `var beatles = Array(4);`<br/>
* `var beatles = Array("John","Paul","Geroge","Ringo");` <br/>
* `var beatles = ["John","Paul","Geroge","Ringo"];`

#### 关联数组
数组默认下标以0开始，但可以在填充数组时为每一个新元素明确给出下标来改变这种默认的行为。例:  
`var lennon = Array();`  
`lennon["name"]="John";`  
`lennon["year"] =1940;`  
`lennon["living"] =false;`

#### 对象
创建对象:  
`{propertyName: value, propertyName:value}`  
`var lennon={"name":"John","year":1940,"living":false};`  
访问对象  
leenon.name的值就是John。

### 操作
#### 算术运算符
+-*/  
自增（++），自减（--）  
拼接  
条件语句(if-else，switch)  
比较操作符(>,<,>=,<=,!=,==)  
逻辑操作符(&&,||,!)  
循环语句(while,do...while,for)  

### 函数
函数的定义  
`function name(augment){`  
`statements;`  
`}`  
变量的作用域  
全局变量  
局部变量  
在函数内部使用的变量，尽量声明为局部变量，以免影响全局变量。


### 对象
对象是自包含的数据集合，包含在对象里的数据可以通过两种形式访问：属性和方法。  
属性时隶属于某个特定对象的变量；  
方法是只有某个特定对象才能调用的函数；  
在Javascript中，属性和方法都使用‘点’语法来访问：  
`objet.property`  
`object.method()`

实例是对象的具体个体；为给定的对象创建一个新实例需要使用new关键字。  
`var Jeremy = new Person；`

内建对象: (Array,Math,Date...)  
宿主对象：由浏览器提供的预定义对象(Form, Image, Element)


