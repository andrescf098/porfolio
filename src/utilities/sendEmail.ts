'use server';
import { Resend } from 'resend';
const resend = new Resend('re_HGQkgN2K_Ly3S7qAzGSp6QcJUoBma57fC');

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('email');
  const nameSender = formData.get('name');
  const email = {
    from: 'onboarding@resend.dev',
    to: 'andrescf@outlook.com',
    reply_to: senderEmail as string,
    subject: `Hi, I'm ${nameSender}`,
    html: `<p>${message}</p>`,
  };
  try {
    resend.emails.send(email);
  } catch (error) {
    console.error(error);
  }
};
