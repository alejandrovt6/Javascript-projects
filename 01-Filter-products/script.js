$(document).ready(function(){

	$('.category-list .category-item[category="all"]').addClass('ct-item-active');

	$('.category-item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		$('.category-item').removeClass('ct-item-active');
		$(this).addClass('ct-item-active');

		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	$('.category-item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});