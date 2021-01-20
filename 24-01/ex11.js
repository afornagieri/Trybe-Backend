db.movies.updateMany({}, {$mul: {"sequels": 2} } );

db.movies.find({});