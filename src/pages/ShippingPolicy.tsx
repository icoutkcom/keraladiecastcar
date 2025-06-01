
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Shipping Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Processing Time</h2>
                  <p className="mb-4">
                    All orders are processed within 1-2 business days. Orders are not shipped or delivered 
                    on weekends or holidays.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Shipping Rates & Delivery Estimates</h2>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Domestic Shipping (US)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Standard Shipping (5-7 business days): $5.99</li>
                      <li>Express Shipping (2-3 business days): $12.99</li>
                      <li>Overnight Shipping (1 business day): $24.99</li>
                      <li>Free shipping on orders over $75</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">International Shipping</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Standard International (10-15 business days): $19.99</li>
                      <li>Express International (5-7 business days): $39.99</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Shipment Confirmation & Order Tracking</h2>
                  <p className="mb-4">
                    You will receive a Shipment Confirmation email once your order has shipped containing 
                    your tracking number(s). The tracking number will be active within 24 hours.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Customs, Duties and Taxes</h2>
                  <p className="mb-4">
                    TechStore is not responsible for any customs and taxes applied to your order. All fees 
                    imposed during or after shipping are the responsibility of the customer.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Damages</h2>
                  <p className="mb-4">
                    TechStore is not liable for any products damaged or lost during shipping. If you received 
                    your order damaged, please contact the shipment carrier to file a claim.
                  </p>
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

export default ShippingPolicy;
