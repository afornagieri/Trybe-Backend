db.movies.updateOne({"title":"Godzilla"}, {$set: {"budget": 1}});

db.movies.findOne({"title":"Godzilla"});