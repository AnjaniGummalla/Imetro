var mongoose = require('mongoose');  
var DataOperationalDescriptionSchema = new mongoose.Schema({  
  DataItem:{
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
mongoose.model('DataOperationsDescription', DataOperationalDescriptionSchema);

module.exports = mongoose.model('DataOperationsDescription');