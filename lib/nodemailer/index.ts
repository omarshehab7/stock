import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from './template';


export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

export const sendWelcomeEmail = async ({ email, name, intro} : WelcomeEmailData) => {
const htmlTemplate = WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}', name)
    .replace('{{intro}}', intro);

const mailOptions = {
    from: `Stocker <stocker@shehab.eg>`,
    to: email,
    subject: 'Welcome to Our Stocker! - Your stock market companion',
    text: 'Welcome to Stocker! We are thrilled to have you on board.',
    html: htmlTemplate, 
};

}