var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
   title: {
        type: String,
        Required: 'Kindly enter the title of the task'
    },

    descriptions: {
        type: String,
        Required: 'Kindly enter the descriptions of the task'
    }
   
});

module.exports = mongoose.model('todo', TaskSchema);