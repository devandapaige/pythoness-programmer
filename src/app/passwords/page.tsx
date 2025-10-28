import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Password and Multi-Factor Authentication User Guide | Pythoness Programmer',
  description: 'Your complete guide to password security and two-factor authentication designed for creative, neurodivergent-friendly minds.',
}

export default function PasswordsPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              Password and Multi-Factor Authentication User Guide
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6">
              Your complete guide to password security and two-factor authentication
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              You&apos;ve been told &quot;use strong passwords&quot; a thousand times. But nobody ever showed you <em>how</em> to actually manage dozens (or hundreds) of passwords without losing your mind.
            </p>
            <p className="text-xl text-brand-cream font-semibold mb-4">
              This guide changes that.
            </p>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-4">What You&apos;ll Learn</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-brand-green-dark">
                <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Create and manage strong, unique passwords for every account</span>
              </li>
              <li className="flex items-start text-brand-green-dark">
                <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Choose the right password manager for your brain</span>
              </li>
              <li className="flex items-start text-brand-green-dark">
                <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Set up two-factor authentication without the anxiety</span>
              </li>
              <li className="flex items-start text-brand-green-dark">
                <span className="w-2 h-2 bg-brand-green-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Maintain your password system long-term</span>
              </li>
            </ul>
            <p className="mt-6 text-brand-green-dark font-semibold text-lg">
              The Goal: Password security that feels natural, not overwhelming.
            </p>
            <p className="mt-4 text-brand-purple-dark font-medium">
              🔐 Key Wisdom: Observe before you judge—understand your current password situation before making changes.
            </p>
          </section>

          {/* Why Strong Passwords Don't Work */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Part 1: Understanding the Password Problem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Why &quot;Strong Passwords&quot; Don&apos;t Work</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">The Standard Advice:</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                      <li>&quot;Use a mix of uppercase, lowercase, numbers, and symbols&quot;</li>
                      <li>&quot;Make it at least 12 characters&quot;</li>
                      <li>&quot;Don&apos;t reuse passwords&quot;</li>
                      <li>&quot;Change them regularly&quot;</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">The Reality:</h4>
                    <p className="text-brand-green-dark">You have 80+ accounts. Following this advice means remembering 80+ complex, unique passwords. It&apos;s impossible.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">What Actually Happens:</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                      <li>Same password everywhere (or slight variations)</li>
                      <li>Passwords written on sticky notes</li>
                      <li>&quot;Forgot password&quot; every single time</li>
                      <li>Constant anxiety about security</li>
                    </ul>
                  </div>
                  <div className="bg-brand-purple-dark text-white p-4 rounded-lg">
                    <p className="font-semibold text-lg mb-2">The Solution:</p>
                    <p>Stop trying to remember passwords. Use a password manager instead.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Password Managers Work */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Part 2: How Password Managers Work</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">The Basic Concept</h3>
                <p className="text-brand-green-dark mb-4">
                  A password manager is a secure vault that:
                </p>
                <ol className="list-decimal list-inside text-brand-green-dark space-y-2 ml-2">
                  <li>Stores all your passwords encrypted</li>
                  <li>Generates strong, unique passwords automatically</li>
                  <li>Fills in passwords when you need them</li>
                  <li>Syncs across all your devices</li>
                </ol>
                <p className="text-brand-green-dark mt-4 font-semibold text-lg">
                  You remember ONE strong master password. The manager handles everything else.
                </p>
              </div>
              <div className="bg-brand-green-accent/10 p-6 rounded-lg border-l-4 border-brand-green-accent">
                <h4 className="font-semibold text-brand-green-dark mb-3">What Makes a Password Manager Secure?</h4>
                <ul className="space-y-3 text-brand-green-dark">
                  <li><strong>Encryption:</strong> Your passwords are encrypted before they leave your device. Even the password manager company can&apos;t read them.</li>
                  <li><strong>Zero-Knowledge Architecture:</strong> The company never has access to your master password or vault contents. Only you can unlock your passwords.</li>
                  <li><strong>Breach Protection:</strong> If a website gets hacked, only that one password is compromised—and you can change it instantly.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Choosing Your Password Manager */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Part 3: Choosing Your Password Manager</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Decision Framework</h3>
                <p className="text-brand-green-dark mb-4">Consider these factors:</p>
                <ol className="list-decimal list-inside text-brand-green-dark space-y-2 ml-2">
                  <li><strong>Your workflow:</strong> How do you use technology daily?</li>
                  <li><strong>Your devices:</strong> What platforms do you need to support?</li>
                  <li><strong>Your budget:</strong> Free, budget-friendly, or full-featured?</li>
                  <li><strong>Your brain:</strong> What interface feels natural to you?</li>
                </ol>
              </div>

              {/* Option Cards */}
              <div className="space-y-6">
                {/* Browser Built-In */}
                <div className="border-2 border-brand-green-accent rounded-2xl p-6">
                  <h4 className="text-2xl font-display text-brand-green-dark mb-2">Option 1: Browser Built-In Managers (Free)</h4>
                  <p className="text-brand-green-dark/70 text-sm mb-4">Available in: Chrome, Safari, Firefox, Edge</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Pros:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Already installed</li>
                        <li>Completely free</li>
                        <li>Simple interface</li>
                        <li>Auto-sync across devices (same browser)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Cons:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Limited cross-browser support</li>
                        <li>Fewer advanced features</li>
                        <li>Less portable if you switch browsers</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-brand-purple-dark mb-2">Best For:</p>
                  <p className="text-brand-green-dark text-sm mb-4">Getting started, single-browser users, tight budgets</p>
                  <div className="bg-brand-cream p-4 rounded-lg text-sm">
                    <p className="font-semibold text-brand-green-dark mb-2">How to Access:</p>
                    <ul className="text-brand-green-dark space-y-1">
                      <li><strong>Chrome:</strong> Settings &gt; Passwords</li>
                      <li><strong>Safari:</strong> Preferences &gt; Passwords</li>
                      <li><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Logins and Passwords</li>
                    </ul>
                  </div>
                </div>

                {/* Bitwarden */}
                <div className="border-2 border-brand-green-accent rounded-2xl p-6">
                  <h4 className="text-2xl font-display text-brand-green-dark mb-2">Option 2: Bitwarden (Free / $10/year)</h4>
                  <p className="text-brand-green-dark/70 text-sm mb-4">Pricing: Free with excellent features, Premium $10/year</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Pros:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Open source (transparent security)</li>
                        <li>Excellent free tier</li>
                        <li>Works everywhere (all browsers, all platforms)</li>
                        <li>Can self-host for complete control</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Cons:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Interface less polished than paid options</li>
                        <li>Slightly steeper learning curve</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-brand-purple-dark mb-2">Best For:</p>
                  <p className="text-brand-green-dark text-sm mb-4">Privacy advocates, budget-conscious users, those who want full control</p>
                  <Link 
                    href="https://bitwarden.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-green-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-sm"
                  >
                    Get Started: bitwarden.com
                  </Link>
                </div>

                {/* 1Password */}
                <div className="border-2 border-brand-green-accent rounded-2xl p-6">
                  <h4 className="text-2xl font-display text-brand-green-dark mb-2">Option 3: 1Password ($3/month)</h4>
                  <p className="text-brand-green-dark/70 text-sm mb-4">Pricing: $2.99/month individual, $4.99/month family</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Pros:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Beautiful, intuitive interface</li>
                        <li>Excellent browser integration</li>
                        <li>Strong security features</li>
                        <li>Great family sharing</li>
                        <li>Travel Mode (hide sensitive vaults)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Cons:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>No free tier</li>
                        <li>Subscription required</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-brand-purple-dark mb-2">Best For:</p>
                  <p className="text-brand-green-dark text-sm mb-4">Those who value polish and ease of use, families, frequent travelers</p>
                  <Link 
                    href="https://1password.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-green-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-sm"
                  >
                    Get Started: 1password.com
                  </Link>
                </div>

                {/* Dashlane */}
                <div className="border-2 border-brand-green-accent rounded-2xl p-6">
                  <h4 className="text-2xl font-display text-brand-green-dark mb-2">Option 4: Dashlane ($5/month)</h4>
                  <p className="text-brand-green-dark/70 text-sm mb-4">Pricing: Free limited, Premium $4.99/month</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Pros:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Dark web monitoring</li>
                        <li>VPN included (Premium)</li>
                        <li>Password health reports</li>
                        <li>User-friendly interface</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2">Cons:</h5>
                      <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                        <li>Free tier very limited (50 passwords, 1 device)</li>
                        <li>Higher price point</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-brand-purple-dark mb-2">Best For:</p>
                  <p className="text-brand-green-dark text-sm mb-4">Those who want comprehensive identity protection, business users</p>
                  <Link 
                    href="https://dashlane.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-green-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-sm"
                  >
                    Get Started: dashlane.com
                  </Link>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mt-8 overflow-x-auto">
                <h4 className="text-2xl font-display text-brand-green-dark mb-4">Quick Comparison Table</h4>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-green-accent/20">
                      <th className="border border-brand-green-accent p-3 text-left font-semibold text-brand-green-dark">Feature</th>
                      <th className="border border-brand-green-accent p-3 text-center font-semibold text-brand-green-dark">Browser Built-In</th>
                      <th className="border border-brand-green-accent p-3 text-center font-semibold text-brand-green-dark">Bitwarden</th>
                      <th className="border border-brand-green-accent p-3 text-center font-semibold text-brand-green-dark">1Password</th>
                      <th className="border border-brand-green-accent p-3 text-center font-semibold text-brand-green-dark">Dashlane</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-brand-green-accent p-3 text-brand-green-dark font-semibold">Cost</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Free</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Free / $10/yr</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">$3/mo</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">$5/mo</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="border border-brand-green-accent p-3 text-brand-green-dark font-semibold">Cross-browser</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Limited</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Yes</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Yes</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-brand-green-accent p-3 text-brand-green-dark font-semibold">Mobile apps</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">iOS/Android</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">All</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">All</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">All</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="border border-brand-green-accent p-3 text-brand-green-dark font-semibold">Ease of use</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">⭐⭐⭐⭐⭐</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">⭐⭐⭐⭐</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">⭐⭐⭐⭐⭐</td>
                      <td className="border border-brand-green-accent p-3 text-center text-brand-green-dark">⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Two-Factor Authentication */}
          <section className="mb-12 bg-white/95 border-2 border-brand-purple-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Part 6: Two-Factor Authentication (2FA)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Understanding Two-Factor Authentication</h3>
                <div className="bg-brand-purple-light/20 p-6 rounded-lg border-l-4 border-brand-purple-accent">
                  <p className="text-brand-green-dark mb-4">
                    <strong>What is 2FA?</strong> Two-Factor Authentication (also called 2FA, MFA for Multi-Factor Authentication, or 2-Step Verification) requires two different types of proof before granting access to your account:
                  </p>
                  <ol className="list-decimal list-inside text-brand-green-dark space-y-2">
                    <li><strong>Something you know:</strong> Your password</li>
                    <li><strong>Something you have:</strong> Your phone, an app, or a physical key</li>
                    <li><strong>Something you are:</strong> Your fingerprint, face, or other biometric</li>
                  </ol>
                  <p className="text-brand-green-dark mt-4 font-semibold text-lg">
                    The Goal: Even if someone steals your password, they can&apos;t get in without that second factor.
                  </p>
                </div>
                <p className="text-brand-green-dark mt-4">
                  <strong>Why It Matters:</strong> 2FA blocks 99.9% of automated attacks. It&apos;s the single most effective security upgrade you can make.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Types of Two-Factor Authentication</h3>
                <p className="text-brand-green-dark mb-4 font-semibold">From Least to Most Secure:</p>
                
                <div className="space-y-4">
                  <div className="border border-brand-purple-accent rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-brand-green-dark mb-2">1. SMS/Text Message Codes (Basic Protection)</h4>
                    <p className="text-sm text-brand-green-dark mb-2">A 6-digit code sent to your phone via text message.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Pros:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Easy to set up</li>
                          <li>No app required</li>
                          <li>Works on any phone</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Cons:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Vulnerable to SIM swapping</li>
                          <li>Requires cell signal</li>
                          <li>Least secure 2FA option</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-brand-purple-dark font-medium">When to use it: Better than nothing, but upgrade to an authenticator app when possible.</p>
                  </div>

                  <div className="border border-brand-purple-accent rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-brand-green-dark mb-2">2. Authenticator Apps / TOTP (Recommended)</h4>
                    <p className="text-sm text-brand-green-dark mb-2">Time-based One-Time Password - an app generates 6-digit codes that change every 30 seconds.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Pros:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Works offline (no cell signal needed)</li>
                          <li>Codes change every 30 seconds</li>
                          <li>Much more secure than SMS</li>
                          <li>Free</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Cons:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Requires smartphone</li>
                          <li>If you lose phone without backup, recovery is harder</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="font-semibold text-brand-green-dark mb-2">Best Apps:</p>
                      <ul className="list-disc list-inside text-brand-green-dark text-sm space-y-1">
                        <li><strong>Authy</strong> (Recommended): Multi-device sync, encrypted backup</li>
                        <li><strong>Google Authenticator:</strong> Simple, no frills</li>
                        <li><strong>Microsoft Authenticator:</strong> Good for Microsoft accounts</li>
                      </ul>
                    </div>
                    <p className="mt-2 text-sm text-brand-purple-dark font-medium">When to use it: Default choice for most accounts. Strong security with minimal friction.</p>
                  </div>

                  <div className="border-2 border-brand-green-accent rounded-lg p-4 bg-brand-green-accent/10">
                    <h4 className="text-lg font-semibold text-brand-green-dark mb-2">3. Passkeys (Modern Standard)</h4>
                    <p className="text-sm text-brand-green-dark mb-2">Passkeys use FIDO2 standard - cryptographic keys stored on your device that prove you own the account without sending a password.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Pros:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Phishing-resistant (works only on the real website)</li>
                          <li>No codes to type</li>
                          <li>Syncs across devices</li>
                          <li>Faster than traditional 2FA</li>
                          <li>Most user-friendly option</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-green-dark mb-1">Cons:</p>
                        <ul className="list-disc list-inside text-brand-green-dark space-y-1">
                          <li>Not all sites support it yet</li>
                          <li>Newer technology (some learning curve)</li>
                          <li>Requires compatible device</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-brand-purple-dark font-medium">When to use it: Use whenever available. This is the future of authentication.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priority-Based 2FA Setup */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Choosing the Right 2FA for Each Account</h2>
            <div className="space-y-6">
              <div className="bg-brand-green-accent/10 p-6 rounded-lg border-l-4 border-brand-green-accent">
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Critical Accounts (Use strongest available):</h3>
                <ul className="list-disc list-inside text-brand-green-dark space-y-2">
                  <li>Email → Authenticator app + hardware key backup</li>
                  <li>Password manager → Authenticator app + hardware key</li>
                  <li>Banking → Authenticator app or hardware key</li>
                  <li>Phone carrier → Authenticator app (prevents SIM swaps)</li>
                </ul>
              </div>

              <div className="bg-brand-purple-accent/10 p-6 rounded-lg border-l-4 border-brand-purple-accent">
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Important Accounts (Authenticator app):</h3>
                <ul className="list-disc list-inside text-brand-green-dark space-y-2">
                  <li>Cloud storage</li>
                  <li>Social media</li>
                  <li>Work accounts</li>
                  <li>Shopping with payment info</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Medium Priority (SMS acceptable):</h3>
                <ul className="list-disc list-inside text-brand-green-dark space-y-2">
                  <li>Streaming services</li>
                  <li>Gaming accounts</li>
                  <li>Forums/communities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Low Priority (Optional):</h3>
                <ul className="list-disc list-inside text-brand-green-dark space-y-2">
                  <li>Accounts with no personal data</li>
                  <li>Services you rarely use</li>
                  <li>Things you wouldn&apos;t mind losing access to</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 30-Day Roadmap */}
          <section className="mb-12 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Part 9: Your 30-Day Password Security Roadmap</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Week 1: Foundation</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-green-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 1-2: Choose Your Password Manager</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Review options above</li>
                      <li>Consider your workflow and budget</li>
                      <li>Create account and install</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-green-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 3-4: Set Up Master Password</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Create strong, memorable passphrase</li>
                      <li>Practice typing it 10 times</li>
                      <li>Write it down temporarily (destroy after memorizing)</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-green-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 5-7: Import and Organize</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Import existing passwords from browser</li>
                      <li>Create basic folder structure</li>
                      <li>Test auto-fill on a few sites</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Week 2: Critical Accounts</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-purple-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 8-9: Secure Your Email</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Update email password (if needed)</li>
                      <li>Enable 2FA with authenticator app</li>
                      <li>Save backup codes in password manager</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-purple-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 10-11: Secure Password Manager</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Enable 2FA on password manager itself</li>
                      <li>Set up emergency access (if available)</li>
                      <li>Test recovery process</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-purple-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 12-14: Financial Accounts</h4>
                    <ul className="list-disc list-inside text-brand-green-dark space-y-1 text-sm">
                      <li>Update banking passwords</li>
                      <li>Enable 2FA on all financial accounts</li>
                      <li>Save all backup codes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Week 3: Update Everything Else</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-green-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 15-17: High-Priority Accounts</h4>
                    <p className="text-brand-green-dark text-sm mb-2">Social media, cloud storage, shopping, work accounts</p>
                  </div>
                  <div className="border-l-4 border-brand-green-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 18-21: Medium-Priority Accounts</h4>
                    <p className="text-brand-green-dark text-sm mb-2">Streaming services, gaming accounts, community accounts</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-purple-dark mb-4">Week 4: Polish and Maintain</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-purple-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 22-24: Clean Up</h4>
                    <p className="text-brand-green-dark text-sm">Delete old/unused accounts, remove duplicates, organize better</p>
                  </div>
                  <div className="border-l-4 border-brand-purple-accent pl-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Day 25-30: Create Maintenance Schedule</h4>
                    <p className="text-brand-green-dark text-sm">Set reminders for monthly audits, quarterly reviews, breach monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources and Links */}
          <section className="mb-12 bg-white/95 border-2 border-brand-purple-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-brand-green-dark mb-6">Resources and Next Steps</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-brand-purple-dark mb-3">Password Managers:</h3>
                <ul className="space-y-2 text-brand-green-dark">
                  <li><Link href="https://bitwarden.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Bitwarden</Link> - bitwarden.com</li>
                  <li><Link href="https://1password.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">1Password</Link> - 1password.com</li>
                  <li><Link href="https://dashlane.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Dashlane</Link> - dashlane.com</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-purple-dark mb-3">Authenticator Apps:</h3>
                <ul className="space-y-2 text-brand-green-dark">
                  <li><Link href="https://authy.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Authy</Link> (Recommended) - authy.com</li>
                  <li>Google Authenticator - Available in app stores</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-purple-dark mb-3">Security Tools:</h3>
                <ul className="space-y-2 text-brand-green-dark">
                  <li><Link href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Have I Been Pwned</Link> - Check if your email has been breached</li>
                  <li><Link href="https://bitwarden.com/password-strength" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-purple-dark">Password Strength Checker</Link> - Check password strength</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Need Help Section */}
          <section className="mb-12 bg-gradient-to-br from-brand-green-accent/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-display text-white mb-4">Need Personalized Help?</h2>
            <p className="text-lg text-white mb-6">
              If you&apos;re feeling stuck or want personalized guidance setting up your password system:
            </p>
            <div className="bg-white/95 rounded-2xl p-6 space-y-4 mb-4">
              <div className="border-l-4 border-brand-green-accent pl-4">
                <h3 className="font-semibold text-brand-green-dark mb-2">20-Minute Software Psychic Session ($30)</h3>
                <p className="text-sm text-brand-green-dark">Perfect for quick guidance on specific software challenges</p>
              </div>
              <div className="border-l-4 border-brand-purple-accent pl-4">
                <h3 className="font-semibold text-brand-green-dark mb-2">60-Minute Software Psychic Session ($60)</h3>
                <p className="text-sm text-brand-green-dark">Extended problem-solving and comprehensive system design</p>
              </div>
            </div>
            <Link
              href="/services"
              className="inline-block bg-brand-green-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
            >
              Book a Session
            </Link>
          </section>

          {/* Final Message */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-display text-white mb-6">You&apos;ve Got This</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6">
              Password security feels overwhelming because everyone tells you what to do, but nobody shows you how.
            </p>
            <p className="text-xl text-brand-cream font-semibold mb-4">
              You now have the complete roadmap.
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6">
              Before you know it, you&apos;ll have a complete system that protects every account with strong, unique passwords, lets you log in from any device instantly, and keeps you safe from 99.9% of attacks—all while taking zero mental energy to maintain.
            </p>
            <p className="text-xl text-brand-cream font-bold">
              This isn&apos;t just about security—it&apos;s about peace of mind.
            </p>
          </section>

          {/* Footer Info */}
          <div className="bg-brand-green-dark text-white text-center py-6 px-4 rounded-lg">
            <p className="text-sm">Created with ☕ by Amanda Nelson | Pythoness Programmer</p>
            <p className="text-sm">Last updated: October 2025</p>
            <p className="text-lg font-semibold mt-4">🔐 Your passwords are now your superpower. Go create with confidence.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

