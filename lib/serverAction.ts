"use server";
// serverActions.ts
import {Resend} from "resend";
import {validateString,getErrorMessage} from './utils'
const resend = new Resend(process.env.RESEND_API_KEY);
import ContactFormEmail from '../emails/contactForm';
import React from "react";


export async function sendEmail(formData: FormData) {       
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    if(!validateString(senderEmail,500)) {
        return {
            error: 'Invalid Sender Email'
        }
    }
    if(!validateString(message,500)) {
        return {
            error: 'Invalid Message'
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'afaqibrar468@gmail.com',
            subject: 'Message from Contact Form',
            replyTo: senderEmail as string,
            react: React.createElement(ContactFormEmail,  {message:message as string, senderEmail:senderEmail as string})
        })
    } catch (error:unknown) {
        console.error(error);
        return {
            error: getErrorMessage(error)
        }
    }
    if(data?.error) {
        return {
            error: getErrorMessage(data.error)   
        }
    } else {
        return {data};
    }
   
}
