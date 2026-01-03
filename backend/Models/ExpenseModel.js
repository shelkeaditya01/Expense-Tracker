const mongoose=require('mongoose');



const ExpenseSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
        maxLength:100
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 17
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 17
    }
    
}, {timestamps: true})

module.exports=mongoose.model('Expense',ExpenseSchema)