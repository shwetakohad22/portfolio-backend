const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeMessage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectSchma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologiesUsed: {
    type: Array,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intro", introSchema),
  About: mongoose.model("about", aboutSchema),
  Skills: mongoose.model("skills", skillSchema),
  Experience: mongoose.model("experience", experienceSchema),
  Project: mongoose.model("project", projectSchma),
  Contact: mongoose.model("contact", contactSchema),
  Education: mongoose.model("education", educationSchema),
  Achievement: mongoose.model("achievement", achievementSchema),
};
