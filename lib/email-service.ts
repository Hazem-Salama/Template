// lib/email-service.ts
import nodemailer from 'nodemailer'
import { templateConfig } from './template-config'

interface BookingEmailData {
  firstName: string
  lastName: string
  email: string
  callType: string
  callInfo: {
    title: string
    duration: string
    subtitle: string
  }
  preferredDate: string
  preferredTime: string
  timeZone: string
  referenceId: string
  message: string
  company?: string
}

interface EmailContent {
  html: string
  text: string
}

class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = this.createTransporter()
  }

  private createTransporter(): nodemailer.Transporter {
    // Gmail/Outlook service-based configuration
    if (process.env.EMAIL_SERVICE) {
      return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_APP_PASSWORD!
        }
      })
    }
    
    // Custom SMTP configuration
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

    throw new Error('Email configuration missing. Please check your environment variables.')
  }

  async sendBookingConfirmation(bookingData: BookingEmailData): Promise<boolean> {
    try {
      const emailContent = this.generateConfirmationEmail(bookingData)
      const { company } = templateConfig

      const mailOptions: nodemailer.SendMailOptions = {
        from: {
          name: process.env.EMAIL_FROM_NAME || company.name,
          address: process.env.EMAIL_FROM_EMAIL || process.env.EMAIL_USER!
        },
        to: bookingData.email,
        subject: `✅ Your ${bookingData.callInfo.title} is Confirmed - Reference: ${bookingData.referenceId}`,
        html: emailContent.html,
        text: emailContent.text
      }

      await this.transporter.sendMail(mailOptions)
      return true
    } catch (error: unknown) {
      console.error('Error sending booking confirmation:', error)
      return false
    }
  }

  private generateConfirmationEmail(data: BookingEmailData): EmailContent {
    const { company, branding, business } = templateConfig
    
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
        <title>Booking Confirmation</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
            .content { padding: 30px; background: #ffffff; }
            .booking-details { background: #f9f9f9; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid ${branding.primaryColor}; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e5e5; }
            .detail-label { font-weight: 600; color: #1A1A1A; }
            .detail-value { color: #1A1A1A; font-weight: 500; }
            .next-steps { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid ${branding.accentColor}; }
            .footer { text-align: center; padding: 25px; color: #666; font-size: 14px; background: #f7f7f7; }
            .button { display: inline-block; background: ${branding.primaryColor}; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; margin: 8px; font-weight: 600; font-size: 14px; }
            .button:hover { opacity: 0.9; }
            .reference { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
            .reference strong { color: #1A1A1A; font-size: 16px; }
            .project-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${branding.primaryColor}; }
        </style>
    </head>
    <body>
        <!-- Header -->
        <div style="background-color: ${branding.primaryColor}; padding: 40px 30px; text-align: center;">
            <h1 style="color: white; font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; margin: 0 0 15px 0; line-height: 1.2;">
                🎉 Booking Confirmed!
            </h1>
            <p style="color: white; font-family: Arial, sans-serif; font-size: 18px; margin: 0; line-height: 1.4;">
                Your ${data.callInfo.title} with ${company.name}
            </p>
        </div>
        
        <div class="content">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear <strong>${data.firstName} ${data.lastName}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 25px; line-height: 1.6;">Great news! Your <strong>${data.callInfo.title.toLowerCase()}</strong> has been successfully scheduled. We're excited to discuss your project and help you achieve your goals.</p>
            
            <div class="reference">
                <strong>📋 Reference ID: ${data.referenceId}</strong><br>
                <small style="color: #666; margin-top: 5px; display: block;">Save this reference number for your records</small>
            </div>
            
            <div class="booking-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📅 Call Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Call Type:</span>
                    <span class="detail-value">${data.callInfo.title}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${data.callInfo.duration}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span class="detail-value">${formatDate(data.preferredDate)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span class="detail-value">${data.preferredTime} ${data.timeZone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${data.email}</span>
                </div>
                ${data.company ? `
                <div class="detail-row">
                    <span class="detail-label">Company:</span>
                    <span class="detail-value">${data.company}</span>
                </div>
                ` : ''}
            </div>
            
            <div class="next-steps">
                <h3 style="margin: 0 0 15px 0; color: #0c4a6e; font-size: 18px;">🚀 What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #0c4a6e;">
                    <li style="margin-bottom: 8px;"><strong>Calendar Invite:</strong> You'll receive a calendar invitation within the next 30 minutes</li>
                    <li style="margin-bottom: 8px;"><strong>Pre-Call Prep:</strong> We'll send you a brief questionnaire to maximize our time together</li>
                    <li style="margin-bottom: 8px;"><strong>The Call:</strong> Join us for your ${data.callInfo.duration} ${data.callInfo.title.toLowerCase()}</li>
                    <li><strong>Follow-up:</strong> Receive a detailed summary and recommendations within ${business.responseTime}</li>
                </ol>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://calendar.google.com" class="button">📅 Add to Calendar</a>
                <a href="tel:${company.phone}" class="button">📞 Call Us</a>
            </div>
            
            <div class="project-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📝 Your Project Details</h3>
                <p style="margin: 0; font-style: italic; color: #555; background: white; padding: 15px; border-radius: 6px; line-height: 1.6;">"${data.message}"</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;">Need to reschedule or have questions?</p>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li style="margin-bottom: 5px;">📞 Call us: <a href="tel:${company.phone}" style="color: ${branding.primaryColor}; text-decoration: none; font-weight: 600;">${company.phone}</a></li>
                    <li style="margin-bottom: 5px;">📧 Email us: <a href="mailto:${company.email}" style="color: ${branding.primaryColor}; text-decoration: none; font-weight: 600;">${company.email}</a></li>
                    <li>💬 Reply to this email with your reference ID: <strong style="color: #1A1A1A;">${data.referenceId}</strong></li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1A1A1A; font-size: 16px;">${company.name}</strong></p>
            <p style="margin: 0 0 10px 0; color: ${branding.primaryColor}; font-weight: 600;">${company.tagline}</p>
            <p style="margin: 0 0 10px 0;">📞 ${company.phone} | 📧 ${company.email}</p>
            <p style="margin: 0; font-size: 12px;">Available ${business.workingHours} ${business.timezone}</p>
        </div>
    </body>
    </html>
    `

    const text = `
🎉 BOOKING CONFIRMED - ${company.name}

Dear ${data.firstName} ${data.lastName},

Your ${data.callInfo.title} has been successfully scheduled!

📋 Reference ID: ${data.referenceId}

📅 CALL DETAILS:
- Type: ${data.callInfo.title}
- Duration: ${data.callInfo.duration}
- Date: ${formatDate(data.preferredDate)}
- Time: ${data.preferredTime} ${data.timeZone}
- Email: ${data.email}
${data.company ? `- Company: ${data.company}` : ''}

🚀 WHAT'S NEXT:
1. Calendar invite within 30 minutes
2. Pre-call questionnaire 
3. Your ${data.callInfo.duration} consultation
4. Follow-up summary within ${business.responseTime}

📝 YOUR PROJECT: "${data.message}"

NEED HELP?
📞 ${company.phone}
📧 ${company.email}
Reference: ${data.referenceId}

${company.name}
Available ${business.workingHours} ${business.timezone}
    `

    return { html, text }
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      return true
    } catch (error: unknown) {
      console.error('Email connection test failed:', error)
      return false
    }
  }
}

export const emailService = new EmailService()
export default EmailService