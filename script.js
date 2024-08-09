const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const info = getBook(5);
const information = getBooks();
// const genreArray = info.map(book => book.genres).flat();
// console.log(genreArray); 

  // const dataInfo = information.map((book) => {
  //   const Transalation = book.translations?.bengali??"no data";
  //   console.log(Transalation);
  // })




const { genres, author, title, publicationDate, hasMovieAdaptation } = info;

// const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenre)

// const newArr =  [...genres, "roamnce dawn"];
// console.log(newArr)

const Tolkien = `Long Long time ago, their was a writer called ${author}, who wrote a legendary book called ${title}, it was published on ${publicationDate.split("-")[1]}. The book has ${hasMovieAdaptation ? "": "not"} been adapted as a movie.`;

const Martin = `It's the era of (90's) the sitcom comedy booming, pop contry culture is booming. But here's our legendry writer ${author} cooking up a stroy of the decade if not century called as ${title}. The Book was published in the year ${publicationDate.split("-")[0]}. The initial years went dried up for martin, a writers biggest dilemma, you can write a novel of a century but, no one even may pay attention to it. But a big bang caeer was ahead of martin in his 60's. Welcome 2010's and Dave and Dan, and they teamed up to created a legendary show yeah not a movie adaption , but a show called a ${title}, setting up a universe for future spinOff's A Song of Ice and Fire!!`;

// Tolkien;
// console.log(Tolkien);

//Martin;
// console.log(Martin);
// //function declaratiom

// function getYear(str){
//   return str.split('-')[0];
// }

// console.log(getYear(publicationDate));

// //fuction expression

// const getAnotherYear = (str) => str.split('-')[0];

// //function expression actually starts from () which can be also called as nameless function.
// //In fucntion expression, if wrote inline, no need to specify the return keyword.

// console.log(getAnotherYear(publicationDate));

// //short curcitting.
// // && operator.

// //if any variable has falsy values like
// //falsy: 0, null, '', undefined.

// const push = false;

// console.log(push && "some string");

// //as you can look above, since push value is false, the interpreter does not even look at other condition and breaks the circuit and returns false.

// const rony = true;

// console.log(rony && "some string 2+2");

// //now you see here, since rony variable dosent have any, falsy value specified above, it returns a "some string". 
// //hence wherenver if a  variable has a truthy values, and not falsy values, the condition after the && operator will get excute.


// //OR Operator

// //if a variable has falsy values
// //falsy: 0,'',null,undefined, then coditon after the || operator will get executed.
// const push = 0
// console.log(push || 2+2);
// //see that's the way it is.

// //But their is a problem, lets say we want to take a count. 

// const count = 0;
// console.log(count || "No is not counted");

// // now here we want to count the no, even if it is 0. But since the value of the count variable is 0 a falsy value we are not getting the actual count. 

// //Hence
// //nullish Coalsceing Operator was itroduced.
// //here the nuiils operator returns the secone value, only when the value of first variable is undefined or null. Slightly better than || operator.
// console.log(count ?? "No is not counted");

// //look above, now we get the desired no, even if it is a falsy value. 

// //we need to use these all operators carefully.


// //optional chaning.

// function getReviewCount(info){
//   const goodreads = info.reviews.goodreads?.reviewsCount ?? 0;
//   const librarything = info.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// console.log(getReviewCount(info))

//map filter
//map function actually, traverse over the array, expects a call back function, which will have operation written, which map function will perfrom for each element one by one.
// and then return a new array.

// const titles = information.map(book => ({title: book.title, author: book.author}));
//  console.log(titles);

const TitleNames = information.filter(book => !book.genres.includes("adventure")).map((book) => ({title: book.title, author: book.author}));

console.log(TitleNames);
// const BookPages = information.reduce((sum, book) => sum + book.pages, 0);
// console.log(BookPages);


