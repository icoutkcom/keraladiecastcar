
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReturnRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Return & Refund Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Returns</h2>
                  <p className="mb-4">
                    Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately 
                    we can't offer you a refund or exchange.
                  </p>
                  <p className="mb-4">
                    To be eligible for a return, your item must be unused and in the same condition that 
                    you received it. It must also be in the original packaging.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Refunds</h2>
                  <p className="mb-4">
                    Once your return is received and inspected, we will send you an email to notify you 
                    that we have received your returned item. We will also notify you of the approval 
                    or rejection of your refund.
                  </p>
                  <p className="mb-4">
                    If you are approved, then your refund will be processed, and a credit will automatically 
                    be applied to your credit card or original method of payment, within a certain amount of days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Late or Missing Refunds</h2>
                  <p className="mb-4">
                    If you haven't received a refund yet, first check your bank account again. Then contact 
                    your credit card company, it may take some time before your refund is officially posted.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Exchanges</h2>
                  <p className="mb-4">
                    We only replace items if they are defective or damaged. If you need to exchange it for 
                    the same item, send us an email at support@techstore.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Shipping Returns</h2>
                  <p className="mb-4">
                    You will be responsible for paying for your own shipping costs for returning your item. 
                    Shipping costs are non-refundable.
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

export default ReturnRefundPolicy;
