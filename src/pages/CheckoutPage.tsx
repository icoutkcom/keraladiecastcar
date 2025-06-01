
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutPage = () => {
  useEffect(() => {
    // Load Tally script dynamically
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;

    // Append to document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12 py-[61px]">
        <div className="container mx-auto px-0">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6 py-0 px-0">
              <div className="w-full" style={{ height: '600px' }}>
                <iframe 
                  data-tally-src="https://tally.so/r/mBl5r7?transparentBackground=1" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Checkout"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
