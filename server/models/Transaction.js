import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['creadit', 'debit'],
        required: true
    },
    category: {
        type: String,
        enum: ['food', 'entertainment', 'rent', 'shopping', 'travel', 'education', 'salary', 'gift', 'freelancing', 'side-hussle', 'other'],
        required: true
    }, description: {
        type: String,

    }
}, {
    timestamps: true
});

const Transaction = model('Transaction', transactionSchema)
export default Transaction;

