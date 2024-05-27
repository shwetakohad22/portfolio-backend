const express = require("express");
const router = express.Router();
const {
  Intro,
  About,
  Skills,
  Project,
  Contact,
  Experience,
  Education,
  Achievement,
} = require("../models/portfolioModel");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");

// Get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intro = await Intro.find();
    const about = await About.find();
    const skills = await Skills.find();
    const project = await Project.find();
    const contact = await Contact.find();
    const education = await Education.find();
    const experience = await Experience.find();
    const achievement = await Achievement.find();

    res.status(200).send({
      intro: intro[0],
      about: about,
      contact: contact[0],
      skills: skills,
      project: project,
      experience: experience,
      education: education,
      achievement: achievement,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add education
router.post("/add-education", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(200).send({
      data: education,
      success: true,
      message: "Education added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update education
router.post("/update-education", async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: education,
      success: true,
      message: "Education updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete education
router.post("/delete-education", async (req, res) => {
  try {
    const education = await Education.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: education,
      success: true,
      message: "project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add about
router.post("/add-about", async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(200).send({
      data: about,
      success: true,
      message: "About added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "about updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete about
router.post("/delete-about", async (req, res) => {
  try {
    const about = await About.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "about deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add Skills
router.post("/add-skills", async (req, res) => {
  try {
    const skill = new Skills(req.body);
    await skill.save();
    res.status(200).send({
      data: skill,
      success: true,
      message: "Skill added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update skills
router.post("/update-skill", async (req, res) => {
  try {
    const skill = await Skills.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: skill,
      success: true,
      message: "skill updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete skill
router.post("/delete-skill", async (req, res) => {
  try {
    const skill = await Skills.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: skill,
      success: true,
      message: "skill deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add achievement
router.post("/add-achievement", async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    res.status(200).send({
      data: achievement,
      success: true,
      message: "achievement added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//update skills
router.post("/update-achievement", async (req, res) => {
  try {
    const achievement = await Achievement.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: achievement,
      success: true,
      message: "achievement updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete achievement
router.post("/delete-achievement", async (req, res) => {
  try {
    const achievement = await Achievement.findOneAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: achievement,
      success: true,
      message: "achievement deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login Successful",
      });
    } else {
      res.status(500).send({
        data: user,
        success: true,
        message: "Invalid username or password ",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/contact", (req, res) => {
  const data = req.body;
  if (!data.name || !data.phone || !data.email || !data.message) {
    return res.json({ msg: "Please fill all the fields!" });
  }

  const smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "shwetakohad22@gmail.com",
      pass: "skih pqog ozal akan",
    },
  });

  const mailOptions = {
    from: data.email,
    to: "shwetakohad22@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ msg: "Failed to send email. Please try again later." });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ msg: "Thank you for contacting us." });
  });
});

module.exports = router;
