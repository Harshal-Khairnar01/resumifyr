import fs from "fs";
import path from "path";

import Resume from "../models/resume.model.js";
import upload from "../middlewares/uploadMiddleware.js";

export const uploadResumeImage = async (req, res) => {
  try {
    upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(
      req,
      res,
      async (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Failed to upload Resume image",
            error: err.message,
          });
        }
        const resumeId = req.params.id;
        const resume = await Resume.findOne({
          _id: resumeId,
          userId: req.user.id,
        });

        if (!resume) {
          return res.status(404).json({
            success: false,
            message: "Resume not found or Unauthorized",
          });
        }

        const uploadsFolder = path.join(process.cwd(), "uploads");
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        const newThumbnail = req.files.thumbnail?.[0];
        const newProfileImage = req.files.profileImage?.[0];

        if (newThumbnail) {
          if (resume.thumbnail) {
            const oldThumbnailPath = path.join(
              uploadsFolder,
              path.basename(resume.thumbnail)
            );
            if (fs.existsSync(oldThumbnailPath)) {
              fs.unlinkSync(oldThumbnailPath);
            }
          }
          resume.thumbnail = `${baseUrl}/uploads/${newThumbnail.filename}`;
        }

        if (newProfileImage) {
          if (resume.profileInfo?.profilePreviewUrl) {
            const oldProfileImagePath = path.join(
              uploadsFolder,
              path.basename(resume.profileInfo.profilePreviewUrl)
            );
            if (fs.existsSync(oldProfileImagePath)) {
              fs.unlinkSync(oldProfileImagePath);
            }
          }
          resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
        }

        await Resume.save();

        res.status(200).json({
          success: true,
          message: "Resume images uploaded successfully",
          data: {
            thumbnail: resume.thumbnail,
            profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
          },
        });
      }
    );
  } catch (error) {
    console.error('Error uploading resume images:', error);
    res.status(500).json({
      success: false,
      message: "Failed to upload Resume image",
      error: error.message,
    });
  }
};
