db.movies.updateOne(
  { "title": "Batman" },
  { $set: { "imdbRating": 7.7 } },
);

db.movies.findOne({"title": "Batman"});