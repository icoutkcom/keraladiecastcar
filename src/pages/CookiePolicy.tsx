
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <p className="text-sm text-gray-400 mb-6">Last updated: January 1, 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
                  <p className="mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when 
                    you visit our website. They help us provide you with a better experience by remembering 
                    your preferences and improving site functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Essential Cookies</h3>
                    <p className="mb-2">
                      These cookies are necessary for the website to function properly. They enable core 
                      functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Performance Cookies</h3>
                    <p className="mb-2">
                      These cookies collect information about how visitors use our website, such as which 
                      pages are visited most often and if they get error messages.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Functional Cookies</h3>
                    <p className="mb-2">
                      These cookies allow the website to remember choices you make and provide enhanced, 
                      more personal features.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Marketing Cookies</h3>
                    <p className="mb-2">
                      These cookies are used to deliver adverts more relevant to you and your interests.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
                  <p className="mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that 
                    are already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <p className="mb-4">
                    However, if you do this, you may have to manually adjust some preferences every time 
                    you visit a site and some services and functionalities may not work.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                  <p className="mb-4">
                    We may use third-party services that also place cookies on your device. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Payment processors for secure transactions</li>
                    <li>Social media platforms for sharing features</li>
                    <li>Advertising networks for relevant ads</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <p className="mb-2">Email: privacy@techstore.com</p>
                  <p className="mb-2">Phone: +1 (555) 123-4567</p>
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

export default CookiePolicy;
