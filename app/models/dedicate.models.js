var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dedicateSchema = new Schema({
  name: String,
  message: String,
  senderName: String,
  song: {
    url: String,
    title: String,
    description: String,
    artist: String,
    thumbnail: {
      url: String,
      width: Number,
      height: Number,
    },
    uploadedBy: String,
  },
}, {
  timestamps: true,
});

var DedicateModel = mongoose.model('dedications', dedicateSchema);

module.exports = {

  create: function(data, callback) {
    var dedication = new DedicateModel(data);
    dedication.save(callback);
  },

  getById: function(dedicateId, callback) {
    DedicateModel.find({_id: dedicateId}, callback);
  }
 
};
