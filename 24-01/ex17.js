db.xmen.updateMany(
  {"class": "gama"},
  {$max: {"power": 300}}
);

db.xmen.find({});