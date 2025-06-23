'use client'

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. Your continued use of the service after such modifications will constitute acknowledgment and agreement to the modified terms."
        }
      ]
    },
    {
      title: "Description of Services",
      content: [
        {
          subtitle: "Digital Marketing Services",
          text: "We provide comprehensive digital marketing services including social media management, paid advertising campaigns, content creation, photography, video editing, marketing strategy consultation, and integrated marketing campaigns."
        },
        {
          subtitle: "Service Availability",
          text: "Services are available subject to availability and our acceptance of your project. We reserve the right to refuse service to anyone for any reason at any time."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
        }
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Account Information",
          text: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Content Guidelines",
          text: "You agree not to use our services for any unlawful purposes or to transmit any content that is defamatory, obscene, threatening, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties."
        },
        {
          subtitle: "Compliance",
          text: "You agree to comply with all applicable laws and regulations in connection with your use of our services and to respect the rights of others."
        }
      ]
    },
    {
      title: "Payment Terms",
      content: [
        {
          subtitle: "Service Fees",
          text: "Fees for our services are as quoted in your service agreement or as listed on our website. All fees are exclusive of applicable taxes unless otherwise stated."
        },
        {
          subtitle: "Payment Schedule",
          text: "Payment terms vary by service type. Monthly services require payment in advance. Project-based services may require partial payment upfront with the remainder due upon completion."
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may result in suspension of services and may incur additional fees. We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month."
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds are handled on a case-by-case basis. Work already completed or campaigns already launched are generally non-refundable. Monthly service fees are non-refundable but services can be cancelled for future months."
        }
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        {
          subtitle: "Our Content",
          text: "All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of our company and is protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "Client Content",
          text: "You retain ownership of any content you provide to us. By providing content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and distribute such content for the purpose of providing our services."
        },
        {
          subtitle: "Work Product",
          text: "Upon full payment, you will own the final deliverables created specifically for your project. We retain the right to use our work for our portfolio and marketing purposes unless otherwise agreed in writing."
        }
      ]
    },
    {
      title: "Confidentiality",
      content: [
        {
          subtitle: "Confidential Information",
          text: "We agree to maintain the confidentiality of any proprietary or confidential information disclosed to us during the course of providing services."
        },
        {
          subtitle: "Non-Disclosure",
          text: "We will not disclose your confidential information to third parties without your written consent, except as required by law or as necessary to provide our services."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Service Disclaimer",
          text: "Our services are provided 'as is' without warranty of any kind. We do not guarantee specific results from our marketing efforts, as outcomes depend on various factors beyond our control."
        },
        {
          subtitle: "Liability Limits",
          text: "In no event shall our liability exceed the amount paid by you for the specific service giving rise to the claim. We shall not be liable for any indirect, incidental, special, or consequential damages."
        },
        {
          subtitle: "Third-Party Platforms",
          text: "We are not responsible for the policies, practices, or performance of third-party platforms (such as social media networks or advertising platforms) used in providing our services."
        }
      ]
    },
    {
      title: "Termination",
      content: [
        {
          subtitle: "Termination by Either Party",
          text: "Either party may terminate services with 30 days written notice. Immediate termination may occur in cases of breach of these terms or non-payment."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, you remain liable for all fees incurred up to the termination date. We will provide final deliverables for completed work and transfer necessary account access."
        },
        {
          subtitle: "Survival",
          text: "Provisions regarding payment, intellectual property, confidentiality, and limitation of liability shall survive termination of these terms."
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        {
          subtitle: "Client Indemnification",
          text: "You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our services, your content, or your violation of these terms."
        },
        {
          subtitle: "Third-Party Claims",
          text: "You agree to indemnify us against any third-party claims arising from content you provide or actions you take using our services."
        }
      ]
    },
    {
      title: "Governing Law",
      content: [
        {
          subtitle: "Jurisdiction",
          text: "These terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions."
        },
        {
          subtitle: "Dispute Resolution",
          text: "Any disputes arising under these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association."
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of our digital marketing services and website. 
            Please read them carefully as they contain important information about your rights and obligations.
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
            Welcome to our digital marketing services. These Terms of Service ("Terms") govern your use of our website, 
            services, and any related software or applications. By using our services, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms apply to all visitors, users, and others who access or use our services. Please read these Terms 
            carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> These Terms include provisions that limit our liability and require disputes to be 
              resolved through arbitration rather than in court. Please review these provisions carefully.
            </p>
          </div>
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
          <h2 className="text-2xl font-bold text-black mb-4">Questions About These Terms?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> legal@yourcompany.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Marketing Street, Digital City, DC 12345</p>
          </div>
        </motion.div>

        {/* Effective Date Notice */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-blue-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Effective Date</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service are effective as of the date listed above and will remain in effect except with respect 
            to any changes in their provisions in the future, which will be in effect immediately after being posted on this page. 
            We reserve the right to update or change our Terms of Service at any time and you should check this page periodically.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;