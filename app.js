var display = document.getElementById('display');
var table = document.getElementById('table');
function Store (minCustHr, maxCustHr, avgCookiesHr, storeName) {
  this.minCustHr =  minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesHr =  avgCookiesHr;
  this.storeName = storeName;
  this.hoursArray = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
  this.listHr = [];
  this.listTtl = 0;
  this.custHr = function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  };
  this.cookiesNeededHr = function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  };
  this.theLoop = function(){
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    listContainer.setAttribute('id', this.storeName + " List");
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      listItem = document.createElement('LI');
      listItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(listItem);
      this.listTtl = this.listTtl + this.listHr[i];
    }
    listItem.textContent = "Total: " + this.listTtl;
    listContainer.appendChild(listItem)
    newDiv.appendChild(listContainer);
    display.appendChild(newDiv);
  };
}

var pikePlace = new Store(17, 88, 5.2, "Pike Place Market");
var seaTac = new Store(6, 44, 1.2, "Sea-Tac");
var southCenter = new Store(11, 38, 1.9, "South Center Mall");
var bellSquare = new Store(20, 48, 3.3, "Bellevue Square");
var alki = new Store(3, 24, 2.6, "Alki Beach");

pikePlace.theLoop();
seaTac.theLoop();
southCenter.theLoop();
bellSquare.theLoop();
alki.theLoop();


