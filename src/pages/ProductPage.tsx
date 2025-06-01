
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Truck, Shield, CreditCard, Star, Users, Award, CheckCircle } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('1:18');

  // Default product data - in a real app, this would come from an API
  const product = {
    id: id || '1',
    name: 'Premium Diecast Sports Car Model',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop'
  };

  const sizes = [
    { scale: '1:18', price: 1499 },
    { scale: '1:24', price: 999 },
    { scale: '1:32', price: 499 },
    { scale: '1:64', price: 299 }
  ];

  const selectedPrice = sizes.find(size => size.scale === selectedSize)?.price || 1499;

  const features = [
    'Made of high-quality metal and fiber',
    'Rollable wheels for authentic movement',
    'Openable doors for detailed interior view',
    'Functional bonnet/hood opening',
    'Working headlights and side lights',
    'Precision diecast construction',
    'Premium quality finish'
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Absolutely fantastic product! The quality is top-notch and my son is very happy with this car model. Worth every rupee spent. Delivery was also very fast.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Very nice diecast model. All features are working perfectly - doors open, lights work, wheels roll smoothly. My husband loves collecting these and this one is really good quality.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      verified: true
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 4,
      comment: 'Good product overall. The metal finish is excellent and all moving parts are working fine. Only thing is packaging could be better, but product reached safely. Recommended!',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop',
      verified: true
    }
  ];

  const trustIndicators = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "50,000+ Happy Customers",
      description: "Trusted by collectors nationwide"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Premium Quality Certified",
      description: "ISO certified manufacturing"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "100% Authentic Products",
      description: "Original licensed merchandise"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Secure Payments",
      description: "SSL encrypted checkout"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={() => {}} cartItems={0} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="glass-card rounded-xl p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">(Premium Quality)</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Select Size & Price</h3>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.scale}
                      onClick={() => setSelectedSize(size.scale)}
                      className={`p-3 rounded-lg border transition-all ${
                        selectedSize === size.scale
                          ? 'border-white bg-white/10 text-white'
                          : 'border-gray-600 text-gray-400 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-semibold">{size.scale}</div>
                      <div className="text-sm">₹{size.price}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-white">₹{selectedPrice}</span>
                </div>
              </div>

              {/* Purchase Button */}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
                Add to Cart - ₹{selectedPrice}
              </Button>

              {/* Product Features */}
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Product Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Shipping & Policies */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center">
                    <CreditCard className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Prepaid Only</div>
                    <div className="text-gray-400 text-xs">To avoid fake orders</div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center">
                    <Truck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">3-7 Day Shipping</div>
                    <div className="text-gray-400 text-xs">Fast delivery</div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Returns Policy</div>
                    <div className="text-gray-400 text-xs">Damage/Wrong items only</div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">About This Model</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This premium diecast model is crafted with precision and quality. Made from durable metal and fiber materials, 
                    it features authentic details including rollable wheels, openable doors and bonnet, working headlights and side lights. 
                    Each model is carefully constructed to provide the most realistic and detailed representation of the original vehicle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4">{indicator.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{indicator.title}</h3>
                    <p className="text-gray-400 text-sm">{indicator.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="glass-card border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image}
                        alt={`Review by ${review.name}`}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-white font-semibold flex items-center">
                          {review.name}
                          {review.verified && (
                            <CheckCircle className="w-4 h-4 text-green-400 ml-2" />
                          )}
                        </h4>
                        <p className="text-gray-400 text-sm">{review.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
