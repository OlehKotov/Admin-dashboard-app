import { NearestFarmaciesCollection } from "../db/models/nearest";



export const getNearestFarmacies = async () => {
    const nearestfarmacies = await NearestFarmaciesCollection.find();
    return nearestfarmacies;
  };
