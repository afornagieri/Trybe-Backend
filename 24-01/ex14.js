db.xmen.updateMany({"class": "unknown"}, {$unset: {"class": ""}});

db.xmen.find({});