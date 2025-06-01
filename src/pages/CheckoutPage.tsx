
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutPage = () => {
  useEffect(() => {
    // Load forms.app script dynamically
    const script = document.createElement('script');
    script.src = 'https://forms.app/cdn/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Initialize forms.app when script loads
      new (window as any).formsapp('683c802303c9ef0002e2fb31', 'fullscreen', {'opacity':0}, 'https://4lvj7pow.forms.app');
    };

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
              <div formsappId="683c802303c9ef0002e2fb31" className="w-full">
                {/* Forms.app will be loaded here */}
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
