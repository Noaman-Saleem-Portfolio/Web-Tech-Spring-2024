import { Package } from "../models/Packages.js";

//////////////////////////////
//// Create New Holiday Package
//////////////////////////////
export const newPackage = (req, res) => {
  res.json({
    msg: "New travel Package will be created in this controller",
  });
};

//////////////////////////////
//// Get All Holiday Packages
//////////////////////////////
export const getAllPackages = (req, res) => {
  res.json({
    msg: "All travel Packages will be fetched from DB in this API",
  });
};
