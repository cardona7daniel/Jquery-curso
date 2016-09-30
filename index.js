/**
 * Created by ldcardona on 28/09/2016.
 */


// $(function () {
// var header=document.getElementById("app-header");
//
// });  Asi tomo un elemnto de html con solo javascript
//
// $(function () {
// var header=$('h1.class'); ejemplo
//
// });

$(function () {
//     var $h1=$('h1');
//
// $h1.addClass('danger');
//
//     setTimeout(function () {
//         $h1.removeClass("danger")
//     }, 1500)
//
//     $h1.css({
//         'font-size': '70px'
//     })

    // Submit search form

    $("#app-body").find("form").submit(function (ev) {
        ev.preventDefault();
        var busqueda=$(this)
            .find('input[type="text"]')
            .val();
        alert("Se ha buscado: " + busqueda);
    });

    var template= '<article class="tv-show">' +
        '<div class="left">' +
        '<img src=":img:" alt=":img alt:">' +
        '</div>' +
        '<div class="left info">' +
        '<h1>:name:</h1>' +
        '<p>:summary:</p>' +
        '</div>' +
        ' </article>';

    $.ajax('http://api.tvmaze.com/shows', {
        success: function (shows, textStatus, xhr) {
            var $tvShowsContainer=$("#app-body").find('.tv-shows')
            shows.forEach(function(show){
                var article=template
                    .replace(":name:", show.name)
                    .replace(":img:", show.image.medium)
                    .replace(":summary:", show.summary)
                    .replace(":img alt:", show.name + "Logo")


                $tvShowsContainer.append($(article))

            })


        }
    })

})


    // Otra manera de hacer selectores en JQuery--Es lo mismo q la parte de arriba

//     function onsubmit(ev) {
//
//     }
//
// $("#app-body")
//     .find("form")
//     .submit // .click(onsubmit);
// });