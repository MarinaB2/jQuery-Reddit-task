$(document).ready(function(){
    $('#whiteDiv').hide();

    $('#get-list').click(function () {
        $('#whiteDiv').show("slow");
        $("#text").slideUp(2000);

        $.ajax({
            url:'https://www.reddit.com/r/cats/top.json?limit=10',
            method:'GET',
            success: function(data){
                $.each(data.data.children, function (i, item) {
                    console.log(item.data);
                
                    $("#container").append(
                        '<div class="jumbotron">'  
                        +'<h4 id="htxt">'+ item.data.title + '</h4> '
                        +'<hr class="my-4"></hr>'
                        +'<a href=' + item.data.permalink + '>' + item.data.permalink + '</a>'
                        + '</div>'
                        + '<br>'
                        )
                });
            }
        })
})

$('#container').click(function () {
$(".containerClass").animate({
    width: '100%',
    margin: '0',
    fontSize: '-3em',
    opacity: '0.4'

}, "slow")
})

$('#container').hover(function () {
    $(".containerClass").animate({
        width: '60%',
        fontSize: '1em',
        marginLeft: '175px',
        opacity: '2'
    }, "slow")
    })

})




