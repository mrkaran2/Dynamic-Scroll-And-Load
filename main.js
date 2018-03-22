var notPause = true;
var itemNumber = 1;
window.onscroll = function() {
    var scrollPosition = $(document).height()-($(window).height()+$(document).scrollTop());
    if(notPause && (scrollPosition < 100) && (scrollPosition > 2)){
        notPause = false;
        if(itemNumber<=7)
        {
            $.ajax({
                url: '/JSON/database.json',
                type: 'GET',
                dataType: "json",
                success: function(response){
                    $.get('template.html', function(template) {
                    template = template.replace("{{src}}", response[itemNumber].src);
                    template = template.replace("{{brand}}", response[itemNumber].brand);
                    template = template.replace("{{price}}", response[itemNumber].price);
                    itemNumber+=1;
                    $("#cart").append(template);
                    });
                }
            });
        }
    }
    if(!notPause && (scrollPosition < 200) && (scrollPosition >= 100)){
                notPause  = true;
    }
        
};


