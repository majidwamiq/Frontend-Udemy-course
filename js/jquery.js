// console.log($);

$(document).ready(function () {
    // $(".drop").on("click",function () {
    //     alert("hy");
    // });


// dropdown menue show
    $( ".drop" ).on( "click", function( click ) {
        // hiddenBox.show();
        $(".sub_menu").fadeIn();
    });
// dropdown menu hide
    $(".menu").on("mouseleave" , function () {
        $(".sub_menu").fadeOut();

    });

//multiple target element and append prepend replacing
    $("#append , #prepend, #replace").on("click", function (e) {
        // console.log(e);
        let el = $(e.currentTarget);
        // console.log(el);
        let action = el.attr('id');
        let content = $(".text").val();
        if (action=="append"){
            console.log("Append Button");
            $(".para").append(content);
        }else
            if (action=="prepend"){
            console.log("Prepend button");
            $(".para").prepend(content);
        }else
            if (action=="replace"){
                console.log("Replacing Button");
                $(".para").html(content);
            }
    });


//default preventer event handler
    $('[href="https://www.google.com/"]').on("click", function (a) {
        console.log("prevent the page to direct on next page")
        a.preventDefault();
    });

// event.which and switch case eent,which return number
    $(document).on('mousedown', function (event) {
        // console.log(event);
        console.log(event.which);
    });

// stop the contextmenu of google
    $(document).on('contextmenu',function (event) {
        return false;
    })
    $(document).on("mousedown",function (event){
        event.stopPropagation();

        $('.hidden').removeClass("shown");

        // is method
        if($(event.target).is('img')){
            $(".saveimg, .newtab").addClass("shown");
        }
        if(event.which==3)
        {
            $('#context_menu').css({
                top: event.pageY,
                left:event.pageX
            });
            $('#context_menu').fadeIn();
            return false;
        }
        $('#context_menu').fadeOut();

        // console.log(event.pageX,event.pageY);
    });

////////////////////focusout method
    $('input').focusout(function (){
        if($(this).val().indexOf("@") > -1 && $(this).val().indexOf('.')>-1){
            $('.status').html('Valid Email');
        }else{
            $('.status').html('Invalid Email')
        }
    });
    /////////////contain and is and hasclass

    ///////////////////each loop
    $('p').each(function () {
        console.log($(this).text());
    });

    function callbackprint() {
        console.log($(this).text());
    }
    $("p").each(callbackprint);
});