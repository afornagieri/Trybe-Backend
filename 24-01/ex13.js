db.movies.updateMany(
  {$or: [
    {"title": "Batman"},
    {"title": "Home Alone"}
  ]},
  {$min: {"imdbRating": 17}}
);

db.movies.find({});