// lib/admin-email-utils.ts
import nodemailer from 'nodemailer'

// Email configuration (reuse from contact-email-utils)
function createEmailTransporter(): nodemailer.Transporter {
  if (process.env.EMAIL_SERVICE) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_APP_PASSWORD!
      }
    })
  }
  
  if (process.env.EMAIL_HOST) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!
      }
    })
  }

  throw new Error('Email configuration missing')
}

// Send admin reply to contact message
export async function sendAdminReply(originalMessage: any, replyMessage: string): Promise<boolean> {
  try {
    const transporter = createEmailTransporter()

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Response from Unlimited Creative Agency</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
            .content { padding: 30px; background: #ffffff; }
            .reply-content { background: #f9f9f9; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #E53E3E; }
            .original-message { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E53E3E; }
            .footer { text-align: center; padding: 25px; color: #666; font-size: 14px; background: #f7f7f7; }
            .reference { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
            .reference strong { color: #1A1A1A; font-size: 16px; }
        </style>
    </head>
    <body>
        <!-- Header -->
        <div style="background-color: #E53E3E; padding: 40px 30px; text-align: center;">
            <h1 style="color: white; font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; margin: 0 0 15px 0; line-height: 1.2;">
                💬 Response from Our Team
            </h1>
            <p style="color: white; font-family: Arial, sans-serif; font-size: 18px; margin: 0; line-height: 1.4;">
                Unlimited Creative Agency
            </p>
        </div>
        
        <div class="content">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear <strong>${originalMessage.formData.firstName} ${originalMessage.formData.lastName}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 25px; line-height: 1.6;">Thank you for reaching out to us. We've reviewed your message and have a response for you:</p>
            
            <div class="reference">
                <strong>📋 Reference ID: ${originalMessage.referenceId}</strong><br>
                <small style="color: #666; margin-top: 5px; display: block;">Original message reference</small>
            </div>
            
            <div class="reply-content">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📧 Our Response</h3>
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${replyMessage}</p>
            </div>
            
            <div class="original-message">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📝 Your Original Message</h3>
                <p style="margin: 0; font-style: italic; color: #555; line-height: 1.6;">"${originalMessage.formData.message}"</p>
                <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Submitted: ${new Date(originalMessage.submittedAt).toLocaleDateString()}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;">Need further assistance?</p>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li style="margin-bottom: 5px;">📞 Call us: <a href="tel:+201060233872" style="color: #E53E3E; text-decoration: none; font-weight: 600;">+20 106 023 3872</a></li>
                    <li style="margin-bottom: 5px;">📧 Email us: <a href="mailto:Unlimitedadvv@gmail.com" style="color: #E53E3E; text-decoration: none; font-weight: 600;">Unlimitedadvv@gmail.com</a></li>
                    <li>💬 Reply to this email with your reference ID: <strong style="color: #1A1A1A;">${originalMessage.referenceId}</strong></li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1A1A1A; font-size: 16px;">Unlimited Creative Agency</strong></p>
            <p style="margin: 0 0 10px 0; color: #E53E3E; font-weight: 600;">Transforming ideas into extraordinary digital experiences</p>
            <p style="margin: 0 0 10px 0;">📞 +20 106 023 3872 | 📧 Unlimitedadvv@gmail.com</p>
            <p style="margin: 0; font-size: 12px;">Available Monday-Friday, 9 AM - 6 PM EST</p>
        </div>
    </body>
    </html>
    `

    const text = `
RESPONSE FROM UNLIMITED CREATIVE AGENCY

Dear ${originalMessage.formData.firstName} ${originalMessage.formData.lastName},

Thank you for reaching out to us. We've reviewed your message and have a response for you:

📋 Reference ID: ${originalMessage.referenceId}

📧 OUR RESPONSE:
${replyMessage}

📝 YOUR ORIGINAL MESSAGE:
"${originalMessage.formData.message}"
Submitted: ${new Date(originalMessage.submittedAt).toLocaleDateString()}

NEED FURTHER ASSISTANCE?
📞 +20 106 023 3872
📧 Unlimitedadvv@gmail.com
Reference: ${originalMessage.referenceId}

Unlimited Creative Agency
Available Monday-Friday, 9 AM - 6 PM EST
    `

    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || 'Unlimited Creative Agency',
        address: process.env.EMAIL_FROM_EMAIL || process.env.EMAIL_USER!
      },
      to: originalMessage.formData.email,
      subject: `Re: ${originalMessage.method.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())} - ${originalMessage.referenceId}`,
      html,
      text
    }

    await transporter.sendMail(mailOptions)
    return true
    
  } catch (error) {
    return false
  }
}

// Send meeting approval email with meeting URL
export async function sendMeetingApproval(bookingData: any): Promise<boolean> {
  try {
    const transporter = createEmailTransporter()

    const formatDate = (dateString: string): string => {
      try {
        return new Date(dateString).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      } catch {
        return dateString
      }
    }

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meeting Approved - Join Your Call</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
            .content { padding: 30px; background: #ffffff; }
            .meeting-details { background: #f9f9f9; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #E53E3E; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e5e5; }
            .detail-label { font-weight: 600; color: #1A1A1A; }
            .detail-value { color: #1A1A1A; font-weight: 500; }
            .meeting-link { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center; }
            .footer { text-align: center; padding: 25px; color: #666; font-size: 14px; background: #f7f7f7; }
            .button { display: inline-block; background: #E53E3E; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; margin: 8px; font-weight: 600; font-size: 14px; }
            .join-button { display: inline-block; background: white; color: #10b981; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; border: 2px solid white; }
            .reference { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
            .reference strong { color: #1A1A1A; font-size: 16px; }
        </style>
    </head>
    <body>
        <!-- Header -->
        <div style="background-color: #E53E3E; padding: 40px 30px; text-align: center;">
            <h1 style="color: white; font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; margin: 0 0 15px 0; line-height: 1.2;">
                ✅ Meeting Approved!
            </h1>
            <p style="color: white; font-family: Arial, sans-serif; font-size: 18px; margin: 0; line-height: 1.4;">
                Your ${bookingData.callInfo.title} is confirmed
            </p>
        </div>
        
        <div class="content">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear <strong>${bookingData.firstName} ${bookingData.lastName}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 25px; line-height: 1.6;">Great news! Your meeting request has been approved. We're excited to connect with you and discuss your project.</p>
            
            <div class="reference">
                <strong>📋 Reference ID: ${bookingData.referenceId}</strong><br>
                <small style="color: #666; margin-top: 5px; display: block;">Save this reference number for your records</small>
            </div>
            
            <div class="meeting-link">
                <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px;">🎥 Join Your Meeting</h3>
                <p style="margin: 0 0 20px 0; color: white; opacity: 0.9;">Click the button below to join your scheduled call:</p>
                <a href="${bookingData.meetingUrl}" class="join-button">Join Meeting Now</a>
                <p style="margin: 15px 0 0 0; color: white; font-size: 12px; opacity: 0.8;">Meeting Link: ${bookingData.meetingUrl}</p>
            </div>
            
            <div class="meeting-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📅 Meeting Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Meeting Type:</span>
                    <span class="detail-value">${bookingData.callInfo.title}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${bookingData.callInfo.duration}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span class="detail-value">${formatDate(bookingData.preferredDate)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span class="detail-value">${bookingData.preferredTime} ${bookingData.timeZone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Meeting Link:</span>
                    <span class="detail-value"><a href="${bookingData.meetingUrl}" style="color: #E53E3E; text-decoration: none;">Join Meeting</a></span>
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;">📝 Meeting Preparation:</p>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li style="margin-bottom: 5px;">Test your camera and microphone beforehand</li>
                    <li style="margin-bottom: 5px;">Prepare any questions or materials you'd like to discuss</li>
                    <li style="margin-bottom: 5px;">Join the meeting 2-3 minutes early</li>
                    <li>Have your project details and goals ready to share</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="${bookingData.meetingUrl}" class="button">🎥 Join Meeting</a>
                <a href="tel:+201060233872" class="button">📞 Call Us</a>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;">Need to reschedule or have questions?</p>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li style="margin-bottom: 5px;">📞 Call us: <a href="tel:+201060233872" style="color: #E53E3E; text-decoration: none; font-weight: 600;">+20 106 023 3872</a></li>
                    <li style="margin-bottom: 5px;">📧 Email us: <a href="mailto:Unlimitedadvv@gmail.com" style="color: #E53E3E; text-decoration: none; font-weight: 600;">Unlimitedadvv@gmail.com</a></li>
                    <li>💬 Reply to this email with your reference ID: <strong style="color: #1A1A1A;">${bookingData.referenceId}</strong></li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1A1A1A; font-size: 16px;">Unlimited Creative Agency</strong></p>
            <p style="margin: 0 0 10px 0; color: #E53E3E; font-weight: 600;">Transforming ideas into extraordinary digital experiences</p>
            <p style="margin: 0 0 10px 0;">📞 +20 106 023 3872 | 📧 Unlimitedadvv@gmail.com</p>
            <p style="margin: 0; font-size: 12px;">Available Monday-Friday, 9 AM - 6 PM EST</p>
        </div>
    </body>
    </html>
    `

    const text = `
✅ MEETING APPROVED - Unlimited Creative Agency

Dear ${bookingData.firstName} ${bookingData.lastName},

Your meeting request has been approved!

📋 Reference ID: ${bookingData.referenceId}

🎥 MEETING LINK: ${bookingData.meetingUrl}

📅 MEETING DETAILS:
- Type: ${bookingData.callInfo.title}
- Duration: ${bookingData.callInfo.duration}
- Date: ${formatDate(bookingData.preferredDate)}
- Time: ${bookingData.preferredTime} ${bookingData.timeZone}

📝 PREPARATION:
- Test your camera and microphone beforehand
- Prepare questions and materials
- Join 2-3 minutes early
- Have your project details ready

NEED HELP?
📞 +20 106 023 3872
📧 Unlimitedadvv@gmail.com
Reference: ${bookingData.referenceId}

Unlimited Creative Agency
Available Monday-Friday, 9 AM - 6 PM EST
    `

    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || 'Unlimited Creative Agency',
        address: process.env.EMAIL_FROM_EMAIL || process.env.EMAIL_USER!
      },
      to: bookingData.email,
      subject: `✅ Meeting Approved - ${bookingData.callInfo.title} - ${bookingData.referenceId}`,
      html,
      text
    }

    await transporter.sendMail(mailOptions)
    return true
    
  } catch (error) {
    return false
  }
}

// Email service class for admin functionality
class AdminEmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = this.createTransporter()
  }

  private createTransporter(): nodemailer.Transporter {
    if (process.env.EMAIL_SERVICE) {
      return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_APP_PASSWORD!
        }
      })
    }
    
    if (process.env.EMAIL_HOST) {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_PASS!
        }
      })
    }

    throw new Error('Email configuration missing')
  }

  async sendMeetingApproval(bookingData: any): Promise<boolean> {
    return await sendMeetingApproval(bookingData)
  }

  async sendAdminReply(originalMessage: any, replyMessage: string): Promise<boolean> {
    return await sendAdminReply(originalMessage, replyMessage)
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      return true
    } catch (error) {
      return false
    }
  }
}

export const adminEmailService = new AdminEmailService()
export default AdminEmailService