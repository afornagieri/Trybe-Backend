db.movies.updateOne({"title":"Godzilla"}, {$max: {"imdbRating": 8.6}, $set: {"category":"thriller"}});

db.movies.findOne({"title":"Godzilla"});