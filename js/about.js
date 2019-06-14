const url1 = 'https://api.spacexdata.com/v3/info/';
const url2 = 'https://api.spacexdata.com/v3/rockets/falcon1';
const url3 = 'https://api.spacexdata.com/v3/rockets/falcon9';
const url4 = 'https://api.spacexdata.com/v3/rockets/falconheavy';

function getCompanyInfo(){
fetch(url1)
    .then((res) => res.json())
    .then(function(data) {
        const companyInfo = document.getElementById('companyInfo');
        const companyDetails = document.getElementById('companyDetails');
        const leadership = document.createElement('ul');
        const quickFacts = document.createElement('ul');
        const p = document.createElement('p');
        let companyName = data.name;
        let founder = data.founder;
        let employees = data.employees;
        let vehicles = data.vehicles;
        let launchSites = data.launch_sites;
        let testSites = data.test_sites;
        let ceo = data.ceo;
        let cto = data.cto;
        let coo = data.coo;
        let ctoPropulsion = data.cto_propulsion;
        let valuation = data.valuation;
        let summary = data.summary;    
        companyInfo.innerHTML = '<h2>About SpaceX</h2>';
        p.innerHTML = summary;
        quickFacts.innerHTML = '<h4>Quick facts:</h4>' +
                               '<li>Founder: ' + founder + '</li>' +
                               '<li>Empolyees: ' + employees + '</li>' +                              
                               '<li>Vehicles: ' + vehicles + '</li>' +                              
                               '<li>Launch sites: ' + launchSites + '</li>' +
                               '<li>Test sites: ' + testSites + '</li>' +
                               '<li>Valuation: ' + valuation + '</li>';
        leadership.innerHTML = '<h4>Leadership:</h4>' +
                               '<li>CEO: ' + ceo + '</li>' +
                               '<li>CTO: ' + cto + '</li>' +                              
                               '<li>COO: ' + coo + '</li>' +
                               '<li>CTO propulsion: ' + ctoPropulsion + '</li>';  
        companyInfo.appendChild(p);
        companyDetails.appendChild(quickFacts);
        companyDetails.appendChild(leadership);
    })
    .catch(error => console.error(error));
}
function getFalcon1(){
fetch(url2)
    .then((res) => res.json())
    .then(function(data) {
        const rocket = document.getElementById('rocketFalcon1');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        const p = document.createElement('p');
        let rocketName = data.rocket_name;
        let rocketHeight = data.height.meters;
        let rocketDiameter = data.diameter.meters;
        let rocketMass = data.mass.kg;
        let rocketCost = data.cost_per_launch;
        let rocketDescription = data.description;
        ul.innerHTML =  '<h4>' + rocketName + '</h4>' +
                        '<li>Height: ' + rocketHeight + ' m</li>' +
                        '<li>Diameter: ' + rocketDiameter + ' m</li>' +                              
                        '<li>Mass: ' + rocketMass + ' kg</li>' +                              
                        '<li>Cost per launch: ' + rocketCost + '</li>';
        p.innerHTML = rocketDescription;
        img.setAttribute('src', 'img/rockets/falcon1.svg');
        rocket.setAttribute('class', 'rocket');
        rocket.appendChild(img);
        rocket.appendChild(ul);
        rocket.appendChild(p);
    })
    .catch(error => console.error(error));
}
function getFalcon9(){
fetch(url3)
    .then((res) => res.json())
    .then(function(data) {
        const rocket = document.getElementById('rocketFalcon9');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        const p = document.createElement('p');
        let rocketName = data.rocket_name;
        let rocketHeight = data.height.meters;
        let rocketDiameter = data.diameter.meters;
        let rocketMass = data.mass.kg;
        let rocketCost = data.cost_per_launch;
        let rocketDescription = data.description;
        ul.innerHTML =  '<h4>' + rocketName + '</h4>' +
                        '<li>Height: ' + rocketHeight + ' m</li>' +
                        '<li>Diameter: ' + rocketDiameter + ' m</li>' +                              
                        '<li>Mass: ' + rocketMass + ' kg</li>' +                              
                        '<li>Cost per launch: ' + rocketCost + '</li>';
        p.innerHTML = rocketDescription;
        img.setAttribute('src', 'img/rockets/falcon9.svg');
        rocket.setAttribute('class', 'rocket');
        rocket.appendChild(img);
        rocket.appendChild(ul);
        rocket.appendChild(p);
    })
    .catch(error => console.error(error));
}
function getFalconH(){
fetch(url4)
    .then((res) => res.json())
    .then(function(data) {
        const rocket = document.getElementById('rocketFalconH');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        const p = document.createElement('p');
        let rocketName = data.rocket_name;
        let rocketHeight = data.height.meters;
        let rocketDiameter = data.diameter.meters;
        let rocketMass = data.mass.kg;
        let rocketCost = data.cost_per_launch;
        let rocketDescription = data.description;
        ul.innerHTML =  '<h4>' + rocketName + '</h4>' +
                        '<li>Height: ' + rocketHeight + ' m</li>' +
                        '<li>Diameter: ' + rocketDiameter + ' m</li>' +                              
                        '<li>Mass: ' + rocketMass + ' kg</li>' +                              
                        '<li>Cost per launch: ' + rocketCost + '</li>';
        p.innerHTML = rocketDescription;
        img.setAttribute('src', 'img/rockets/falconH.svg');
        rocket.setAttribute('class', 'rocket');
        rocket.appendChild(img);
        rocket.appendChild(ul);
        rocket.appendChild(p);
    })
    .catch(error => console.error(error));
}

getCompanyInfo();
getFalcon1();
getFalcon9();
getFalconH();