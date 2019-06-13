const url = 'https://api.spacexdata.com/v3/launches/next/';

function getNextLaunchDate(){
fetch(url)
    .then((res) => res.json())
    .then(function(data) {
        let nextDate = data.launch_date_utc;
        var deadline = new Date(Date.parse(nextDate));
        startClock('countDown', deadline);
    })
    .catch(error => console.error(error));
}

function timeToLaunch(endDate) {
    var t = Date.parse(endDate) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds
  };
}

function startClock(id, endDate) {
    var countDays = document.getElementById('countDays');
    var countHours = document.getElementById('countHours');
    var countMins = document.getElementById('countMins');
    var countSecs = document.getElementById('countSecs');
    function updateClock() {
        var t = timeToLaunch(endDate);
        countDays.innerHTML = t.days;
        countHours.innerHTML = ('0' + t.hours).slice(-2);
        countMins.innerHTML = ('0' + t.minutes).slice(-2);
        countSecs.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) { 
                document.getElementById('countDown').innerHTML = '<div class="vcenter"><p>The launch has begun!</p><a href="https://www.spacex.com/webcast/"><span class="btn spe" style="margin-left: -3%;";><i class="material-icons md-light">link</i>Watch launch</a></div>';
                clearInterval(timeinterval);
            }
        }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

getNextLaunchDate();