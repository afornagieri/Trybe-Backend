db.xmen.updateMany({$or: [
  {"class": "gama"},
  {"class": "ômega"},
]},
{$min: {"power": 500}});

db.xmen.find({});