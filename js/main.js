$(function() {
    var winH = $(window).outerHeight()
    var upperH = $('.upperBar').innerHeight()
    var navbarH = $('.navbar').innerHeight()

    $('.slider').innerHeight(winH - (upperH + navbarH))
    $('.header-carousel-item').outerHeight(winH - (upperH + navbarH))
    
    //controlling shuffle-images
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active') //targeting the list element, removing the active class from all it's siblings and assigning class(active) to it
        if($(this).data('class')==".all"){ 
            $('.featured-work .shuffle-images .col-md').css('opacity','1')//assigning opacity to 1 if the targeted element has the data class (.all)
        }else{
            $('.featured-work .shuffle-images .col-md').css('opacity','.08')//assigning opacity to all the elements in the list to .08
            $($(this).data('class')).parent().css('opacity','1')//assigning opacity to 1 to all parents of elements that have a class = to data class of the targeted element 
        }
    })

})

