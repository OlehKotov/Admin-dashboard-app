import { NearestCollection } from "../db/models/nearest.js";



export const getNearest = async () => {
    const nearest = await NearestCollection.find();
    return nearest;
  };
