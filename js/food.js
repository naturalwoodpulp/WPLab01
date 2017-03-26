$(document).ready(function()
      {
        $.get('food_menu.xml', function(d){
        //$('body').append('<h1>&emsp;OUR FOOD MENU</h1>');
        $('body').append('<dl />');
 
        $(d).find('food').each(function(){
 
            var $food = $(this); 
            var name = $food.find('name').text();
            var price = $food.find('price').text();
            var description = $food.find('description').text();
            var calories = $food.find('calories').text();
            var imageurl = $food.find('imageurl').text();
 
            var html = '<div class="mainBox">';
            html += '<div class="imgBack"></div>';
            html += '<div class="imgBox"><dt>';
            html += '<img class="foodImage" alt="" src="' + imageurl + '" /></dt></div>';
            html += '<div class="descBox">';
            html += '<dd> <span class="loadingPic" alt="Loading" />';
            html += '<span class="name">' + name + '</span><br>';
            html += '<span class="price">(' + price + ')';
            html += ' // ' + calories + ' calories<br><br></span>' ;
            html += '<span class="description"> ' + description + '</span><br>' ;
            
            html += '';
            html += '</dd></div></div>';
 
            $('dl').append($(html));
             
            $('.loadingPic').fadeOut(1400);
        });
    });
});