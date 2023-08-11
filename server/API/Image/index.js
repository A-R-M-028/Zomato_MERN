import express from "express";
import multer from "multer"; // Handle uploads
import { s3Upload } from "../../utilities/AWS/s3";
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage(); // To ram of the server
const upload = multer({ storage }); // To ram to AWS

/*
Route          /
Desc            Uploading given image to S3 bucket, then saving the file to MongoDB
Params          None
Access          Public
Method          POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // S3 bucket options
    const bucketOptions = {
      Bucket: "zomatodt",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    // const uploadImage = 
    await s3Upload(bucketOptions);

    // You can save `uploadImage` to MongoDB or perform other necessary tasks here

    return res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
