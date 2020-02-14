$.getJSON('data.json', function(data) {
    console.log(data);
    drawDays(data);
});

function drawDays(data) {
    var monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'October', 'November', 'December'];

    var el = document.querySelector('#calendar');
    var days = createElement('ul', 'days');

    var currentDate = new Date(); 
    var monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth());
    var monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

    var monthHeader = createElement('h1', 'calendar-head');
    monthHeader.textContent = monthStrings[currentDate.getMonth()];
    el.appendChild(monthHeader);

    var numPadDays = monthStart.getDay();
    for(var i = 0; i < numPadDays; i++) {
        var padDay = createElement('li');
        days.appendChild(padDay);
    }

    var monthItr = monthStart;
    while(monthItr.getTime() < monthEnd.getTime()) {
        var padDay = createElement('li');
        padDay.textContent = monthItr.getDate();
        if(monthItr.getDate() == currentDate.getDate()) {
            padDay.className = 'active';
        }

        var events = createElement('div', 'day-events');
        addEvents(monthItr, data, events);
        padDay.appendChild(events);

        days.appendChild(padDay);
        monthItr = new Date(monthItr.getFullYear(), monthItr.getMonth(), monthItr.getDate() + 1);
    }

    el.appendChild(days);
}

function addEvents(date, events, element) {
    var todaysEvents = events.sessions.reduce(function(memo, ev) {
        eventDate = new Date(ev.dateString);
        if(areSameDates(eventDate, date)) {
            memo.push(ev);
        }
        return memo;
    }, []);

    todaysEvents.forEach(function(ev) {
        var color = '';
        if(ev.result === 'upcoming') {
            color = 'blue';
        }
        else if(ev.result === 'succeeded') {
            color = 'green';
        }
        else {
            color = 'orange';
        }

        var evSpan = createElement('span', color);
        element.appendChild(evSpan);
    });
}

function areSameDates(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && 
        date1.getMonth() === date2.getMonth() && 
        date1.getDate() === date2.getDate();
}

function createElement(tagName, className, innerText) {
    var ele = document.createElement(tagName);
    if(className) {
      ele.className = className;
    }
    if(innerText) {
      ele.innderText = ele.textContent = innerText;
    }
    return ele;
}