var db = require('../models');
var Artist = db.models.Artist;

function index(req, res) {
  Artist.findAll().then(function(artists) {
    res.json(artists);
  });
}

function show(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    if(!artist) res.send(res, "not found");
    //Artist.sing();
    //artist.shout();
    res.json(artist);
  });  
}

function create(req, res) {
  Artist.create(req.body).then(function(artist){
    if(!artist) return error(res, "not saved");
    res.json(artist);
  });
}

function update(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    if(!artist) return error(res, "not found");
    return artist.updateAttributes(req.body);
  })
  .then(function(artist){
    res.json(artist);
  });
}

function destroy(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    if(!artist) return error(res, "not found");
    return artist.destroy();
  })
  .then(function(){
    res.send("artist deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;