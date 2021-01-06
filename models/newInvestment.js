const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Schema
const Schema = mongoose.Schema;
const NewInvestmentSchema = new Schema({
    id: String,
    name: String,
    dob: String,
    investment: String,
    months: String
});

// Model
const NewInvestment = mongoose.model('NewInvestment', NewInvestmentSchema);

module.exports =  NewInvestment;