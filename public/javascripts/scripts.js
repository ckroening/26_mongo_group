// finally, make an ajax call, using the POST method, and send the data
$(document).ready(function() {
    $('button').on('click', function (event) {
        event.preventDefault();
        $.ajax({
            url: '/get',
            type: 'get',
            data: JSON
        }).done(function (data) {
            var data = peopleArray;
            // when ajax is done, display the data by appending it to the DOM
            console.log(data);

            $p = $('<p>');
            $p.text(data);

            $('div').append($p);
        });
    });
});