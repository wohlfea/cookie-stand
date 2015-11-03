var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesHr: 5.2,
  storeName: "Pike Place",
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
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      listItem = document.createElement('LI');
      listItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(listItem);
    }
    newDiv.appendChild(listContainer);
    document.body.appendChild(newDiv);
  }
}

var seaTac = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookiesHr: 1.2,
  storeName: "SeaTac Airport",
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
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      listItem = document.createElement('LI');
      listItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(listItem);
    }
    newDiv.appendChild(listContainer);
    document.body.appendChild(newDiv);
  }
}

var southCenter = {
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiesHr: 1.9,
  storeName: "South Center",
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
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      makeListItem = document.createElement('LI');
      makeListItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(makeListItem);
    }
    newDiv.appendChild(listContainer);
    document.body.appendChild(newDiv);
  }
}

var bellSquare = {
  minCustHr: 20,
  maxCustHr: 48,
  avgCookiesHr: 3.3,
  storeName: "Bellevue Square",
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
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      listItem = document.createElement('LI');
      listItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(listItem);
    }
    newDiv.appendChild(listContainer);
    document.body.appendChild(newDiv);
  }
}

var alki = {
  minCustHr: 3,
  maxCustHr: 24,
  avgCookiesHr: 2.6,
  storeName: "Alki",
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
    newDiv = document.createElement('DIV');
    newDiv.setAttribute('id', this.storeName + " Div");
    listContainer = document.createElement('UL');
    newDiv.innerHTML = "<h2 id='" + this.storeName + " Heading'>" + this.storeName + "</h2>";
    for(i=0; i < this.hoursArray.length; i++) {
      this.listHr.push(this.cookiesNeededHr());
      listItem = document.createElement('LI');
      listItem.textContent = this.hoursArray[i] + this.listHr[i];
      listContainer.appendChild(listItem);
    }
    newDiv.appendChild(listContainer);
    document.body.appendChild(newDiv);
  }
}

pikePlace.theLoop();
seaTac.theLoop();
southCenter.theLoop();
bellSquare.theLoop();
alki.theLoop();
