const ExpenseSchema=require('../Models/ExpenseModel')


exports.addExpense=async(req,res)=>{
    const {title, amount, category, description , date}=req.body;
    const expense=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: "All fields are required"});
        }
        if(amount<=0){
            return res.status(400).json({message: "Amount must be positive number"});
        }
        await expense.save()
        res.status(200).json({message: "Expense added"});
    }catch(err){
        res.status(500).json({message: "Server Error"});
    }
    console.log(expense);
}

exports.getExpenses=async(req,res)=>{
    try {
        const expenses=await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expenses)
    } catch (err) {
        res.status(500).json({message: "Server Error"});
    }
}

exports.deleteExpense=async(req,res)=>{
    const {id}=req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense)=>{
            res.status(200).json({message: "Expense deleted"});
        })
        .catch((err)=>{
            res.status(500).json({message: "Server Error"});
        })
}