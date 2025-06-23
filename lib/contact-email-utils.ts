// lib/contact-email-utils.ts
import nodemailer from 'nodemailer'

// Email configuration
function createEmailTransporter(): nodemailer.Transporter {
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

  throw new Error('Email configuration missing')
}

// Method label helper
function getMethodLabel(method: string): string {
  const labels = {
    'general-inquiry': 'General Inquiry',
    'project-quote': 'Project Quote Request',
    'support': 'Support Request',
    'partnership': 'Partnership Inquiry'
  }
  return labels[method as keyof typeof labels] || 'Contact Form Submission'
}

// Company notification email
export async function sendCompanyNotification(savedMessage: any): Promise<boolean> {
  try {
    const transporter = createEmailTransporter()
    const methodLabel = getMethodLabel(savedMessage.method)
    const priorityColor = savedMessage.formData.priority === 'urgent' ? '#dc2626' : 
                         savedMessage.formData.priority === 'high' ? '#f59e0b' : '#10b981'

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
            .content { padding: 30px; background: #ffffff; }
            .contact-details { background: #f9f9f9; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #E53E3E; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e5e5; }
            .detail-label { font-weight: 600; color: #1A1A1A; min-width: 120px; }
            .detail-value { color: #1A1A1A; font-weight: 500; flex: 1; margin-left: 10px; }
            .message-content { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E53E3E; }
            .priority { background: ${priorityColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
            .actions { text-align: center; margin: 30px 0; }
            .button { display: inline-block; background: #E53E3E; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; margin: 8px; font-weight: 600; font-size: 14px; }
            .button:hover { background: #d53030; }
            .footer { text-align: center; padding: 25px; color: #666; font-size: 14px; background: #f7f7f7; }
            .reference { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
            .reference strong { color: #1A1A1A; font-size: 16px; }
        </style>
    </head>
    <body>
        <!-- Simple dark background that Gmail mobile can't override -->
        <div style="background-color: #E53E3E; padding: 40px 30px; text-align: center;">
            <h1 style="color: white; font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; margin: 0 0 15px 0; line-height: 1.2;">
                🔔 New ${methodLabel}
            </h1>
            <p style="color: white; font-family: Arial, sans-serif; font-size: 18px; margin: 0; line-height: 1.4;">
                Unlimited Creative Agency Website Contact Form
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1A1A1A; font-size: 16px;">Unlimited Creative Agency</strong></p>
            <p style="margin: 0 0 10px 0; color: #E53E3E; font-weight: 600;">Transforming ideas into extraordinary digital experiences</p>
            <p style="margin: 0 0 10px 0;">📞 +20 106 023 3872 | 📧 Unlimitedadvv@gmail.com</p>
            <p style="margin: 0; font-size: 12px;">Available Monday-Friday, 9 AM - 6 PM EST</p>
        </div>
        
        <div class="content">
            <div class="contact-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">👤 Contact Information</h3>
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${savedMessage.formData.firstName} ${savedMessage.formData.lastName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value"><a href="mailto:${savedMessage.formData.email}">${savedMessage.formData.email}</a></span>
                </div>
                ${savedMessage.formData.phone ? `
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value"><a href="tel:${savedMessage.formData.phone}">${savedMessage.formData.phone}</a></span>
                </div>
                ` : ''}
                ${savedMessage.formData.company ? `
                <div class="detail-row">
                    <span class="detail-label">Company:</span>
                    <span class="detail-value">${savedMessage.formData.company}</span>
                </div>
                ` : ''}
                <div class="detail-row">
                    <span class="detail-label">Inquiry Type:</span>
                    <span class="detail-value">${methodLabel}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value"><span class="priority">${savedMessage.formData.priority}</span></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Reference ID:</span>
                    <span class="detail-value">${savedMessage.referenceId}</span>
                </div>
            </div>

            ${savedMessage.formData.projectType || savedMessage.formData.budget || savedMessage.formData.timeline ? `
            <div class="contact-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📋 Project Details</h3>
                ${savedMessage.formData.projectType ? `
                <div class="detail-row">
                    <span class="detail-label">Project Type:</span>
                    <span class="detail-value">${savedMessage.formData.projectType}</span>
                </div>
                ` : ''}
                ${savedMessage.formData.budget ? `
                <div class="detail-row">
                    <span class="detail-label">Budget:</span>
                    <span class="detail-value">${savedMessage.formData.budget}</span>
                </div>
                ` : ''}
                ${savedMessage.formData.timeline ? `
                <div class="detail-row">
                    <span class="detail-label">Timeline:</span>
                    <span class="detail-value">${savedMessage.formData.timeline}</span>
                </div>
                ` : ''}
                ${savedMessage.formData.hearAboutUs ? `
                <div class="detail-row">
                    <span class="detail-label">How they heard about us:</span>
                    <span class="detail-value">${savedMessage.formData.hearAboutUs}</span>
                </div>
                ` : ''}
            </div>
            ` : ''}
            
            <div class="message-content">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">💬 Message</h3>
                <p style="margin: 0; white-space: pre-wrap; font-style: italic; color: #555; background: white; padding: 15px; border-radius: 6px; line-height: 1.6;">"${savedMessage.formData.message}"</p>
            </div>

            <div class="actions">
                <a href="mailto:${savedMessage.formData.email}?subject=Re: ${methodLabel} - ${savedMessage.referenceId}" class="button">📧 Reply to Customer</a>
                ${savedMessage.formData.phone ? `<a href="tel:${savedMessage.formData.phone}" class="button">📞 Call Customer</a>` : ''}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;"><strong>⏰ Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p style="margin: 0; color: #666; font-size: 14px;">Newsletter Subscription: ${savedMessage.formData.newsletter ? '✅ Yes' : '❌ No'}</p>
            </div>
        </div>
    </body>
    </html>
    `

    const text = `
🔔 NEW ${methodLabel.toUpperCase()} - UNLIMITED CREATIVE AGENCY

👤 CONTACT INFORMATION:
Name: ${savedMessage.formData.firstName} ${savedMessage.formData.lastName}
Email: ${savedMessage.formData.email}
${savedMessage.formData.phone ? `Phone: ${savedMessage.formData.phone}` : ''}
${savedMessage.formData.company ? `Company: ${savedMessage.formData.company}` : ''}

📋 INQUIRY DETAILS:
Type: ${methodLabel}
Priority: ${savedMessage.formData.priority.toUpperCase()}
Reference: ${savedMessage.referenceId}

${savedMessage.formData.projectType ? `Project Type: ${savedMessage.formData.projectType}` : ''}
${savedMessage.formData.budget ? `Budget: ${savedMessage.formData.budget}` : ''}
${savedMessage.formData.timeline ? `Timeline: ${savedMessage.formData.timeline}` : ''}

💬 MESSAGE:
${savedMessage.formData.message}

⏰ Submitted: ${new Date().toLocaleString()}
Newsletter: ${savedMessage.formData.newsletter ? 'Yes' : 'No'}

Reply directly to this email to respond to the customer.
    `

    const mailOptions = {
      from: {
        name: 'Unlimited Website Contact Form',
        address: process.env.EMAIL_USER!
      },
      to: 'Unlimitedadvv@gmail.com',
      subject: `🔔 New ${methodLabel} - ${savedMessage.formData.firstName} ${savedMessage.formData.lastName}`,
      html,
      text,
      replyTo: savedMessage.formData.email
    }

    await transporter.sendMail(mailOptions)
    return true
    
  } catch (error) {
    return false
  }
}

// User confirmation email
export async function sendUserConfirmation(savedMessage: any): Promise<boolean> {
  try {
    const transporter = createEmailTransporter()
    const methodLabel = getMethodLabel(savedMessage.method)

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received - Thank You!</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
            .content { padding: 30px; background: #ffffff; }
            .confirmation-details { background: #f9f9f9; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #E53E3E; }
            .next-steps { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid #0ea5e9; }
            .footer { text-align: center; padding: 25px; color: #666; font-size: 14px; background: #f7f7f7; }
            .reference { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
            .reference strong { color: #1A1A1A; font-size: 16px; }
        </style>
    </head>
    <body>
        <!-- Simple dark background that Gmail mobile can't override -->
        <div style="background-color: #E53E3E; padding: 40px 30px; text-align: center;">
            <h1 style="color: white; font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; margin: 0 0 15px 0; line-height: 1.2;">
                ✅ Message Received!
            </h1>
            <p style="color: white; font-family: Arial, sans-serif; font-size: 18px; margin: 0; line-height: 1.4;">
                Thank you for contacting Unlimited Creative Agency
            </p>
        </div>
        
        <div class="content">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear <strong>${savedMessage.formData.firstName} ${savedMessage.formData.lastName}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 25px; line-height: 1.6;">Thank you for reaching out to us through our ${methodLabel.toLowerCase()}. We've received your message and our team will review it promptly.</p>
            
            <div class="reference">
                <strong>📋 Reference ID: ${savedMessage.referenceId}</strong><br>
                <small style="color: #666; margin-top: 5px; display: block;">Save this reference number for your records</small>
            </div>
            
            <div class="confirmation-details">
                <h3 style="margin: 0 0 15px 0; color: #1A1A1A; font-size: 18px;">📧 What You Submitted</h3>
                <p style="margin: 0 0 10px 0;"><strong>Inquiry Type:</strong> ${methodLabel}</p>
                <p style="margin: 0 0 10px 0;"><strong>Priority:</strong> ${savedMessage.formData.priority}</p>
                ${savedMessage.formData.company ? `<p style="margin: 0 0 10px 0;"><strong>Company:</strong> ${savedMessage.formData.company}</p>` : ''}
                ${savedMessage.formData.projectType ? `<p style="margin: 0 0 10px 0;"><strong>Project Type:</strong> ${savedMessage.formData.projectType}</p>` : ''}
                <p style="margin: 15px 0 0 0;"><strong>Your Message:</strong></p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #E53E3E; font-style: italic; margin-top: 10px;">
                    "${savedMessage.formData.message}"
                </div>
            </div>
            
            <div class="next-steps">
                <h3 style="margin: 0 0 15px 0; color: #0c4a6e; font-size: 18px;">🚀 What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #0c4a6e;">
                    <li style="margin-bottom: 8px;"><strong>Review:</strong> Our team is reviewing your ${methodLabel.toLowerCase()}</li>
                    <li style="margin-bottom: 8px;"><strong>Response:</strong> We'll get back to you within 24 hours</li>
                    <li style="margin-bottom: 8px;"><strong>Discussion:</strong> We'll discuss your project needs and goals</li>
                    <li><strong>Proposal:</strong> If applicable, we'll prepare a custom proposal</li>
                </ol>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; font-weight: 600; color: #1A1A1A;">Need immediate assistance?</p>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li style="margin-bottom: 5px;">📞 Call us: <a href="tel:+201060233872" style="color: #E53E3E; text-decoration: none; font-weight: 600;">+20 106 023 3872</a></li>
                    <li style="margin-bottom: 5px;">📧 Email us: <a href="mailto:Unlimitedadvv@gmail.com" style="color: #E53E3E; text-decoration: none; font-weight: 600;">Unlimitedadvv@gmail.com</a></li>
                    <li>💬 Reply to this email with your reference ID: <strong style="color: #1A1A1A;">${savedMessage.referenceId}</strong></li>
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
✅ MESSAGE RECEIVED - Unlimited Creative Agency

Dear ${savedMessage.formData.firstName} ${savedMessage.formData.lastName},

Thank you for contacting us through our ${methodLabel.toLowerCase()}. We've received your message and will review it promptly.

📋 Reference ID: ${savedMessage.referenceId}

📧 WHAT YOU SUBMITTED:
- Inquiry Type: ${methodLabel}
- Priority: ${savedMessage.formData.priority}
${savedMessage.formData.company ? `- Company: ${savedMessage.formData.company}` : ''}
${savedMessage.formData.projectType ? `- Project Type: ${savedMessage.formData.projectType}` : ''}

Your Message: "${savedMessage.formData.message}"

🚀 WHAT'S NEXT:
1. Our team is reviewing your ${methodLabel.toLowerCase()}
2. We'll get back to you within 24 hours
3. We'll discuss your project needs and goals
4. If applicable, we'll prepare a custom proposal

NEED HELP?
📞 +20 106 023 3872
📧 Unlimitedadvv@gmail.com
Reference: ${savedMessage.referenceId}

Unlimited Creative Agency
Available Monday-Friday, 9 AM - 6 PM EST
    `

    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || 'Unlimited Creative Agency',
        address: process.env.EMAIL_FROM_EMAIL || process.env.EMAIL_USER!
      },
      to: savedMessage.formData.email,
      subject: `✅ Message Received - We'll be in touch soon!`,
      html,
      text
    }

    await transporter.sendMail(mailOptions)
    return true
    
  } catch (error) {
    return false
  }
}