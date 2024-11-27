import { model, Schema } from 'mongoose';

 const pharmaciesSchema = new Schema(
   {
     name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
       type: String,
       required: true,
     },
     phone: {
       type: String,
       required: true,
     },
     rating: {
       type: Number,
       required: true,
     },
   },
 );

 export const PharmaciesCollection = model('pharmacies', pharmaciesSchema);
