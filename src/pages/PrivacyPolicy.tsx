
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <p className="text-sm text-gray-400 mb-6">Last updated: January 1, 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Personal information (name, email, phone number, address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Order history and preferences</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders</li>
                    <li>Provide customer support</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    except as described in this policy.
                  </p>
                  <p className="mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Service providers who assist us in operating our business</li>
                    <li>Payment processors to handle transactions</li>
                    <li>Shipping companies to deliver your orders</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mb-2">Email: privacy@techstore.com</p>
                  <p className="mb-2">Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Tech Street, Digital City, TC 12345</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
