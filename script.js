$(document).ready(function () {
    $("button").click(function (e) { 
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random", 
            function (data, textStatus, jqXHR) {
                console.log(data.value.joke);
                $('#acudit').html(data.value.joke);
            });
    });
});