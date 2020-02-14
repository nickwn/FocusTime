'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$.getJSON('data.json', function(data) {
        console.log(data);
        var urlParams = new URLSearchParams(window.location.search);
        var time = urlParams.get('time');
        var name = urlParams.get('name');
        var session = findEvent(name, data.sessions);

        $('#min-worked').text(time);
        $('#min-needed').text(session.time + 'min');

        if(time >= session.time) {
            $('#min-worked').addClass('succeed-time');
        }
        else {
            $('#min-worked').addClass('fail-time');
        }

        console.log(time);
        console.log(session);
    });    
}

function findEvent(name, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            return array[i];
        }
    }
}