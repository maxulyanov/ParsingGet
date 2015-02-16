/*

 ParsingGet — jQuery plugin
 Version: 0.1.4
 Author: M.Ulyanov (web.ulyanov@gmail.com)
 Site: http://web-ulyanov.ru
 Source && Doc: https://github.com/M-Ulyanov/ParsingGet
 Example: #

 */

(function($) {

	jQuery.fn.parsingGet = function(options) {

		// Параметры по умолчанию
		var defaults = $.extend({}, {
			ignore: 'no_parsing_get'
		}, options); 
		// С какими элементами будем работать
		var arrInput = [
			'input[type="text"]', 
			'input[type="color"]',
			'input[type="date"]',
			'input[type="hidden"]',
			'input[type="datetime"]',
			'input[type="datetime-local"]',
			'input[type="email"]',
			'input[type="number"]',
			'input[type="range"]',
			'input[type="search"]',
			'input[type="tel"]',
			'input[type="time"]',
			'input[type="url"]',
			'input[type="month"]',
			'input[type="week"]'
		];
		var textarea = $('textarea');
		var radio = $('input[type="radio"]');
		var checkbox = $('input[type="checkbox"]');
		var select = $('select');

		// Получение и разбор GET параметров в ассоциативный массив
		var url = window.location.href;
		var hash = url.slice(url.indexOf('?') + 1).split('&');
		var objParams = {};
		var objProperty = {
     	ignore: function(self) {
     		if($(self).hasClass(defaults.ignore))
     			return false;
     	}
    };

		if(hash.length <= 1)
			return;

		for(var i = 0; i < hash.length; i++) {
			var iHash = hash[i].split('=');
			var key = decodeURIComponent(iHash[0]);
			var value = decodeURIComponent(iHash[1].replace(/\+/g, ' '));

			if(key in objParams) { 
        if(typeof objParams[key] == 'string') {
        	objParams[key] = [objParams[key]];
        }
      	objParams[key].push(value);
      } 
      else {
        objParams[key] = value;
      }

		};

		// Основной цикл
		return this.each(function() {
			// Input
			for(var i = 0; i < arrInput.length; i++) {
				$(this).find(arrInput[i]).each( function() {
						if(objProperty.ignore(this) == false)
							return;

	          var name = $(this).attr('name');
	          var value = objParams[name];
	          if(!!value) {
	            $(this).val(value);
	          }
	      });
			};

			// Textarea
			$(textarea).each(function() {
				if(objProperty.ignore(this) == false)
					return;

				var name = $(this).attr('name');
        var value  = objParams[name];
        if(!!value) {
          $(this).text(value);
	      }
			});

			// Radio, Checkbox
			$(checkbox, radio).each(function() {
				if(objProperty.ignore(this) == false)
					return;

				var name = $(this).attr('name');
        var value  = objParams[name];
        var thisval = $(this).val();
        if(value == thisval || $.inArray(thisval, value) != -1) {
        		$(this).attr('checked', 'checked');
        }
			});

			// Select
			$(select).each(function() {
				if(objProperty.ignore(this) == false)
					return;

				var name = $(this).attr('name');
				$(this).find('option').each(function() {
					var value  = objParams[name];
        	var thisval = $(this).val();
	        if(value == thisval || $.inArray(thisval, value) != -1) {
	        		$(this).attr('selected', 'selected');
	        }
				});
			});

		});
	}

})(jQuery);



