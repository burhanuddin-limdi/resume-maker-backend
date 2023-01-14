const PDFDocument = require("pdfkit");

function buildResume(resumeData, dataCallBack, endCallBack) {
  console.log(resumeData);
  const doc = new PDFDocument({
    size: "A4", //595.28 X 841.89
  });

  const pageWidth = 595.28; //css = 346.35
  const pageHeight = 841.89; // css = 489.75
  const fontPath = "./assets/fonts/poppins/";
  const imagePath = "./assets/images/";

  doc.on("data", dataCallBack);
  doc.on("end", endCallBack);

  doc
    .rect(0, 0, (2 / 3) * pageWidth, pageHeight)
    .fill(resumeData.colors.value.primColor);

  doc
    .fontSize(34)
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("black")
    .text(resumeData.basicDetails.value.firstName, 34, 34)
    .text(resumeData.basicDetails.value.lastName)
    .fontSize(18)
    .font(fontPath + "Poppins-Medium.ttf")
    .text(resumeData.basicDetails.value.jobTitle);

  const topDist = doc.y;

  if (resumeData.experiences.value.experiences.length > 1) {
    doc.image(imagePath + "Experience.png", 7, topDist + 40, {
      width: 17,
    });
  }

  doc.text("", 34, topDist + 35);
  resumeData.experiences.value.experiences.forEach((experience) => {
    if (experience.post.length) {
      doc
        .fontSize(14)
        .text(experience.post)
        .text(experience.company)
        .fontSize(11)
        .text(experience.startDate + " - " + experience.endDate)
        .fontSize(9)
        .text(experience.summary, { width: pageWidth / 2 });

      doc
        .fillColor(resumeData.colors.value.primColor)
        .text("line gap")
        .fillColor("#000000");
    }
  });

  const topDist2 = doc.y;
  if (resumeData.projects.value.projects.length > 1) {
    doc.image(imagePath + "Projects.png", 7, topDist2 + 27, {
      width: 17,
    });
  }

  doc.text("", 34, topDist2 + 22);
  resumeData.projects.value.projects.forEach((project) => {
    if (project.name.length) {
      doc
        .fontSize(14)
        .text(project.name)
        .fontSize(9)
        .text(project.about, { width: pageWidth / 2 });
      doc
        .fillColor(resumeData.colors.value.primColor)
        .text("line gap")
        .fillColor("#000000");
    }
  });

  doc
    .rect((2 / 3) * pageWidth, 0, (1 / 3) * pageWidth, pageHeight)
    .fill(resumeData.colors.value.secColor);
  if (resumeData.contactDetails.value.email.length) {
    doc.image(imagePath + "Contact.png", (2 / 3) * pageWidth + 7, 38, {
      width: 10,
    });
  }

  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11);
  if (resumeData.contactDetails.value.email) {
    doc.text("Email", (2 / 3) * pageWidth + 34, 34);
    doc
      .font(fontPath + "Poppins-Medium.ttf")
      .fontSize(10)
      .text(resumeData.contactDetails.value.email, {
        width: (1 / 3) * pageWidth - 70,
      });
    doc
      .fillColor(resumeData.colors.value.secColor)
      .text("line gap")
      .fillColor("#000000");
  }

  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11);
  if (resumeData.contactDetails.value.nationality.length) {
    doc.text("Nationality");

    doc
      .font(fontPath + "Poppins-Medium.ttf")
      .fontSize(10)
      .text(resumeData.contactDetails.value.nationality, {
        width: (1 / 3) * pageWidth - 70,
      });
    doc
      .fillColor(resumeData.colors.value.secColor)
      .text("line gap")
      .fillColor("#000000");
  }

  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11);
  if (resumeData.contactDetails.value.phone.length) {
    doc.text("Phone Number");
    doc
      .font(fontPath + "Poppins-Medium.ttf")
      .fontSize(10)
      .text(resumeData.contactDetails.value.phone, {
        width: (1 / 3) * pageWidth - 70,
      });
    doc
      .fillColor(resumeData.colors.value.secColor)
      .fontSize(20)
      .text("line gap")
      .fillColor("#000000");
  }

  const topDist3 = doc.y;

  if (resumeData.educationDetails.value.educationList.length > 1) {
    doc.image(imagePath + "Education.png", (2 / 3) * pageWidth + 7, topDist3, {
      width: 10,
    });
  }

  doc
    .fillColor(resumeData.colors.value.secColor)
    .text("line gap", (2 / 3) * pageWidth + 34, topDist3 - 35)
    .fillColor("#000000");
  resumeData.educationDetails.value.educationList.forEach((education) => {
    if (education.degree.length) {
      doc
        .font(fontPath + "Poppins-SemiBold.ttf")
        .fontSize(11)
        .text(education.degree)
        .font(fontPath + "Poppins-Medium.ttf")
        .text(education.college)
        .text(education.marks)
        .text(education.location)
        .text(education.year);
      doc
        .fillColor(resumeData.colors.value.secColor)
        .text("line gap")
        .fillColor("#000000");
    }
  });

  doc
    .fillColor(resumeData.colors.value.secColor)
    .fontSize(20)
    .text("line gap")
    .fillColor("#000000");
  const topDist4 = doc.y;
  if (resumeData.skills.value.skills.length > 1) {
    doc.image(imagePath + "Skills.png", (2 / 3) * pageWidth + 7, topDist4, {
      width: 10,
    });
  }

  doc
    .fillColor(resumeData.colors.value.secColor)
    .text("line gap", (2 / 3) * pageWidth + 34, topDist4 - 35)
    .fillColor("#000000");
  doc.font(fontPath + "Poppins-Medium.ttf").fontSize(11);
  resumeData.skills.value.skills.forEach((skill) => {
    doc.text(skill);
  });

  doc
    .fillColor(resumeData.colors.value.secColor)
    .fontSize(20)
    .text("line gap")
    .fillColor("#000000");
  const topDist5 = doc.y;
  if (resumeData.socialLinks.value.social.length > 1) {
    doc.image(imagePath + "Socials.png", (2 / 3) * pageWidth + 7, topDist5, {
      width: 10,
    });
  }

  doc
    .fillColor(resumeData.colors.value.secColor)
    .text("line gap", (2 / 3) * pageWidth + 34, topDist5 - 35)
    .fillColor("#000000");
  doc.font(fontPath + "Poppins-Medium.ttf").fontSize(11);
  resumeData.socialLinks.value.social.forEach((social) => {
    doc.text(social);
  });

  doc.end();
}

module.exports = { buildResume };
