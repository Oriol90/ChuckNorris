$(document).ready(function () {
    $("button").click(function (e) { 
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random", 
            function (data, textStatus, jqXHR) {
                $('#acudit').html(data.value.joke);
            });
    });
});
