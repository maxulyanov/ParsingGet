## ParsingGet
Разбирает адресную строку, отмечает выбранные и присваивает value для элементов формы на основе полученных GET параметров.

###Элементы для парсинга
`Плагин работает со следующими элементами:`
 - input[type="text"] 
 - input[type="color"]
 - input[type="date"]
 - input[type="hidden"]
 - input[type="datetime"]
 - input[type="datetime-local"]
 - input[type="email"]
 - input[type="number"]
 - input[type="range"]
 - input[type="search"]
 - input[type="tel"]
 - input[type="time"]
 - input[type="url"]
 - input[type="month"]
 - input[type="week"]
 - input[type="radio"]
 - input[type="checkbox"]
 - select
 - textarea
 
###Параметры
<table>
    <tr>
      <th>Имя</th>
      <th>Значение по умолчанию</th>
	  <th>Описание</th>
    </tr>
    <tr>
      <td>ignoreClass</td>
      <td>'no_parsing_get'</td>
	  <td>При добавлении к элементу стандартного или переопределенного пользовательского класса, элемент не будет обработан</td>
    </tr>
    <tr>
      <td>show</td>
      <td>true</td>
	  <td>В разработке</td>
    </tr>
</table>
 
###Демонстрация
<a href="http://m-ulyanov.github.io/parsing-get/demo.html">m-ulyanov.github.io/parsing-get/demo.html</a>
