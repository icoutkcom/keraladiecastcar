import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Truck, Shield, CreditCard, Star, Users, Award, CheckCircle, Ruler } from 'lucide-react';
const ProductPage = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('1:18');

  // Default product data - in a real app, this would come from an API
  const product = {
    id: id || '1',
    name: 'Premium Diecast Sports Car Model',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop'
  };
  const sizes = [{
    scale: '1:18',
    price: 1499
  }, {
    scale: '1:24',
    price: 999
  }, {
    scale: '1:32',
    price: 499
  }, {
    scale: '1:64',
    price: 299
  }];
  const selectedPrice = sizes.find(size => size.scale === selectedSize)?.price || 1499;
  const features = ['Made of high-quality metal and fiber', 'Rollable wheels for authentic movement', 'Openable doors for detailed interior view', 'Functional bonnet/hood opening', 'Working headlights and side lights', 'Precision diecast construction', 'Premium quality finish'];
  const reviews = [{
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely fantastic product! The quality is top-notch and my son is very happy with this car model. Worth every rupee spent. Delivery was also very fast.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
    verified: true
  }, {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'Very nice diecast model. All features are working perfectly - doors open, lights work, wheels roll smoothly. My husband loves collecting these and this one is really good quality.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
    verified: true
  }, {
    id: 3,
    name: 'Amit Patel',
    location: 'Bangalore',
    rating: 4,
    comment: 'Good product overall. The metal finish is excellent and all moving parts are working fine. Only thing is packaging could be better, but product reached safely. Recommended!',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop',
    verified: true
  }];
  const trustIndicators = [{
    icon: <Users className="w-6 h-6 text-[#017aff]" />,
    title: "50,000+ Happy Customers",
    description: "Trusted by collectors nationwide"
  }, {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Premium Quality Certified",
    description: "ISO certified manufacturing"
  }, {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    title: "100% Authentic Products",
    description: "Original licensed merchandise"
  }, {
    icon: <Shield className="w-6 h-6 text-[#017aff]" />,
    title: "Secure Payments",
    description: "SSL encrypted checkout"
  }];
  const handleAddToCart = () => {
    window.open('https://tally.so/r/mBl5r7', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-0">
            {/* Product Image */}
            <div className="relative">
              
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Product Header */}
              <div className="glass-card rounded-2xl p-6 border-white/10 py-[9px]">
                
                <div className="text-3xl font-bold text-white">₹{selectedPrice}</div>
              </div>

              {/* Size Selection */}
              <div className="glass-card rounded-2xl p-6 border-white/10 px-[11px] py-[12px]">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Ruler className="w-5 h-5 mr-2 text-[#017aff]" />
                  Select Size & Scale
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map(size => <button key={size.scale} onClick={() => setSelectedSize(size.scale)} className={`p-4 rounded-xl border transition-all duration-300 ${selectedSize === size.scale ? 'border-[#017aff] bg-[#017aff]/20 text-white transform scale-105' : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:bg-white/5'}`}>
                      <div className="font-bold text-lg">{size.scale}</div>
                      <div className="text-sm opacity-80 bg-black/0">₹{size.price}</div>
                    </button>)}
                </div>
              </div>

              {/* Purchase Button */}
              <Button onClick={handleAddToCart} className="w-full bg-[#017aff] hover:bg-[#017aff]/90 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Add to Cart - ₹{selectedPrice}
              </Button>

              {/* Shipping & Policies */}
              <div className="grid grid-cols-3 gap-3">
                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center px-[6px]">
                    <CreditCard className="w-6 h-6 text-[#017aff] mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Prepaid Only</div>
                    <div className="text-gray-400 text-xs">Safe payments</div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center px-[6px]">
                    <Truck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">3-7 Days</div>
                    <div className="text-gray-400 text-xs">Fast shipping</div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center px-[6px]">
                    <Shield className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Returns</div>
                    <div className="text-gray-400 text-xs">If damaged</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          

          {/* Product Features */}
          <div className="mt-12">
            <Card className="glass-card border-white/10 rounded-2xl">
              <CardContent className="p-8 py-[13px] px-[8px]">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Premium Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0">
                  {features.map((feature, index) => <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 px-[15px]">
                      <div className="w-3 h-3 bg-[#017aff] rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Understanding Diecast Scale Section */}
          <div className="mt-16">
            <Card className="glass-card border-white/10 max-w-4xl mx-auto rounded-2xl">
              <CardContent className="p-8 px-[14px] py-[17px]">
                <div className="flex items-center mb-6">
                  <Ruler className="w-6 h-6 text-[#017aff] mr-3" />
                  <h2 className="text-2xl font-bold text-white">Understanding Diecast Scale (in cm)</h2>
                </div>
                {/* Scale comparison image */}
                <div className="mb-8">
                  <img src="/lovable-uploads/665693e7-3e96-4091-b718-98c696a7a35f.png" alt="Diecast car scale comparison showing 1:18, 1:24, 1:37, and 1:64 models" className="w-full max-w-2xl mx-auto rounded-lg border border-white/20" />
                  <p className="text-center text-gray-400 text-sm mt-2">Visual comparison of different diecast scales</p>
                </div>
                <div className="space-y-6">
                  <div className="text-gray-300 leading-relaxed">
                    <p className="mb-4">
                      Diecast scale shows how small a model is compared to the real vehicle. For example:
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <p className="text-white font-semibold mb-2">A 1:24 scale car is 1/24th the size of the real car.</p>
                      <p className="text-white font-semibold mb-2">A 1:18 scale car is bigger than a 1:24, and so on.</p>
                      <p className="text-[#017aff] font-semibold">The larger the bottom number in the scale, the smaller the model.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Common Diecast Scales (Approx. Size in cm):</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[{
                      scale: '1:18',
                      size: '24 to 30 cm',
                      color: 'from-[#017aff]/20 to-[#017aff]/30 border-[#017aff]/20'
                    }, {
                      scale: '1:24',
                      size: '16 to 20 cm',
                      color: 'from-[#017aff]/20 to-[#017aff]/30 border-[#017aff]/20'
                    }, {
                      scale: '1:32',
                      size: '10 to 15 cm',
                      color: 'from-[#017aff]/20 to-[#017aff]/30 border-[#017aff]/20'
                    }, {
                      scale: '1:43',
                      size: '8 to 12 cm',
                      color: 'from-[#017aff]/20 to-[#017aff]/30 border-[#017aff]/20'
                    }, {
                      scale: '1:64',
                      size: '6 to 7.5 cm',
                      color: 'from-[#017aff]/20 to-[#017aff]/30 border-[#017aff]/20'
                    }].map((item, index) => <div key={index} className={`bg-gradient-to-br ${item.color} backdrop-blur-md border rounded-lg p-4 transition-all duration-300 hover:scale-105`}>
                          <div className="text-white font-bold text-lg mb-1">{item.scale} scale</div>
                          <div className="text-gray-300 text-sm">{item.size}</div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators Section */}
          

        </div>
      </div>

      <Footer />
    </div>;
};
export default ProductPage;