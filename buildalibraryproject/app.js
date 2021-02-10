// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// Each of the three classes has properties for title, isCheckedOut, and ratings. However, the title property is the only one that does not have a default value.
// Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_).
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    return (this._isCheckedOut = value);
  }
  //  not using underscore for isCheckedOut because we are using getter above to read already
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (acumulator, rating) => acumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }
  addRating(newRating) {
    this.ratings.push(newRating);
  }
}
// Book class extends
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    //   this._isCheckedOut = false;
    //   this._ratings = [];
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
//  movie class extends
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    //   this._isCheckedOut = false;
    //   this._ratings = [];
  }
  get director() {
    return this._director;
  }
  get pages() {
    return this._runTime;
  }
}
//  INSTANCE FOR BOOK
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(2);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// MOVIE INSTANCE
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(3);
speed.addRating(5);
console.log(speed.getAverageRating());
