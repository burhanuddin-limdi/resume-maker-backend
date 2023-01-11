const { fontSize } = require("pdfkit");
const PDFDocument = require("pdfkit");

function buildResume(resumeData, dataCallBack, endCallBack) {
  const doc = new PDFDocument({
    size: "A4", //595.28 X 841.89
  });

  const pageWidth = 595.28; //css = 346.35
  const pageHeight = 841.89; // css = 489.75
  const fontPath = "./assets/fonts/poppins/";
  const imagePath = "./assets/images/";

  doc.on("data", dataCallBack);
  doc.on("end", endCallBack);

  doc.rect(0, 0, (2 / 3) * pageWidth, pageHeight).fill("#E8F9FD");

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

  doc.image(imagePath + "Experience.png", 7, topDist + 40, {
    width: 17,
  });
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

      doc.fillColor("#E8F9FD").text("line gap").fillColor("#000000");
    }
  });
  // console.log("height of string", doc.heightOfString("line gap"));
  // doc
  //   .fontSize(14)
  //   .text("Frontend Developer")
  //   .text("Thinkgroupy Services Pvt. Ltd.")
  //   .fontSize(11)
  //   .text("22 Aug - 14 Nov")
  //   .fontSize(9)
  //   .text(
  //     "I worked as a Frontend Developer. I developed their website by myself usign Angular framework.",
  //     { width: pageWidth / 2 }
  //   );

  // doc.fillColor("#E8F9FD").text("line gap").fillColor("#000000");

  // doc
  //   .fontSize(14)
  //   .text("Frontend Developer")
  //   .text("Thinkgroupy Services Pvt. Ltd.")
  //   .fontSize(11)
  //   .text("22 Aug - 14 Nov")
  //   .fontSize(9)
  //   .text(
  //     "I worked as a Frontend Developer. I developed their website by myself usign Angular framework.",
  //     { width: pageWidth / 2 }
  //   );

  const topDist2 = doc.y;
  doc.image(imagePath + "Projects.png", 7, topDist2 + 27, {
    width: 17,
  });
  doc.text("", 34, topDist2 + 22);
  resumeData.projects.value.projects.forEach((project) => {
    if (project.name.length) {
      doc
        .fontSize(14)
        .text(project.name)
        .fontSize(9)
        .text(project.about, { width: pageWidth / 2 });
      doc.fillColor("#E8F9FD").text("line gap").fillColor("#000000");
    }
  });
  // doc
  //   .fontSize(14)
  //   .text("Limflix - Netflix Clone")
  //   .fontSize(9)
  //   .text(
  //     "I have made this website using angular framework and TMDB api. It is hosted at limflix.netlify.app",
  //     { width: pageWidth / 2 }
  //   );
  // doc.fillColor("#E8F9FD").text("line gap").fillColor("#000000");
  // doc
  //   .fontSize(14)
  //   .text("Limflix - Netflix Clone")
  //   .fontSize(9)
  //   .text(
  //     "I have made this website using angular framework and TMDB api. It is hosted at limflix.netlify.app",
  //     { width: pageWidth / 2 }
  //   );
  doc
    .rect((2 / 3) * pageWidth, 0, (1 / 3) * pageWidth, pageHeight)
    .fill("#59CE8F");

  doc.image(imagePath + "Contact.png", (2 / 3) * pageWidth + 7, 38, {
    width: 10,
  });
  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11)
    .text("Email", (2 / 3) * pageWidth + 34, 34)
    .font(fontPath + "Poppins-Medium.ttf")
    .fontSize(10)
    .text(resumeData.contactDetails.value.email, {
      width: (1 / 3) * pageWidth - 70,
    });
  doc.fillColor("#59CE8F").text("line gap").fillColor("#000000");
  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11)
    .text("Nationality")
    .font(fontPath + "Poppins-Medium.ttf")
    .fontSize(10)
    .text("India", {
      width: (1 / 3) * pageWidth - 70,
    });
  doc.fillColor("#59CE8F").text("line gap").fillColor("#000000");
  doc
    .font(fontPath + "Poppins-SemiBold.ttf")
    .fillColor("#000000")
    .fontSize(11)
    .text("Phone Number")
    .font(fontPath + "Poppins-Medium.ttf")
    .fontSize(10)
    .text(resumeData.contactDetails.value.phone, {
      width: (1 / 3) * pageWidth - 70,
    });
  doc.fillColor("#59CE8F").fontSize(20).text("line gap").fillColor("#000000");
  const topDist3 = doc.y;
  doc.image(imagePath + "Education.png", (2 / 3) * pageWidth + 7, topDist3, {
    width: 10,
  });
  doc
    .fillColor("#59CE8F")
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
      doc.fillColor("#59CE8F").text("line gap").fillColor("#000000");
    }
  });
  // doc
  //   .font(fontPath + "Poppins-SemiBold.ttf")
  //   .fontSize(11)
  //   .text(
  //     "Bachelors in Computer Application",
  //     (2 / 3) * pageWidth + 34,
  //     topDist3 - 5
  //   )
  //   .font(fontPath + "Poppins-Medium.ttf")
  //   .text("Leo College")
  //   .text("87%")
  //   .text("Banswara")
  //   .text(2024);
  // doc.fillColor("#59CE8F").text("line gap").fillColor("#000000");
  // doc
  //   .font(fontPath + "Poppins-SemiBold.ttf")
  //   .fontSize(11)
  //   .text("Bachelors in Computer Application")
  //   .font(fontPath + "Poppins-Medium.ttf")
  //   .text("Leo College")
  //   .text("87%")
  //   .text("Banswara")
  //   .text(2024);
  doc.fillColor("#59CE8F").fontSize(20).text("line gap").fillColor("#000000");
  const topDist4 = doc.y;
  doc.image(imagePath + "Skills.png", (2 / 3) * pageWidth + 7, topDist4, {
    width: 10,
  });
  doc
    .fillColor("#59CE8F")
    .text("line gap", (2 / 3) * pageWidth + 34, topDist4 - 35)
    .fillColor("#000000");
  doc.font(fontPath + "Poppins-Medium.ttf").fontSize(11);
  resumeData.skills.value.skills.forEach((skill) => {
    doc.text(skill);
  });
  // .text("HTML")
  // .text("HTML")
  // .text("HTML")
  // .text("HTML")
  // .text("HTML");
  doc.fillColor("#59CE8F").fontSize(20).text("line gap").fillColor("#000000");
  const topDist5 = doc.y;
  doc.image(imagePath + "Socials.png", (2 / 3) * pageWidth + 7, topDist5, {
    width: 10,
  });
  doc
    .fillColor("#59CE8F")
    .text("line gap", (2 / 3) * pageWidth + 34, topDist5 - 35)
    .fillColor("#000000");
  doc.font(fontPath + "Poppins-Medium.ttf").fontSize(11);
  resumeData.socialLinks.value.social.forEach((social) => {
    doc.text(social);
  });
  // .text("LinkedIn", (2 / 3) * pageWidth + 34, topDist5 - 5)
  // .text("Github");

  doc.end();
}

module.exports = { buildResume };
