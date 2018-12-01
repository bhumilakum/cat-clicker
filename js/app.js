var initialCats = [
    {
        clickCount: 0,
        name: 'Pussy',
        imgSrc: 'img/cat1.jpg',
        nicknames: ['first', 'second', 'third', 'forth']
    },
    {
        clickCount: 0,
        name: 'Meow',
        imgSrc: 'img/cat2.jpg',
        nicknames: ['mew', 'meme']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/cat3.jpg',
        nicknames: ['tie']
    },
    {
        clickCount: 0,
        name: 'Kitten',
        imgSrc: 'img/cat4.jpg',
        nicknames: ['kitty']
    },
    {
        clickCount: 0,
        name: 'Polly',
        imgSrc: 'img/cat5.jpg',
        nicknames: ['zoo']
    }
]
var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);
    this.title = ko.computed(function () {
        if (this.clickCount() < 10) {
            return 'Newborn';
        } else if (this.clickCount() >= 10 && this.clickCount() < 100) {
            return 'Infant';
        } else {
            return 'Teen';
        }
    }, this);
}

var ViewModel = function () {

    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        //this.clickCount(this.clickCount() + 1);
    };

    this.showCat = function(cat) {
        self.currentCat(cat);
    };
}

ko.applyBindings(new ViewModel());