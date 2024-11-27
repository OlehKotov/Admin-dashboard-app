import { PharmaciesCollection } from "../db/models/pharmacies.js";



export const getPharmacies = async () => {
    const pharmacies = await PharmaciesCollection.find();
    return pharmacies;
  };
