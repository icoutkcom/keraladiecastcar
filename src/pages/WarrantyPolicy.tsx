
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Warranty Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Warranty Coverage</h2>
                  <p className="mb-4">
                    TechStore provides limited warranties on all products sold. Warranty terms vary 
                    by manufacturer and product type.
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Standard Warranty Periods</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Laptops & Computers: 1-3 years manufacturer warranty</li>
                      <li>Smartphones & Tablets: 1-2 years manufacturer warranty</li>
                      <li>Audio Equipment: 1-2 years manufacturer warranty</li>
                      <li>Accessories: 90 days to 1 year manufacturer warranty</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What's Covered</h2>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Manufacturing defects</li>
                    <li>Component failures under normal use</li>
                    <li>Software issues (where applicable)</li>
                    <li>Hardware malfunctions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What's Not Covered</h2>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Physical damage from drops, spills, or accidents</li>
                    <li>Water damage or liquid exposure</li>
                    <li>Damage from misuse or abuse</li>
                    <li>Normal wear and tear</li>
                    <li>Damage from unauthorized repairs or modifications</li>
                    <li>Lost or stolen items</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Warranty Claims Process</h2>
                  <p className="mb-4">To file a warranty claim:</p>
                  <ol className="list-decimal list-inside space-y-1 mb-4">
                    <li>Contact our support team at support@techstore.com</li>
                    <li>Provide your order number and describe the issue</li>
                    <li>Submit photos or videos of the problem if requested</li>
                    <li>Receive return authorization and shipping instructions</li>
                    <li>Ship the item to our warranty center</li>
                    <li>Receive repair, replacement, or refund as determined</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Extended Warranty Options</h2>
                  <p className="mb-4">
                    We offer extended warranty plans for most products. These plans provide additional 
                    coverage beyond the manufacturer's warranty and may include accidental damage protection.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">International Warranty</h2>
                  <p className="mb-4">
                    Warranty coverage may vary for international customers. Some manufacturers provide 
                    global warranty coverage, while others may be limited to specific regions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Warranty Support</h2>
                  <p className="mb-4">
                    For warranty-related questions or to file a claim:
                  </p>
                  <p className="mb-2">Email: warranty@techstore.com</p>
                  <p className="mb-2">Phone: +1 (555) 123-4567</p>
                  <p className="mb-2">Hours: Monday-Friday, 9 AM - 6 PM EST</p>
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

export default WarrantyPolicy;
