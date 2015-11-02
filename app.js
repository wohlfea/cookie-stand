var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesHr: 5.2,
  displayName: document.getElementById('pikeMarket'),
  storeName: "Pike Place",
  hoursOpen: 8,
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
        this.displayName.innerHTML = "<h2 id='" + this.storeName + "'>" + this.storeName + "</h2>";
        var makeListContainer = document.createElement('UL');
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      } else {
        this.listHr.push(this.cookiesNeededHr());
        makeListItem = document.createElement('LI');
        makeListItem.textContent = this.listHr[i];
        makeListContainer.appendChild(makeListItem);
      }
    }
    this.displayName.appendChild(makeListContainer);
  }
}
pikePlace.theLoop();
