import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload File On Cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Delete from our server when File has been uploaded successfully
    fs.unlinkSync(localFilePath);
    
    // File has been uploaded successfully
    return response;
  } catch (error) {
    // Delete from our server when File not uploaded
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export {uploadOnCloudinary}
