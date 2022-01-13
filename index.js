$("document").ready(function(){
	$(".module").prepend("<div class = 'first_div'>Module: <input type='range'></div>");

	$("input[type='range']").each(function(){
		var el = $(this);
		el.attr("min", 0.5);
		el.attr("max", 3.0);
		el.attr("step", 0.2);
		el.attr("value", el.parent().data("font-size-in-rem"));
	});
	$("input[type='range']").on("change", function(){
		$(this).closest(".module").css("font-size", $(this).val() + "rem");
	});

	$("#main").on("change", function(){
		$("html").css("font-size", $(this).val() + "rem");
	});
});
