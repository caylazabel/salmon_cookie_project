'use strict'

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 4.6,
  // CookiesSoldPerHour =[],
  // hoursPerDay = [],

  randomCustPerHour: function(){
    var min = Math.ceil(firstAndPike.minCustPerHour);
    var max = Math.floor(firstAndPike.maxCustPerHour);
    return Math.floor(Math.random() * (firstAndPike.maxCustPerHour - firstAndPike.minCustPerHour + 1)) +firstAndPike.minCustPerHour;
  }

  // calcCookiesSoldPerHour: function(){
  //   this.randCustPerHour * this.avgCookiesPerCust
  //   for(){
  //     this.CookiesSoldPerHour.push(calcCookiesSoldPerHour)
    // }
  // }

// }
}

var CustPerHour = firstAndPike.randomCustPerHour();
console.log(CustPerHour);
