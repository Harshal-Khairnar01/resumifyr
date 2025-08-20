import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  template: {
    theme: String,
    colorPalette: String,
  },
  profileInfo: {
    profilePreviewUrl: String,
    fullName: String,
    designation: String,
    summary: String,
  },
  contactInfo: {
    email: String,
    phone: String,
    location: String,
    linkedin: String,
    github: String,
    website: String,
  },
  workExperience: [
    {
      company: String,
      role: String,
      startDate: String,
      endDate: String,
      location: String,
      description: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      fieldOfStudy: String,
      startDate: String,
      endDate: String,
    },
  ],
  skills: [
    {
      name: String,
      progress: String,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      github: String,
      liveDemo: String,
    },
  ],
  certifications: [
    {
      title: String,
      authority: String,
      year: String,
    },
  ],
  languages: [
    {
      name: String,
      progress: String,
    },
  ],
  interests: [String],
},
{
    timestamps:{createdAt:"createdAt", updatedAt:"updatedAt"}
});

export default mongoose.model("Resume", ResumeSchema);
