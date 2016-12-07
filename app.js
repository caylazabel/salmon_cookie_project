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

new Store('First and Pike', 23, 65, 4.6);
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7)


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






// console.log(allStores);

// var allShops = [shopOne, shopTwo, shopThree, shopFour, shopFive];
//
//
//
//
//
//
//
//
/////////////////new   ^^^^^//////////













//

//
//
//   calcCookiesSoldPerHour: function (){
//     for (var i = 0; i < hoursOpen.length; i++){
//       var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
//       this.cookiesSoldPerHour.push(mathCalc);
//       this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
//     }
//   },
//   render: function(){
//     var firstAndPikeList = document.getElementById('firstAndPikeList');
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': '+ firstAndPike.cookiesSoldPerHour[i] + ' cookies';
//       firstAndPikeList.appendChild(liEl);
//     }
//     var liEm = document.createElement('li');
//     liEm.textContent = 'Total: ' + firstAndPike.totalDailyCookieSales;
//     firstAndPikeList.appendChild(liEm)
//   }
// }
//
// firstAndPike.calcCookiesSoldPerHour();
// console.log(firstAndPike);
//
// firstAndPike.render();
//
//
// var alki = {
//   locationName: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   cookiesSoldPerHour: [],
//   totalDailyCookieSales: 0,
//

//
//   calcCookiesSoldPerHour: function (){
//     for (var i = 0; i < hoursOpen.length; i++){
//       var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
//       this.cookiesSoldPerHour.push(mathCalc);
//       this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
//     }
//   },
//   render: function(){
//     var alkiList = document.getElementById('alkiList');
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': '+ alki.cookiesSoldPerHour[i] + ' cookies';
//       alkiList.appendChild(liEl);
//     }
//     var liEm = document.createElement('li');
//     liEm.textContent = 'Total: ' + alki.totalDailyCookieSales;
//     alkiList.appendChild(liEm)
//   }
// }
//
// alki.calcCookiesSoldPerHour();
//
// alki.render();
//
//
// var seaTacAirport = {
//   locationName: 'SeaTac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   cookiesSoldPerHour: [],
//   totalDailyCookieSales: 0,
//
//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
//   },
//
//   calcCookiesSoldPerHour: function (){
//     for (var i = 0; i < hoursOpen.length; i++){
//       var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
//       this.cookiesSoldPerHour.push(mathCalc);
//       this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
//     }
//   },
//   render: function(){
//     var seaTacAirportList = document.getElementById('seaTacAirportList');
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': '+ seaTacAirport.cookiesSoldPerHour[i] + ' cookies';
//       seaTacAirportList.appendChild(liEl);
//     }
//     var liEm = document.createElement('li');
//     liEm.textContent = 'Total: ' + seaTacAirport.totalDailyCookieSales;
//     seaTacAirportList.appendChild(liEm)
//   }
// }
//
// seaTacAirport.calcCookiesSoldPerHour();
//
// seaTacAirport.render();
//
//
// var capitolHill = {
//   locationName: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 2.3,
//   cookiesSoldPerHour: [],
//   totalDailyCookieSales: 0,
//
//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
//   },
//
//
//   calcCookiesSoldPerHour: function (){
//     for (var i = 0; i < hoursOpen.length; i++){
//       var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
//       this.cookiesSoldPerHour.push(mathCalc);
//       this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
//     }
//   },
//   render: function(){
//     var capitolHillList = document.getElementById('capitolHillList');
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': '+ capitolHill.cookiesSoldPerHour[i] + ' cookies';
//       capitolHillList.appendChild(liEl);
//     }
//     var liEm = document.createElement('li');
//     liEm.textContent = 'Total: ' + capitolHill.totalDailyCookieSales;
//     capitolHillList.appendChild(liEm)
//   }
// }
//
// capitolHill.calcCookiesSoldPerHour();
// capitolHill.render();
//
//
// var seattleCenter = {
//   locationName: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   cookiesSoldPerHour: [],
//   totalDailyCookieSales: 0,
//
//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
//   },
//
//   calcCookiesSoldPerHour: function (){
//     for (var i = 0; i < hoursOpen.length; i++){
//       var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
//       this.cookiesSoldPerHour.push(mathCalc);
//       this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
//     }
//   },
//   render: function(){
//     var seattleCenterList = document.getElementById('seattleCenterList');
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': '+ seattleCenter.cookiesSoldPerHour[i] + ' cookies';
//       seattleCenterList.appendChild(liEl);
//     }
//     var liEm = document.createElement('li');
//     liEm.textContent = 'Total: ' + seattleCenter.totalDailyCookieSales;
//     seattleCenterList.appendChild(liEm)
//   }
// }
// seattleCenter.calcCookiesSoldPerHour();
// seattleCenter.render();
