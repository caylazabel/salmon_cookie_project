'use strict'

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 4.6,
  cookiesSoldPerHour: [],
  totalDailyCookieSales: 0,

  randomCustPerHour: function(){
    // var min = Math.ceil(this.minCustPerHour);
    // var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = firstAndPike.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
      this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
    }
  },
  render: function(){
    var firstAndPikeList = document.getElementById('firstAndPikeList');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': '+ firstAndPike.cookiesSoldPerHour[i] + ' cookies';
      firstAndPikeList.appendChild(liEl);
    }
    var liEm = document.createElement('li');
    liEm.textContent = 'Total: ' + firstAndPike.totalDailyCookieSales;
    firstAndPikeList.appendChild(liEm)
  }
}

firstAndPike.calcCookiesSoldPerHour();
console.log(firstAndPike);

firstAndPike.render();


var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  cookiesSoldPerHour: [],
  totalDailyCookieSales: 0,

  randomCustPerHour: function(){
    // var min = Math.ceil(this.minCustPerHour);
    // var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = alki.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
      this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
    }
  },
  render: function(){
    var alkiList = document.getElementById('alkiList');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': '+ alki.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
    var liEm = document.createElement('li');
    liEm.textContent = 'Total: ' + alki.totalDailyCookieSales;
    alkiList.appendChild(liEm)
  }
}

alki.calcCookiesSoldPerHour();

alki.render();


var seaTacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  cookiesSoldPerHour: [],
  totalDailyCookieSales: 0,

  randomCustPerHour: function(){
    // var min = Math.ceil(this.minCustPerHour);
    // var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = seaTacAirport.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
      this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
    }
  },
  render: function(){
    var seaTacAirportList = document.getElementById('seaTacAirportList');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': '+ seaTacAirport.cookiesSoldPerHour[i] + ' cookies';
      seaTacAirportList.appendChild(liEl);
    }
    var liEm = document.createElement('li');
    liEm.textContent = 'Total: ' + seaTacAirport.totalDailyCookieSales;
    seaTacAirportList.appendChild(liEm)
  }
}

seaTacAirport.calcCookiesSoldPerHour();

seaTacAirport.render();


var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  cookiesSoldPerHour: [],
  totalDailyCookieSales: 0,

  randomCustPerHour: function(){
    // var min = Math.ceil(this.minCustPerHour);
    // var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = capitolHill.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
      this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
    }
  },
  render: function(){
    var capitolHillList = document.getElementById('capitolHillList');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': '+ capitolHill.cookiesSoldPerHour[i] + ' cookies';
      capitolHillList.appendChild(liEl);
    }
    var liEm = document.createElement('li');
    liEm.textContent = 'Total: ' + capitolHill.totalDailyCookieSales;
    capitolHillList.appendChild(liEm)
  }
}

capitolHill.calcCookiesSoldPerHour();

capitolHill.render();


var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  cookiesSoldPerHour: [],
  totalDailyCookieSales: 0,

  randomCustPerHour: function(){
    // var min = Math.ceil(this.minCustPerHour);
    // var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = seattleCenter.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
      this.totalDailyCookieSales = this.totalDailyCookieSales + mathCalc
    }
  },
  render: function(){
    var seattleCenterList = document.getElementById('seattleCenterList');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': '+ seattleCenter.cookiesSoldPerHour[i] + ' cookies';
      seattleCenterList.appendChild(liEl);
    }
    var liEm = document.createElement('li');
    liEm.textContent = 'Total: ' + seattleCenter.totalDailyCookieSales;
    seattleCenterList.appendChild(liEm)
  }
}

seattleCenter.calcCookiesSoldPerHour();

seattleCenter.render();
