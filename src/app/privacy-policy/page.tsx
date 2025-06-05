import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy | Pythoness Programmer',
  description: 'Privacy policy for Pythoness Programmer website and services',
}

export default function PrivacyPolicy() {
  const title = 'Privacy Policy';
  const lastUpdated = '2025-04-11';
  return (
    <LegalLayout title={title} lastUpdated={lastUpdated}>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> April 11, 2025</p>
      <h2>Introduction</h2>
      <p>Welcome to Pythoness Programmer. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <ul>
        <li>Name and email address when you subscribe to our newsletter</li>
        <li>Contact information when you book a coaching session</li>
        <li>Information you provide through contact forms</li>
      </ul>
      <h3>Automatically Collected Information</h3>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>IP address</li>
        <li>Pages visited and time spent on our website</li>
        <li>Referral sources</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>Provide and improve our services</li>
        <li>Send you newsletters and updates (with your consent)</li>
        <li>Process your bookings and payments</li>
        <li>Analyze website usage to improve user experience</li>
        <li>Comply with legal obligations</li>
      </ul>
      <h2>Data Protection</h2>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
      <h2>Your Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Request corrections to your data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent for data processing</li>
        <li>Request data portability</li>
      </ul>
      <h2>Third-Party Services</h2>
      <p>We use trusted third-party services for:</p>
      <ul>
        <li>Newsletter distribution (Beehiiv)</li>
        <li>Appointment scheduling (Cal.com)</li>
        <li>Website analytics</li>
        <li>Payment processing</li>
      </ul>
      <h2>Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar tracking technologies to collect information about your browsing activities on our website. Cookies are small text files stored on your device that help us provide and improve our services.</p>
      <h3>Types of Cookies We Use</h3>
      <ul>
        <li>Essential cookies: Required for basic website functionality</li>
        <li>Analytics cookies: Help us understand how visitors interact with our website</li>
        <li>Preference cookies: Allow the website to remember choices you have made</li>
        <li>Marketing cookies: Used to track visitors across websites for advertising purposes</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
      <h2>Data Retention</h2>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When your data is no longer needed, we will securely delete or anonymize it.</p>
      <h2>International Data Transfers</h2>
      <p>Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When transferring data internationally, we implement appropriate safeguards to ensure your information remains protected.</p>
      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at help@pythonessprogrammer.com.</p>
      <h2>Updates to This Policy</h2>
      <p>We may update this Privacy Policy periodically. The latest version will always be posted on this page with the updated date.</p>
    </LegalLayout>
  )
} 