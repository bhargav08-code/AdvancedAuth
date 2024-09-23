import { mailtrapClient, sender } from "./mailtrap.config";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email Sent SuccessFully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
