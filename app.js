'use strict';
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
var allStores = [];
var storeTable = document.getElementById('salmonStoresTable');

// start of constuctor function
function Store (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesSoldPerHour = [];
  this.randomCustPerHour = [];
  this.totalDailyCookieSales = 0;

  this.calcRandomCustPerHour = function (){
    for (var i = 0; i < hoursOpen.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };

  this.calcCookiesSoldPerHour = function (){
    this.calcRandomCustPerHour();
    for (var i = 0; i < hoursOpen.length; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.cookiesSoldPerHour[i];
      // console.log(this.totalDailyCookieSales);
    }
  };


  this.render = function (){

    var trEl = document.createElement('tr');
    storeTable.appendChild(trEl)

    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hoursOpen.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }
// below i changed the variable tdEl to totalTdEl
    var totalTdEl = document.createElement('td');
    totalTdEl.textContent = this.totalDailyCookieSales;
    trEl.appendChild(totalTdEl);
  }

  allStores.push(this);
  this.calcCookiesSoldPerHour();
  this.calcRandomCustPerHour();
  this.render();
}

function headerRow (){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th')
  thEl.textContent = ('        ');
  trEl.appendChild(thEl);

  for (var i = 0; i < hoursOpen.length; i++){
    var thEl1 = document.createElement('th');
    thEl1.textContent = hoursOpen[i];
    trEl.appendChild(thEl1);
  }
  thEl = document.createElement('th')
  thEl.textContent = ('Totals');
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
headerRow();


// this is exmple footer




function footerRows () {

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = ('Store Totals');
  trEl.appendChild(tdEl);


  for(var i = 0; i < hoursOpen.length; i++){

    var t = 0;

    for (var j = 0; j < allStores.length; j++){
      t += allStores[j].cookiesSoldPerHour[i];
    }
    var tdEl1 = document.createElement('td');
    tdEl1.textContent = t;
    trEl.appendChild(tdEl1)
    console.log(t, 'here');
  }
  var endTotal = 0;
  for(var i = 0; i < allStores.length; i++){
    endTotal += allStores[i].totalDailyCookieSales;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = endTotal;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);

}



new Store('First and Pike', 23, 65, 4.6);
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7)

footerRows();
