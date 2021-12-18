$(function () {
    
    function display_show(content){
       
        if(content.css('display') == 'flex') {
            content.hide();
        } else {
            content.show();
        }

        console.log(content)
    };

    $(".accardion").click(function() {
        let conteiner = $($(this).children()[1]);
        display_show(conteiner);
    });

});