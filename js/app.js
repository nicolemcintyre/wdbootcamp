var morePost = $('.read-more');
    
    $(function(){


        $(morePost).on('click', function () {
            event.preventDefault();
            $(this).siblings().show(500).slideDown(300);
            $(this).removeClass('read-more');
            $(this).addClass('read-less');
            $(this).text('read less');
            
        });
        

        $('a.read-less').on("click", function () {
            event.preventDefault();
            alert($(this).text());
        });


    });



// $(this).prevAll().slideup(800);
// $(this).addClass('read-more');
// $(this).removeClass('read-less');
// $(this).text('read more');


