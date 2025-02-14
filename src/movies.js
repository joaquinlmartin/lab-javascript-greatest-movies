// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
const directors = movies.map((movie) => movie.director)
  return directors;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSpielbergFilms = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  })
  return dramaSpielbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let finalAvg = movies.reduce((acumulator, current) => {
    if (!current.score) {
      return acumulator += 0; 
    } else {
   return acumulator += current.score / movies.length;
  }}, 0)
  return finalAvg = Math.round(finalAvg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie){
    if (movie.genre.includes("Drama")) {
    return movie;
    }}); 
    if (dramaMovies.length === 0) { return 0}
    let averageDramaScore = dramaMovies.reduce(function(sum, movie){
    return sum += movie.score;
    }, 0); let average = averageDramaScore / dramaMovies.length
    return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedYears = [];
  for (let i=0; i < movies.length; i++) {
  sortedYears.push(movies[i])}
  sortedYears.sort(function(el1, el2){
  if (el1.year === el2.year) {
  if (el1.title < el2.title) {
  return -1;} 
  else if (el1.title > el2.title) {
  return 1;}}
  return el1.year - el2.year;
  }); return sortedYears;} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  let movArr = movies.map((movie)=> {
      return movie.title;
  });
  let first20 = movArr.sort((mov1, mov2)=>{
      if(mov1<mov2){
          return -1;
      } else if (mov1>mov2){
          return 1;
      }
  })
  return first20.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  return array.map(movie => {
    parseInt(movie.duration, "h" * 60)
  })
  /*let newMovies = [...movies];
  newMovies.forEach((movie, i) => {
    let newDuration = newMovies[i].duration;
    newDuration = newMovies.map((movie) =>
      movie.duration
        .slice(0, movie.duration.length - 3)
        .replace("h", "")
        .split(" ")
        .map(Number)
    );
    newDuration = newDuration.map((duration) => duration[0] * 60 + duration[1]);
  });
  return newMovies;*/
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
