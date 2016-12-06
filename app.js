'use strict'

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 4.6,
  cookiesSoldPerHour: [],

  randomCustPerHour: function(){
    var min = Math.ceil(this.minCustPerHour);
    var max = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour;
  },
  // var CustPerHour = firstAndPike.randomCustPerHour();
  // console.log(CustPerHour);


  calcCookiesSoldPerHour: function (){
    for (var i = 0; i < hoursOpen.length; i++){
      var mathCalc = Math.round (this.randomCustPerHour() * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(mathCalc);
    }
  }
}

firstAndPike.calcCookiesSoldPerHour();
console.log(firstAndPike);

var firstAndPikeList = document.getElementById('firstAndPikeList');
for (var i = 0; i < hoursOpen.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hoursOpen[i] + ': '+ firstAndPike.cookiesSoldPerHour[i] + 'cookies';
  firstAndPikeList.appendChild(liEl);
}
