db.movies.updateOne({"title":"Home Alone"}, {$min: {"budget": 5}});

db.movies.findOne({"title":"Home Alone"});