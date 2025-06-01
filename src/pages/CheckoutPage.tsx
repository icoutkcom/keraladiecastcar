import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const CheckoutPage = () => {
  useEffect(() => {
    // Load Jotform script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/251514479689472';
    script.async = true;

    // Append to the form container
    const formContainer = document.getElementById('jotform-container');
    if (formContainer) {
      formContainer.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (formContainer && script.parentNode) {
        formContainer.removeChild(script);
      }
    };
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Checkout
            </h1>
            
            <div className="glass-card rounded-xl p-6 py-0 px-0">
              <div id="jotform-container" className="w-full">
                {/* Jotform will be loaded here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default CheckoutPage;