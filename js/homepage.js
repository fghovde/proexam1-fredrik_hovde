const url1 = 'https://api.spacexdata.com/v3/launches/next/';
const url2 = 'https://api.spacexdata.com/v3/launches/latest/';

function getNextLaunchDate(){
fetch(url1)
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
    const countDays = document.getElementById('countDays');
    const countHours = document.getElementById('countHours');
    const countMins = document.getElementById('countMins');
    const countSecs = document.getElementById('countSecs');
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

function getLatestLaunch(){
fetch(url2)
    .then((res) => res.json())
    .then(function(data) {
    const lastLaunchInfo = document.getElementById('lastLaunchInfo');
    const lastLaunchMedia = document.getElementById('lastLaunchMedia');
    lastLaunchInfo.innerHTML = '<h3>Our latest launch</h3>' +
                                '<p>' + data.details.substring(0,250) + ' ... </p>' +
                                '<a target="_blank" href="' + data.links.wikipedia + '"><span class="btn"><i class="material-icons md-light">link</i>Read more</span></a>';
    lastLaunchMedia.innerHTML = '<iframe width="100%" height="306" src="https://www.youtube.com/embed/' + data.links.youtube_id 
                                + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
    .catch(error => console.error(error));
}

function validateEmail() {
    var email = document.getElementById('email').value;
    const errorIcon = '<i class="material-icons md-light">error_outline</i>';
    const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    if (email == '' || email == null) {
        document.getElementById('emailMsg').innerHTML = errorIcon + 'Enter your email';
        document.getElementById('emailMsg').setAttribute('style', 'display:block;');
        document.getElementById('email').focus();        
        return false;
    }
    if (emailRegex.test(email) == false) {
        document.getElementById('emailMsg').innerHTML = errorIcon + 'E-mail format should be: your@email.com (.org, .co.uk etc.)';
        document.getElementById('emailMsg').setAttribute('style', 'display:block;');
        document.getElementById('email').focus();
        return false;
    }
    if (emailRegex.test(email) == true) {
        document.getElementById('emailMsg').innerHTML = "";
        document.getElementById('emailMsg').setAttribute('style', 'display:block;');
    }
    successCallback();
    return false;
}

function successCallback(validateForm) {
    const emailMsg = document.getElementById('emailMsg');
    const succIcon = '<i class="material-icons md-light">done</i>';
        emailMsg.setAttribute('class', 'success');
        emailMsg.setAttribute('style', 'display:block;');
        emailMsg.innerHTML = succIcon + "Success";
}

getNextLaunchDate();
getLatestLaunch();