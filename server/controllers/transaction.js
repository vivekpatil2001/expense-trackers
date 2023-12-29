import Transaction from "../models/Transaction.js"

const addTransaction = async (req, res) => {

    const { amount, type, category, description } = req.body;

    try {
        const transaction = new Transaction({
            amount,
            type,
            category,
            description
        })

        const savedTransaction = await transaction.save();

        return res.json({
            success: true,
            message: "data saved succesfully",
            data: savedTransaction
        });
    } catch (err) {
        return res.json({
            success: false,
            message: (err.message)
        })

    }
};

const getAllTransaction =  async(req, res)=>{
  
    try{
    const transactions = await Transaction.find();

    return res.json({
        success:true,
        message:"succesfully fetch all transaction",
        data:transactions
    })
}catch(err){
    return res.json({
      success:false,
      message:(err.message)
    })
}
}

export {addTransaction, getAllTransaction};

