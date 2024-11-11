import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const sendEmail = async (to: string, subject: string, text: string, enableAttachments: boolean, filename?: string, content?: Buffer, contentType?: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Altere para seu provedor de e-mail
    auth: {
      user: process.env.EMAIL_USER, // Seu e-mail
      pass: process.env.EMAIL_PASS, // Sua senha do e-mail
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
        attachments: enableAttachments ?  [
            {
              filename,
              content,
              contentType,
            },
          ] : undefined
    
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({message: 'Email enviado com sucesso!', status: 200})
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar email.', status: 500 });
  }
};

export default sendEmail;
