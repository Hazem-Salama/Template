# Agency Template Setup Guide

## 🚀 Quick Start

1. **Copy Environment File**
   ```bash
   cp .env.example .env.local
   ```

2. **Update Company Information**
   Edit `.env.local` with your agency details

3. **Set Up Database & Email**
   Follow the detailed instructions below

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📧 Email Configuration

### Option 1: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update `.env.local`**:
   ```env
   EMAIL_SERVICE="gmail"
   EMAIL_USER="your-email@gmail.com"
   EMAIL_APP_PASSWORD="your-16-character-app-password"
   ```

### Option 2: Custom SMTP

```env
EMAIL_HOST="smtp.yourdomain.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@yourdomain.com"
EMAIL_PASS="your-password"
```

## 🗄️ Database Setup

### Option 1: MongoDB Atlas (Cloud)

1. **Create Account** at [MongoDB Atlas](https://cloud.mongodb.com)
2. **Create Cluster** (free tier available)
3. **Get Connection String**:
   - Database → Connect → Connect your application
   - Copy connection string
4. **Update `.env.local`**:
   ```env
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net"
   ```

### Option 2: Local MongoDB

1. **Install MongoDB** locally
2. **Start MongoDB service**
3. **Update `.env.local`**:
   ```env
   MONGODB_URI="mongodb://localhost:27017"
   ```

## 🎨 Customization

### Company Branding

Update these values in `.env.local`:
```env
COMPANY_NAME="Your Agency Name"
COMPANY_EMAIL="hello@youragency.com"
COMPANY_PHONE="+1-XXX-XXX-XXXX"
BRAND_PRIMARY_COLOR="#3B82F6"
```

### Services Configuration

Edit `lib/template-config.ts` to customize:
- Service offerings
- Call types for booking system
- Contact form methods

### Email Templates

Customize email templates in:
- `lib/contact-email-utils.ts` - Contact form emails
- `lib/email-service.ts` - Booking confirmation emails

## 🧪 Testing

### Test Email Functionality
```bash
# Create a test contact form submission
# Check that emails are sent and received properly
```

### Test Database Connection
```bash
# Submit a contact form
# Check MongoDB for saved data
```

## 📱 Features Included

- ✅ Contact Forms with Email Notifications
- ✅ Call Booking System
- ✅ Newsletter Subscription
- ✅ MongoDB Database Integration
- ✅ Responsive Email Templates
- ✅ Form Validation & Security
- ✅ Reference ID System

## 🛡️ Security

- Input sanitization for all form data
- Email validation
- Environment variable protection
- No sensitive data in client-side code

## 🚨 Troubleshooting

### Email Issues
- Check Gmail App Password (16 characters, no spaces)
- Verify EMAIL_SERVICE is set to "gmail"
- Test SMTP settings if using custom server

### Database Issues
- Verify MongoDB URI format
- Check network access in MongoDB Atlas
- Ensure MongoDB service is running locally

### Environment Variables
- Ensure `.env.local` exists (not `.env.example`)
- Restart development server after changes
- Check for typos in variable names

## 📞 Support

Need help? The template includes:
- Detailed error logging
- Email delivery confirmation
- Database connection status
- Form validation messages

## 🔄 Updates

To update the template:
1. Keep your `.env.local` file
2. Update company branding in `template-config.ts`
3. Customize email templates as needed
4. Test all functionality after updates