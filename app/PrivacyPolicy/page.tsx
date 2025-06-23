'use client'

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, fill out a form, request services, or contact us. This may include your name, email address, phone number, company name, and other contact details."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on our site through cookies and similar technologies."
        },
        {
          subtitle: "Third-Party Information",
          text: "We may receive information about you from third parties, such as social media platforms, analytics providers, and marketing partners, in accordance with their privacy policies."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "To provide, maintain, and improve our digital marketing services, respond to your inquiries, and communicate with you about our services."
        },
        {
          subtitle: "Marketing and Communications",
          text: "To send you promotional materials, newsletters, and other communications about our services, with your consent where required by law."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "To analyze website usage, understand user preferences, and improve our website and services through data analysis and user feedback."
        },
        {
          subtitle: "Legal Compliance",
          text: "To comply with legal obligations, resolve disputes, and enforce our agreements and policies."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services to you."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, court order, or government request, or to protect our rights, property, or safety."
        },
        {
          subtitle: "Consent",
          text: "We may share your information with your explicit consent or at your direction."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "We use industry-standard encryption protocols to protect sensitive data during transmission and storage."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls and regularly review and update our security practices to ensure the ongoing protection of your information."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. Contact us to request access to or modification of your data."
        },
        {
          subtitle: "Data Portability",
          text: "You may request a copy of your personal information in a structured, machine-readable format."
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to certain legal and business requirements."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can opt out of receiving marketing communications by following the unsubscribe instructions in our emails or contacting us directly."
        }
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser."
        },
        {
          subtitle: "Analytics",
          text: "We use analytics services like Google Analytics to understand how visitors interact with our website. These services may use cookies to collect information."
        },
        {
          subtitle: "Third-Party Tracking",
          text: "Third-party services integrated into our website may use their own tracking technologies. Please review their privacy policies for more information."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers."
        },
        {
          subtitle: "Adequacy Decisions",
          text: "We comply with applicable data protection laws regarding international transfers, including adequacy decisions and appropriate safeguards."
        }
      ]
    },
    {
      title: "Data Retention",
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes."
        },
        {
          subtitle: "Deletion Criteria",
          text: "We regularly review and delete personal information that is no longer necessary for the purposes for which it was collected."
        }
      ]
    }
  ];

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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our digital marketing services. Please read this privacy policy carefully. If you do not agree with the terms 
            of this privacy policy, please do not access the site or use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about 
            any changes by updating the "Last updated" date of this Privacy Policy. Any changes or modifications will be effective 
            immediately upon posting the updated Privacy Policy on the site.
          </p>
        </motion.div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-black mb-6">{section.title}</h2>
            {section.content.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-black mb-3">{item.subtitle}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ))}

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-red-50 rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> privacy@yourcompany.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Marketing Street, Digital City, DC 12345</p>
          </div>
        </motion.div>

        {/* GDPR Notice */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-blue-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">GDPR Compliance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the 
            General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, 
            delete, or limit the use of your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you wish to be informed about what personal data we hold about you and if you want it to be removed from 
            our systems, please contact us using the information provided above.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;