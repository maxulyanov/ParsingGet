/*

 ParsingGet — jQuery plugin
 Version: 0.0.1
 Author: M.Ulyanov (web.ulyanov@gmail.com)
 Site: http://web-ulyanov.ru
 Source && Doc: https://github.com/M-Ulyanov/ParsingGet
 Example: #

 */

(function($) {

	jQuery.fn.parsingGet = function(options) {

		// Параметры по умолчанию
		var defaults = $.extend({}, {
		
		}, options);

		// С какими элементами будем работать
		var arrInput = ['input[type="text"]', 'input[type="color"]', 'input[type="date"]',
										'input[type="hidden"]', 'input[type="datetime"]', 'input[type="datetime-local"]',
										'input[type="email"]', 'input[type="number"]', 'input[type="range"]',
										'input[type="search"]','input[type="tel"]', 'input[type="time"]',
										'input[type="url"]', 'input[type="month"]', 'input[type="week"]'];

		// Получение и разбор GET параметров в ассоциативный массив
		var url = window.location.href;
		var hash = url.slice(url.indexOf('?') + 1).split('&');
		var ObjParams = {};

		for(var i = 0; i < hash.length; i++) {
			var iHash = hash[i].split('=');
			var key = decodeURIComponent(iHash[0]);
			var value = decodeURIComponent(iHash[1].replace(/\+/g, ' '));

			if(key in ObjParams) { 
        if(typeof ObjParams[key] == 'string') {
        	ObjParams[key] = [ObjParams[key]];
        }
      	ObjParams[key].push(value);
      } 
      else {
        ObjParams[key] = value;
      }

		};

		console.log(ObjParams);

		// Основной цикл
		return this.each(function() {
			
			// Input
			for(var i = 0; i < arrInput.length; i++) {
				$(this).find(arrInput[i]).each( function() {
	          var name = $(this).attr('name');
	          var val  = ObjParams[name];
	          if(!!val) {
	            $(this).val(val);
	          }
	      });
			}

		});
	}

})(jQuery);


