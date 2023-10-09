$(document).ready(function(){

	// ADDING ACTIVE CLASS TO FIRST LINK
	$('.category-list .category-item[category="all"]').addClass('ct-item-active');

	// FILTER PRODUCTS
	$('.category-item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// ADDING ACTIVE CLASS TO SELECTED LINK
		$('.category-item').removeClass('ct-item-active');
		$(this).addClass('ct-item-active');

		// HIDING PRODUCTS
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// SHOWING PRODUCTS
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// SHOWING ALL PRODUCTS
	$('.category-item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});