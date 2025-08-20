import Resume from "../models/resume.model.js";

import fs from "fs";
import path from "path";

export const createResume = async (req, res) => {
  try {
    const { title } = req.body;
    const defaultResumeData = {
      profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "",
        designation: "",
        summary: "",
      },
      contactInfo: {
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        website: "",
      },
      workExperience: [
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
      education: [
        {
          degree: "",
          institution: "",
          startDate: "",
          endDate: "",
        },
      ],
      skills: [
        {
          name: "",
          progress: 0,
        },
      ],
      projects: [
        {
          title: "",
          description: "",
          github: "",
          liveDemo: "",
        },
      ],
      certifications: [
        {
          title: "",
          issuer: "",
          year: "",
        },
      ],
      languages: [
        {
          name: "",
          progress: "",
        },
      ],
      interests: [""],
    };

    const newResume = await Resume.create({
      userId: req.user.id,
      title,
      ...defaultResumeData,
      ...req.body,
    });

    res.status(201).json({ success: true, data: newResume });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id }).sort({
      updateddAt: -1,
    });
    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get Resumes",
      error: error.message,
    });
  }
};

export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findOne({ _id: id, userId: req.user.id });
    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found" });
    }
    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get Resume",
      error: error.message,
    });
  }
};

export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found" });
    }

    Object.assign(resume, req.body);
    const savedResume = await resume.save();
    res.status(200).json({ success: true, data: savedResume });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update Resume",
      error: error.message,
    });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found" });
    }

    const uploadsFolder = path.join(process.cwd(), "uploads");

    if (resume.thumbnail) {
      const oldThumbnail = path.join(
        uploadsFolder,
        path.basename(resume.thumbnail)
      );
      if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
    }

    if (resuem.profileInfo?.profilePreviewUrl) {
      const oldProfilePreview = path.join(
        uploadsFolder,
        path.basename(resume.profileInfo.profilePreviewUrl)
      );
      if (fs.existsSync(oldProfilePreview)) fs.unlinkSync(oldProfilePreview);
    }

    const deleted = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Resume not found or not authorized",
        });
    }
    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Resume",
      error: error.message,
    });
  }
};
