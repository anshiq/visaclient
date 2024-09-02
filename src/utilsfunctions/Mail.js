import emailjs from "@emailjs/browser";
emailjs.init("SJfzVloG3tie5AzSU");
async function SendEmail({
  toEmail,
  subject,
  firstName,
  lastName,
  mobileNumber,
  service,
  city,
  travelledBefore,
}) {
  try {
    const result = await emailjs.send(
      "service_o0eupop",
      "template_wd7ycb6",
      {
        subject: subject,
        to_email: toEmail,
        firstName,
        lastName,
        mobileNumber,
        service,
        city,
        travelledBefore,
      },
      { publicKey: "SJfzVloG3tie5AzSU" }
    );
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // re-throw the error to be caught by the caller
  }
}

export { SendEmail };
