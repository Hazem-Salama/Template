'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type CookieConsentType = 'all' | 'essential' | null;

interface CookieType {
  type: string;
  description: string;
  examples: string[];
  duration: string;
  canDisable: boolean;
  color: string;
}

interface ThirdPartyService {
  service: string;
  purpose: string;
  cookies: string[];
  privacy: string;
}

const CookiePolicy = () => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsentType>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cookieTypes: CookieType[] = [
    {
      type: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Session management", "Security features", "Basic functionality"],
      duration: "Session or up to 1 year",
      canDisable: false,
      color: "bg-red-100 border-red-200"
    },
    {
      type: "Performance Cookies",
      description: "These cookies help us analyze how visitors use our website to improve performance.",
      examples: ["Google Analytics", "Page load times", "Error tracking"],
      duration: "Up to 2 years",
      canDisable: true,
      color: "bg-blue-100 border-blue-200"
    },
    {
      type: "Functionality Cookies",
      description: "These cookies enable enhanced functionality and personalization features.",
      examples: ["Language preferences", "Form data", "User preferences"],
      duration: "Up to 1 year",
      canDisable: true,
      color: "bg-green-100 border-green-200"
    },
    {
      type: "Marketing Cookies",
      description: "These cookies are used to track visitors and display relevant advertisements.",
      examples: ["Facebook Pixel", "Google Ads", "Retargeting pixels"],
      duration: "Up to 2 years",
      canDisable: true,
      color: "bg-purple-100 border-purple-200"
    }
  ];

  const thirdPartyServices: ThirdPartyService[] = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      cookies: ["_ga", "_gid", "_gat"],
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Facebook Pixel",
      purpose: "Marketing analytics and ad targeting",
      cookies: ["_fbp", "fr"],
      privacy: "https://www.facebook.com/privacy/policy/"
    },
    {
      service: "Google Ads",
      purpose: "Advertising and conversion tracking",
      cookies: ["_gcl_*", "DSID", "IDE"],
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "LinkedIn Insight Tag",
      purpose: "Professional network analytics",
      cookies: ["li_*", "UserMatchHistory"],
      privacy: "https://www.linkedin.com/legal/privacy-policy"
    }
  ];

  const handleCookieConsent = (consent: CookieConsentType) => {
    try {
      setCookieConsent(consent);
      // In a real implementation, you would save this preference and apply it
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
      }
      
      // Optional: Trigger analytics or other tracking based on consent
      if (consent === 'all') {
        console.log('User accepted all cookies');
        // Enable all tracking services here
      } else if (consent === 'essential') {
        console.log('User accepted essential cookies only');
        // Enable only essential tracking here
      }
    } catch (error) {
      console.error('Error saving cookie consent:', error);
      // Fallback: still set the state even if localStorage fails
      setCookieConsent(consent);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies to provide, 
            improve, and promote our services while respecting your privacy choices.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </motion.div>

        {/* Cookie Consent Banner */}
        {cookieConsent === null && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-red-500 p-6 z-50"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <h3 className="text-lg font-semibold text-black mb-2">🍪 We Use Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleCookieConsent('essential' as CookieConsentType)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={() => handleCookieConsent('all' as CookieConsentType)}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* What Are Cookies */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" 
            (deleted when you close your browser). They can also be "first-party" (set by the website you're visiting) 
            or "third-party" (set by a different website).
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Similar technologies like web beacons, pixels, and local storage may also be used 
              and are covered by this policy when they perform similar functions to cookies.
            </p>
          </div>
        </motion.div>

        {/* Types of Cookies */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-6">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`${cookie.color} border rounded-lg p-6`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-black">{cookie.type}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${cookie.canDisable ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {cookie.canDisable ? 'Optional' : 'Required'}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{cookie.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-black mb-2">Examples:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duration:</strong> {cookie.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Third-Party Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-6">Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            We use various third-party services that may set their own cookies. Here are the main services we use:
          </p>
          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-black mb-2 md:mb-0">{service.service}</h3>
                  <a 
                    href={service.privacy} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    View Privacy Policy →
                  </a>
                </div>
                <p className="text-gray-700 text-sm mb-4">{service.purpose}</p>
                <div>
                  <h4 className="font-medium text-black mb-2">Cookie Names:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.cookies.map((cookie, cookieIndex) => (
                      <span key={cookieIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {cookie}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Managing Cookies */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-6">Managing Your Cookie Preferences</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                View and delete existing cookies
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                Block all cookies or cookies from specific websites
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                Receive notifications when cookies are set
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                Delete cookies when you close your browser
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-black mb-2">Chrome</h4>
                <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-black mb-2">Firefox</h4>
                <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-black mb-2">Safari</h4>
                <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-black mb-2">Edge</h4>
                <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">Opt-Out Links</h3>
            <p className="text-gray-700 mb-4">
              You can also opt out of specific tracking services:
            </p>
            <div className="space-y-3">
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                 className="block text-red-500 hover:text-red-600 text-sm">
                Google Analytics Opt-out Browser Add-on →
              </a>
              <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" 
                 className="block text-red-500 hover:text-red-600 text-sm">
                Facebook Pixel Opt-out →
              </a>
              <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" 
                 className="block text-red-500 hover:text-red-600 text-sm">
                Network Advertising Initiative Opt-out →
              </a>
            </div>
          </div>

          {cookieConsent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-black mb-2">Your Current Preference</h4>
              <p className="text-sm text-gray-700 mb-3">
                You have chosen: <strong>{cookieConsent === 'all' ? 'Accept All Cookies' : 'Essential Cookies Only'}</strong>
              </p>
              <button
                onClick={() => setCookieConsent(null)}
                className="text-red-500 hover:text-red-600 text-sm font-medium"
              >
                Change Preferences
              </button>
            </div>
          )}
        </motion.div>

        {/* Impact of Disabling Cookies */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-yellow-50 rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Impact of Disabling Cookies</h2>
          <p className="text-gray-700 mb-4">
            While you can disable cookies, please note that this may affect your experience on our website:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-black mb-3">Essential Cookies Disabled</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Login functionality may not work</li>
                <li>• Forms may not submit properly</li>
                <li>• Security features may be compromised</li>
                <li>• Website may not function correctly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-3">Optional Cookies Disabled</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Less personalized experience</li>
                <li>• Reduced analytics insights</li>
                <li>• Less relevant advertising</li>
                <li>• Preferences may not be saved</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Updates to This Policy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
            legal requirements, or other factors. When we update this policy, we will revise the "Last updated" 
            date at the top of this page.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies 
            and similar technologies. If we make material changes, we may provide additional notice through our 
            website or other communications.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-red-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Questions About Cookies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> privacy@yourcompany.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Marketing Street, Digital City, DC 12345</p>
          </div>
          <div className="mt-6 pt-6 border-t border-red-200">
            <p className="text-sm text-gray-600">
              For technical questions about managing cookies in your browser, please refer to your browser's 
              help documentation or contact the browser manufacturer directly.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;