db.movies.updateOne({"title":"Home Alone"}, {$currentDate: {"lastUpdated": {$type: "timestamp"} }});

db.movies.findOne({"title":"Home Alone"});