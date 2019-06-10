const url = 'https://api.spacexdata.com/v3/launches/';
const calInfo = document.getElementsByClassName('calInfo');
const app = document.getElementById('root');
const calTable = document.createElement('div');
    calTable.setAttribute('class', 'calTable');
    app.appendChild(calTable);

function getLaunches(){
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(launch => {
            const calRow = document.createElement('div');
            const div = document.createElement('div');
            const p = document.createElement('p');
            const fig = document.createElement('figure');
            calRow.setAttribute('class', 'calRow');
            div.setAttribute('class', 'calInfo');
            div.style.display = 'none';
            calTable.appendChild(calRow);
            calRow.appendChild(p);
            p.innerHTML = '<span class="calCol" aria-label="Launch date (UTC)">' 
                        + launch.launch_date_utc.substring(0,10) + '</span>' 
                        + '<span class="calCol calName" aria-label="Mission name">' + launch.mission_name + '</span>'
                        + '<span class="calCol calRocket" aria-label="Rocket(s)">' + launch.rocket.rocket_name + '</span>'
                        + '<span class="calCol" aria-label="Launch site">' + launch.launch_site.site_name + '</span>';       
            if (launch.details !== null) {
                div.innerHTML = '<p class="col6">' + launch.details; + '</p'
                calRow.appendChild(div);
            }
            if (launch.links.mission_patch_small !== null) {
                fig.setAttribute('class', 'col1');
                fig.innerHTML = '<img class="patch" src="' + launch.links.mission_patch_small + '">';
                div.appendChild(fig);
            }
            if (launch.upcoming === true) {
                calRow.classList.add('calUp');
            } else {
                calRow.classList.add('calPrev');
                calRow.style.display = "none";
            }
        }
    )})
    .catch(error => console.error(error));
}

document.getElementById('calToggleInfo').addEventListener('click', function(){
    for (var i=0, len=calInfo.length; i<len; i++) {
          if (calInfo[i].style.display === "none") {
            calInfo[i].style.display = "flex";
          } else {
            calInfo[i].style.display = "none";
          }
    }
});

document.getElementById('calToggleUpc').addEventListener('click', function(data){
    const calTogglePrev = document.getElementById('calTogglePrev');
    const calToggleUpc = document.getElementById('calToggleUpc');
    const prevElements = document.getElementsByClassName('calPrev');
    const upElements = document.getElementsByClassName('calUp');
    for (var i = 0; i < prevElements.length; i++){
        prevElements[i].style.display = 'none';
    }
    for (var i = 0; i < upElements.length; i++){
        upElements[i].style.display = 'block';
    }
    calToggleUpc.classList.add('btnSel');
    calTogglePrev.classList.remove('btnSel');
});
document.getElementById('calTogglePrev').addEventListener('click', function(data){
    const calTogglePrev = document.getElementById('calTogglePrev');
    const calToggleUpc = document.getElementById('calToggleUpc');
    const upElements = document.getElementsByClassName('calUp');
    const prevElements = document.getElementsByClassName('calPrev');
    for (var i = 0; i < upElements.length; i++){
        upElements[i].style.display = 'none';
    }
    for (var i = 0; i < prevElements.length; i++){
        prevElements[i].style.display = 'block';
    }
    calToggleUpc.classList.remove('btnSel');
    calTogglePrev.classList.add('btnSel');
});

getLaunches();

