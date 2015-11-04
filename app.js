var newStoreCounter = 1;
var table = document.getElementById('table');
var topRow = document.getElementById('topRow');
var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var form = document.getElementById('theForm');
function Store (minCustHr, maxCustHr, avgCookiesHr, storeName) {
  this.minCustHr =  minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesHr =  avgCookiesHr;
  this.storeName = storeName;
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
  this.makeNewRow = function(){
    newRow = document.createElement('TR');
    newRow.setAttribute('id', this.storeName + " Row");
    newHeading = document.createElement('TH');
    newHeading.textContent = this.storeName;
    newRow.appendChild(newHeading);
  };
  this.calcTotal = function() {
    if (i !== hoursArray.length){
    this.listTtl = this.listTtl + this.listHr[i];
    console.log(this.storeName + " " + hoursArray[i] + " " + this.listHr[i]);
    }
  };
  this.theLoop = function(){
    this.makeNewRow();
    for(i=0; i <= hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      tblItem = document.createElement('TD');
      tblItem.textContent = this.listHr[i];
      newRow.appendChild(tblItem);
      this.calcTotal();
    }
    tblItem.textContent = this.listTtl;
    newRow.appendChild(tblItem);
    table.appendChild(newRow);
  };
}

var pikePlace = new Store(17, 88, 5.2, "Pike Place Market");
var seaTac = new Store(6, 44, 1.2, "Sea-Tac");
var southCenter = new Store(11, 38, 1.9, "South Center Mall");
var bellSquare = new Store(20, 48, 3.3, "Bellevue Square");
var alki = new Store(3, 24, 2.6, "Alki Beach");

function makeTopRow (){
  for(i=-1; i <= hoursArray.length; i++){
      var topRowItem = document.createElement('TH');
      topRowItem.textContent = hoursArray[i];
      topRow.appendChild(topRowItem);
      if (i === hoursArray.length-1){
      var topRowItem = document.createElement('TH');
      topRowItem.textContent = "TOTAL";
      topRow.appendChild(topRowItem);
    }
  }
}
function createStore() {
window['newStore'+newStoreCounter] = new Store(event.target.minCustInput.value, event.target.maxCustInput.value, event.target.avgPerCustInput.value, event.target.locationInput.value);
window['newStore'+newStoreCounter].theLoop();
event.target.minCustInput.value = null;
event.target.maxCustInput.value = null;
event.target.avgPerCustInput.value = null;
event.target.locationInput.value = null;
newStoreCounter++;
}
function validateCreate(event){
  event.preventDefault();
  console.log('you clicked the button');
  if (!event.target.locationInput.value || !event.target.minCustInput.value || !event.target.maxCustInput.value || !event.target.avgPerCustInput.value) {
    return alert('Fields cannot be empty!');
  } else if (isNaN(event.target.minCustInput.value) || isNaN(event.target.maxCustInput.value) || isNaN(event.target.avgPerCustInput.value)) {
    return alert('You entered a letter in a number field!');
  } else {
    console.log('User entered Valid Input');
    createStore();
  };
}
makeTopRow();
pikePlace.theLoop();
seaTac.theLoop();
southCenter.theLoop();
bellSquare.theLoop();
alki.theLoop();
form.addEventListener('submit', validateCreate);
