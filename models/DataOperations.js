var mongoose = require('mongoose');  
var DataOperationalSchema = new mongoose.Schema({  
  IteamCode:{
  	type:String,
  	unique: true,
  },
  Heading: String,
  Description: String,
  Explanation: String,
  Unit: String,
  Comprises: String,
  Except: String,
});
mongoose.model('DataOperations', DataOperationalSchema);

module.exports = mongoose.model('DataOperations');