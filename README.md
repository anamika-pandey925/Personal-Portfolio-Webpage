# Anamika Pandey — Frontend Developer Portfolio

A modern, responsive, and recruiter-friendly developer portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Glassmorphism UI
- **Animations**: Framer Motion + Canvas Confetti
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis
- **Contact Service**: EmailJS (`@emailjs/browser`)
- **PDF Generation**: jsPDF + html2canvas

---

## 📧 EmailJS Setup Guide

The portfolio uses EmailJS (`@emailjs/browser`) to deliver real-time messages directly to your inbox without exposing backend secrets.

### 1. Create an EmailJS Account
- Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).

### 2. Create an Email Service
- Go to **Email Services** → **Add New Service**.
- Select **Gmail** (or your preferred email provider) and connect `anamika758287@gmail.com`.
- Copy your **Service ID** (e.g., `service_xxxxxxx`).

### 3. Create an Email Template
- Go to **Email Templates** → **Create New Template**.
- Configure the template fields using these exact variables:

```
Subject: {{subject}}

From Name: {{from_name}}
Reply-To Email: {{reply_to}}

Message:
{{message}}
```

- **Settings / Reply-To**: Set the `Reply-To` field to `{{reply_to}}` so that clicking "Reply" in your email client will respond directly to the sender.
- Copy your **Template ID** (e.g., `template_xxxxxxx`).

### 4. Get Your Public Key
- Go to **Account** → **Public Key**.
- Copy your **Public Key** (e.g., `user_xxxxxxx` or `xxxxxxxxxxxxxxx`).

### 5. Local Environment Configuration
- Create a `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Restart Vite Development Server
```bash
npm run dev
```

---

## 🌐 Deployment Configuration (Vercel / Netlify)

When deploying to production, add your environment variables in your hosting provider's dashboard:

### Vercel:
1. Open your project on [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** → **Environment Variables**.
3. Add the three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your project.

### Netlify:
1. Open your site on [Netlify Dashboard](https://app.netlify.com).
2. Go to **Site configuration** → **Environment variables**.
3. Add the three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Trigger a new deploy.

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run ESLint validation
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

