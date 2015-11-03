var body = document.body;
var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesHr: 5.2,
  displayName: document.getElementById('pikeMarket'),
  storeName: "Pike Place",
  hoursOpen: 8,
  hoursArray: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  listHr: [],
  custHr: function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  },
  cookiesNeededHr: function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  },
  theLoop: function(){
    for(i=0; i < this.hoursOpen; i++) {
      if(i === 0) {
        this.listHr.push(this.cookiesNeededHr());
        newDiv = document.createElement('DIV');
        makeListContainer = document.createElement('UL');
        newDiv.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    newDiv.appendChild(makeListContainer);
    document.body.appendChild(newDiv);
  }
}

var seaTac = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookiesHr: 1.2,
  displayName: document.getElementById('seaTac'),
  storeName: "SeaTac Airport",
  hoursOpen: 8,
  hoursArray: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  listHr: [],
  custHr: function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  },
  cookiesNeededHr: function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  },
  theLoop: function(){
    for(i=0; i < this.hoursOpen; i++) {
      if(i === 0) {
        this.listHr.push(this.cookiesNeededHr());
        newDiv = document.createElement('DIV');
        makeListContainer = document.createElement('UL');
        newDiv.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    newDiv.appendChild(makeListContainer);
    document.body.appendChild(newDiv);
  }
}

var southCenter = {
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiesHr: 1.9,
  displayName: document.getElementById('southCenter'),
  storeName: "South Center",
  hoursOpen: 8,
  hoursArray: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  listHr: [],
  custHr: function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  },
  cookiesNeededHr: function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  },
  theLoop: function(){
    for(i=0; i < this.hoursOpen; i++) {
      if(i === 0) {
        this.listHr.push(this.cookiesNeededHr());
        newDiv = document.createElement('DIV');
        makeListContainer = document.createElement('UL');
        newDiv.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    newDiv.appendChild(makeListContainer);
    document.body.appendChild(newDiv);
  }
}

var bellSquare = {
  minCustHr: 20,
  maxCustHr: 48,
  avgCookiesHr: 3.3,
  displayName: document.getElementById('bellSquare'),
  storeName: "Bellevue Square",
  hoursOpen: 8,
  hoursArray: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  listHr: [],
  custHr: function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  },
  cookiesNeededHr: function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  },
  theLoop: function(){
    for(i=0; i < this.hoursOpen; i++) {
      if(i === 0) {
        this.listHr.push(this.cookiesNeededHr());
        newDiv = document.createElement('DIV');
        makeListContainer = document.createElement('UL');
        newDiv.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    newDiv.appendChild(makeListContainer);
    document.body.appendChild(newDiv);
  }
}

var alki = {
  minCustHr: 3,
  maxCustHr: 24,
  avgCookiesHr: 2.6,
  displayName: document.getElementById('alki'),
  storeName: "Alki",
  hoursOpen: 8,
  hoursArray: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  listHr: [],
  custHr: function(){
    variance = Math.floor(Math.random()*(this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    return variance;
  },
  cookiesNeededHr: function(){
    cookiesNeeded = this.custHr() * this.avgCookiesHr;
    return Math.ceil(cookiesNeeded);
  },
  theLoop: function(){
    for(i=0; i < this.hoursOpen; i++) {
      if(i === 0) {
        this.listHr.push(this.cookiesNeededHr());
        newDiv = document.createElement('DIV');
        makeListContainer = document.createElement('UL');
        newDiv.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    newDiv.appendChild(makeListContainer);
    document.body.appendChild(newDiv);
  }
}

pikePlace.theLoop();
seaTac.theLoop();
southCenter.theLoop();
bellSquare.theLoop();
alki.theLoop();
