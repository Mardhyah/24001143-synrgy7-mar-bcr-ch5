import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "djlgdme26",
    api_key: "384935689798955",
    api_secret: "MydGRXOnBpF6jqxQK1Y5cGSeM7g", // Click 'View Credentials' below to copy your API secret
    secure: true
});

export default cloudinary;