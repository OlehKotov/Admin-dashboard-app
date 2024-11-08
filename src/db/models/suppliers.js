import { model, Schema } from 'mongoose';

 const suppliersSchema = new Schema(
   {
    name: {
       type: String,
       required: true,
     },
     address: {
        type: String,
        required: true,
      },
      suppliers: {
        type: String,
        required: true,
      },
      date: {
       type: String,
       required: true,
     },
     amount: {
       type: String,
       required: true,
     },
     status: {
       type: String,
       enum: ['Active', 'Deactive'],
       required: true,
     },
   },
 );

 export const SuppliersCollection = model('suppliers', suppliersSchema);
