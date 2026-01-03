# Email Setup Guide

## Current Setup (Works Immediately)
The contact form currently uses a `mailto:` link, which opens the visitor's email client with a pre-filled message to your email. This works immediately without any setup.

## Optional: Automatic Email Forwarding

If you want messages to be automatically sent to your email without requiring visitors to use their email client, you can set up one of these services:

### Option 1: EmailJS (Recommended - Free tier available)

1. **Sign up for EmailJS:**
   - Go to https://www.emailjs.com/
   - Create a free account (100 emails/month free)

2. **Set up Email Service:**
   - Go to "Email Services" in dashboard
   - Add Gmail service (or your email provider)
   - Follow the setup wizard

3. **Create Email Template:**
   - Go to "Email Templates"
   - Create a new template
   - Use these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Set "To Email" to: `charanreddy671@gmail.com`
   - Set "Subject" to: `Portfolio Contact: {{from_name}}`

4. **Get Your Keys:**
   - Go to "Account" > "General"
   - Copy your "Public Key"
   - Copy your "Service ID" (from Email Services)
   - Copy your "Template ID" (from Email Templates)

5. **Update the Code:**
   - Open `index.html`
   - Uncomment the EmailJS script line (around line 11)
   - Open `script.js`
   - Find the commented EmailJS code (around line 95)
   - Replace:
     - `YOUR_SERVICE_ID` with your Service ID
     - `YOUR_TEMPLATE_ID` with your Template ID
     - `YOUR_PUBLIC_KEY` with your Public Key
   - Comment out the mailto method and uncomment the EmailJS code

### Option 2: Formspree (Easier - Free tier available)

1. **Sign up:**
   - Go to https://formspree.io/
   - Create a free account (50 submissions/month free)

2. **Create a Form:**
   - Click "New Form"
   - Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the Form:**
   - Open `index.html`
   - Find the `<form>` tag (around line 463)
   - Add: `action="YOUR_FORMSPREE_ENDPOINT" method="POST"`
   - Example: `<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

4. **Update JavaScript:**
   - Open `script.js`
   - Replace the form handler with:
   ```javascript
   contactForm.addEventListener('submit', (e) => {
       // Form will submit to Formspree automatically
       formMessage.textContent = 'Sending...';
       formMessage.className = 'form-message info';
       formMessage.style.display = 'block';
   });
   ```

### Option 3: Web3Forms (No signup required)

1. **Get API Key:**
   - Go to https://web3forms.com/
   - Enter your email: `charanreddy671@gmail.com`
   - Get your access key

2. **Update the Form:**
   - Open `index.html`
   - Find the `<form>` tag
   - Add hidden input: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">`
   - Add: `action="https://api.web3forms.com/submit" method="POST"`

3. **Update JavaScript:**
   - Remove the preventDefault() or let form submit naturally

## Testing

After setup, test the form:
1. Fill out the contact form
2. Submit it
3. Check your email inbox (and spam folder)

## Current Status

✅ **Working Now:** Form opens email client with pre-filled message
⏳ **Optional Upgrade:** Set up EmailJS/Formspree for automatic forwarding

---

**Note:** The current mailto: method works immediately and doesn't require any setup. The automatic forwarding options above are optional enhancements.

