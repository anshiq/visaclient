// import nodemailer from "nodemailer";
// const email = process.env.NODEMAILER_GEMAIL;
// const key = process.env.NODEMAILER_GKEY;
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass: key,
//   },
// });

async function SendEmail({ toEmail, subject, text }) {
    // try {
    //   const result = await transporter.sendMail({
    //     from: email,
    //     to: toEmail,
    //     subject: subject,
    //     text: text,
    //   });
    //   return result;
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   throw error; // re-throw the error to be caught by the caller
    // }
  }
  
  export { SendEmail };
