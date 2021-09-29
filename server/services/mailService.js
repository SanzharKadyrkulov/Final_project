const nodemailer = require("nodemailer");

const { SMTP_USER, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, API } = process.env;

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }

  async sendActivation(to, link) {
    await this.transporter.sendMail({
      from: SMTP_USER,
      to,
      subject: "Account activation on " + API,
      text: "",
      html: `
        <h1>Thanks for your registration!</h1>
        <a href="http://localhost:3000/login">${link}</a>
      `,
    });
  }
}

module.exports = new MailService();
