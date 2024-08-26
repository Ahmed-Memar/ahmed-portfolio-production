import { NextResponse } from 'next/server';
import { transport, mailOptions, EnglishMail } from '@/lib/nodeMailer';

export async function POST(request) {
  const { email, name, message, captchaToken } = await request.json();
  if(!name || !email || !message){
    return NextResponse.json({message: "Complete the form correctly"},{status: 422});
  }
  
  if(!captchaToken){
    return NextResponse.json({message: "Please complete the captcha correctly before submitting."},{status: 422});
  }
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    let captchaTokenValidation = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
      {
        headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      }}
    ); 
    captchaTokenValidation = await captchaTokenValidation.json();

    if (captchaTokenValidation.success) {
      try {
        await transport.sendMail(mailOptions({name, email, message}));
        await transport.sendMail(EnglishMail({name, email}));
        return NextResponse.json({message : "Your mail has been sent successfully."},{status: 200});
      } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "There was an issue sending your message. Please try again."}, { status: 500 });
      }
    }else{
      return NextResponse.json({ message: "Please complete the captcha correctly before submitting."}, { status: 422 });
    }
  } catch (error) {
    return NextResponse.json({ message: "There was an issue with the captcha verification. Please try again."}, { status: 500 });
  }
}