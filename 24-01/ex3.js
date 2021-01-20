db.movies.updateOne({"title": "Home Alone"}, {$set: {"budge": "15", "imdbRating": "5.5"}});

db.movies.findOne({"title": "Home Alone"});