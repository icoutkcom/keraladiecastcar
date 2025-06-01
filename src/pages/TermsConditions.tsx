
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <p className="text-sm text-gray-400 mb-6">Last updated: January 1, 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
                  <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials on TechStore's 
                    website for personal, non-commercial transitory viewing only.
                  </p>
                  <p className="mb-4">This license shall not allow you to:</p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for commercial purposes</li>
                    <li>Attempt to reverse engineer any software</li>
                    <li>Remove any copyright or proprietary notations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Product Information</h2>
                  <p className="mb-4">
                    We attempt to be as accurate as possible when describing our products. However, 
                    we do not warrant that product descriptions or other content is accurate, complete, 
                    reliable, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Pricing and Payment</h2>
                  <p className="mb-4">
                    All prices are subject to change without notice. We reserve the right to modify 
                    or discontinue products at any time. Payment must be received by us before we 
                    ship any products.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">User Accounts</h2>
                  <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account information 
                    and for all activities that occur under your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                  <p className="mb-4">
                    In no event shall TechStore or its suppliers be liable for any damages arising 
                    out of the use or inability to use the materials on TechStore's website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                  <p className="mb-4">
                    These terms and conditions are governed by and construed in accordance with the 
                    laws of the United States and you irrevocably submit to the exclusive jurisdiction 
                    of the courts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <p className="mb-2">Email: legal@techstore.com</p>
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

export default TermsConditions;
