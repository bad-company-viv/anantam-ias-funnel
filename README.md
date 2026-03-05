# Anantam IAS - Lead Funnel Website

High-converting lead funnel for GS Foundation Batch launch built with React, Tailwind CSS, and Framer Motion.

## Features

- **Landing Page**: Hero section, benefits, faculty info, testimonials, registration form, FAQ
- **Thank You Page**: Post-registration confirmation with next steps
- **Smooth Animations**: Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Client-side validation and state management

## Tech Stack

- React 18
- Vite (Build tool)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Router (Navigation)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero section with CTA
│   │   ├── Benefits.jsx          # What you'll learn section
│   │   ├── Faculty.jsx           # Faculty credentials
│   │   ├── Testimonials.jsx      # Student success stories
│   │   ├── RegistrationForm.jsx  # Lead capture form
│   │   ├── FAQ.jsx               # Frequently asked questions
│   │   └── Footer.jsx            # Footer with contact info
│   ├── pages/
│   │   ├── LandingPage.jsx       # Main landing page
│   │   └── ThankYouPage.jsx      # Post-registration page
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Update Content

1. **Faculty Information**: Edit `src/components/Faculty.jsx`
2. **Testimonials**: Modify `testimonials` array in `src/components/Testimonials.jsx`
3. **Benefits**: Update `benefits` array in `src/components/Benefits.jsx`
4. **FAQ**: Edit `faqs` array in `src/components/FAQ.jsx`

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Form Submission

Currently, the form stores data in localStorage and navigates to thank you page. To integrate with a backend:

1. Update `handleSubmit` in `src/pages/LandingPage.jsx`
2. Replace the simulated API call with your actual API endpoint
3. Add error handling and validation

Example:

```js
const handleSubmit = async (formData) => {
  setIsSubmitting(true)
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      navigate('/thank-you')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

## Integration Checklist

- [ ] Add Google Analytics tracking
- [ ] Add Facebook Pixel
- [ ] Connect form to CRM (HubSpot, Zoho, etc.)
- [ ] Set up email automation (Mailchimp, SendGrid)
- [ ] Add WhatsApp integration
- [ ] Configure payment gateway (if needed)
- [ ] Add actual faculty photos
- [ ] Add real testimonial photos
- [ ] Update contact information
- [ ] Add session date/time
- [ ] Set up domain and hosting

## Performance Optimization

- Images are optimized for web
- Lazy loading for below-the-fold content
- Minimal bundle size with Vite
- CSS purging with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Anantam IAS

## Support

For questions or issues, contact: info@anantamias.com
