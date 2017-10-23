var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
var ArtistSchema = new Schema({
  name: String,
  photoUrl: String,
  nationality: String,
  instrument: String,
  home_address: String,
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;