# EmailJS Setup Guide for Arix Innovations Contact Form

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Connect Your Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_name}} ({{to_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent via Arix Innovations Contact Form
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables

Replace the values in `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form

1. Restart your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Available

- `{{from_name}}` - Contact form name field
- `{{from_email}}` - Contact form email field
- `{{to_name}}` - "Arix Innovations" (hardcoded)
- `{{to_email}}` - "jiridavidpromise@gmail.com" (hardcoded)
- `{{message}}` - Contact form message field
- `{{reply_to}}` - Contact form email field (for easy replies)

## Troubleshooting

- **EmailJS configuration missing**: Check that all environment variables are set
- **Failed to send**: Verify your EmailJS service is active and template exists
- **Email not received**: Check spam folder and verify email service setup

## Rate Limits

EmailJS free tier includes:

- 200 emails/month
- For higher volumes, consider upgrading to a paid plan
