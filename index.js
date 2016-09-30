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

    var template

    $.ajax('http://api.tvmaze.com/shows', {
        success: function (data, textStatus, xhr) {
            console.log(data);
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