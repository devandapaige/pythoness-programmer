import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms of Service | Pythoness Programmer',
  description: 'Terms of service for Pythoness Programmer website and services',
}

export default function TermsOfService() {
  const title = 'Terms of Service';
  const lastUpdated = '2025-04-11';
  return (
    <LegalLayout title={title} lastUpdated={lastUpdated}>
      <h1>Terms of Service</h1>
      <p><strong>Last updated:</strong> April 11, 2025</p>
      <h2>Agreement to Terms</h2>
      <p>By accessing and using Pythoness Programmer's website and services, you agree to be bound by these Terms of Service.</p>
      <h2>Services Description</h2>
      <p>Pythoness Programmer provides:</p>
      <ul>
        <li>Programming coaching and mentorship</li>
        <li>Educational content</li>
        <li>Digital resources and tools</li>
        <li>Newsletter subscription</li>
        <li>Consultation services</li>
      </ul>
      <h2>User Responsibilities</h2>
      <p>Users of our services agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of any account credentials</li>
        <li>Use the services in compliance with applicable laws</li>
        <li>Not misuse or attempt to gain unauthorized access to our services</li>
      </ul>
      <h2>Intellectual Property</h2>
      <p>All content, including but not limited to:</p>
      <ul>
        <li>Website design and code</li>
        <li>Blog posts and articles</li>
        <li>Educational materials</li>
        <li>Videos and images</li>
        <li>Brand assets</li>
      </ul>
      <p>are the property of Pythoness Programmer and protected by intellectual property laws.</p>
      <h2>Payment Terms</h2>
      <h3>Consulting and Coaching Services</h3>
      <ul>
        <li>Payment is required at the time of booking</li>
        <li>Cancellation policy applies as specified in booking terms</li>
        <li>Refunds are automatic if cancelled within 2 business days, and then handled on a case-by-case basis</li>
      </ul>
      <h3>Digital Products</h3>
      <ul>
        <li>All sales are final unless otherwise stated</li>
        <li>Pricing is subject to change without notice</li>
      </ul>
      <h2>Limitation of Liability</h2>
      <p>Pythoness Programmer is not liable for:</p>
      <ul>
        <li>Technical issues beyond our control</li>
        <li>Third-party service interruptions</li>
        <li>Personal or business losses</li>
        <li>Indirect or consequential damages</li>
      </ul>
      <h2>Changes to Services</h2>
      <p>We reserve the right to:</p>
      <ul>
        <li>Modify or discontinue services</li>
        <li>Update pricing</li>
        <li>Change terms of service</li>
        <li>Limit service availability</li>
      </ul>
      <h2>Termination</h2>
      <p>We may terminate or suspend access to our services:</p>
      <ul>
        <li>For violations of these terms</li>
        <li>For conduct that may harm other users</li>
        <li>At our sole discretion</li>
      </ul>
      <h2>Privacy Policy</h2>
      <p>Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at <a href="/legal/privacy-policy">pythoness-programmer.com/legal/privacy-policy</a>.</p>
      <h2>Cookies</h2>
      <p>We use cookies and similar tracking technologies to enhance your experience on our website. By using our services, you consent to our use of cookies as described in our Privacy Policy.</p>
      <h2>Contact Information</h2>
      <p>For questions about these terms, please contact help@pythonessprogrammer.com.</p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of Virginia, United States.</p>
    </LegalLayout>
  )
} 