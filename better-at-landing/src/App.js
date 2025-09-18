{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ ArrowRight, Play, Star, TrendingUp, Shield, Users, Sparkles, CheckCircle, Building2, CreditCard, Target, Heart \} from 'lucide-react';\
\
const BetterLanding = () => \{\
  const [email, setEmail] = useState('');\
\
  const successStories = [\
    \{\
      name: "Maria Santos",\
      title: "Restaurant Owner",\
      achievement: "Expanded to 3 locations with optimized cash flow",\
      business: "Santos Family Kitchen",\
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"\
    \},\
    \{\
      name: "James Mitchell",\
      title: "Construction Contractor",\
      achievement: "Secured $500K equipment loan at 4.2% APR",\
      business: "Mitchell & Sons Construction",\
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"\
    \},\
    \{\
      name: "Lisa Chen",\
      title: "E-commerce Founder",\
      achievement: "Built emergency fund while scaling from $100K to $2M revenue",\
      business: "Chen Digital Solutions",\
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face"\
    \}\
  ];\
\
  const services = [\
    \{\
      icon: <Target className="w-8 h-8" />,\
      title: "Financial Planning",\
      description: "Personalized strategies for business growth and family security"\
    \},\
    \{\
      icon: <Shield className="w-8 h-8" />,\
      title: "Financial Organization",\
      description: "Keep your business and personal finances perfectly structured"\
    \},\
    \{\
      icon: <CreditCard className="w-8 h-8" />,\
      title: "Exclusive Financing",\
      description: "Access to affordable loans, credit lines, and business funding"\
    \}\
  ];\
\
  const stats = [\
    \{ number: "$2.4B+", label: "Business Funding Secured" \},\
    \{ number: "15K+", label: "Small Businesses Served" \},\
    \{ number: "4.2%", label: "Average Loan Rate" \},\
    \{ number: "95%", label: "Client Satisfaction" \}\
  ];\
\
  const offers = [\
    \{\
      type: "Business Loan",\
      rate: "Starting at 4.2% APR",\
      highlight: "Up to $500K",\
      description: "Equipment, expansion, or working capital"\
    \},\
    \{\
      type: "Business Credit Card",\
      rate: "0% APR for 12 months",\
      highlight: "No annual fee",\
      description: "Rewards on business purchases"\
    \},\
    \{\
      type: "Business Banking",\
      rate: "No monthly fees",\
      highlight: "Free transfers",\
      description: "Designed for small business needs"\
    \}\
  ];\
\
  return (\
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">\
      \{/* Navigation */\}\
      <nav className="relative z-50 px-6 py-6">\
        <div className="max-w-7xl mx-auto flex items-center justify-between">\
          <div className="flex items-center space-x-3">\
            <div className="text-4xl font-light tracking-tight text-black">\
              better<span className="text-gray-500">@</span>\
            </div>\
          </div>\
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">\
            Get Started\
          </button>\
        </div>\
      </nav>\
\
      \{/* Hero Section */\}\
      <section className="relative px-6 py-20">\
        <div className="max-w-7xl mx-auto">\
          <div className="grid lg:grid-cols-2 gap-16 items-center">\
            <div className="space-y-8">\
              <div className="space-y-6">\
                <div className="flex items-center space-x-3">\
                  <Heart className="w-6 h-6 text-gray-600" />\
                  <span className="text-gray-600 uppercase tracking-widest text-sm font-medium">\
                    For Small Business Owners\
                  </span>\
                </div>\
                \
                <h1 className="text-5xl lg:text-6xl font-thin leading-tight text-black">\
                  You Take Care Of Your\
                  <br />\
                  <span className="text-gray-600 font-extralight">\
                    Business & Family\
                  </span>\
                </h1>\
                \
                <h2 className="text-3xl lg:text-4xl font-thin text-black">\
                  We Take Care Of Your\
                  <br />\
                  <span className="text-gray-600 font-extralight">\
                    Finances\
                  </span>\
                </h2>\
                \
                <p className="text-xl text-gray-500 leading-relaxed max-w-lg">\
                  Focus on what you do best. Get expert financial advice, organized finances, \
                  and access to exclusive business funding at rates you deserve.\
                </p>\
              </div>\
\
              <div className="space-y-6">\
                <div className="flex space-x-4">\
                  <input\
                    type="email"\
                    placeholder="Enter your business email"\
                    value=\{email\}\
                    onChange=\{(e) => setEmail(e.target.value)\}\
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"\
                  />\
                  <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">\
                    <span>Get Started</span>\
                    <ArrowRight className="w-5 h-5" />\
                  </button>\
                </div>\
                \
                <div className="flex items-center space-x-6 text-sm text-gray-500">\
                  <div className="flex items-center space-x-2">\
                    <CheckCircle className="w-4 h-4 text-gray-400" />\
                    <span>No credit impact</span>\
                  </div>\
                  <div className="flex items-center space-x-2">\
                    <CheckCircle className="w-4 h-4 text-gray-400" />\
                    <span>Free consultation</span>\
                  </div>\
                  <div className="flex items-center space-x-2">\
                    <CheckCircle className="w-4 h-4 text-gray-400" />\
                    <span>Bank-level security</span>\
                  </div>\
                </div>\
              </div>\
            </div>\
\
            \{/* Hero Visual */\}\
            <div className="relative">\
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">\
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">\
                  <button className="group relative">\
                    <div className="w-20 h-20 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">\
                      <Play className="w-8 h-8 text-black ml-1" />\
                    </div>\
                    <div className="absolute inset-0 rounded-full border-2 border-black/20 animate-pulse"></div>\
                  </button>\
                </div>\
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>\
                <div className="absolute bottom-6 left-6 right-6">\
                  <p className="text-white text-lg font-light">\
                    "better@ helped us secure funding and organize our finances so I could focus on growing my restaurant."\
                  </p>\
                  <p className="text-gray-200 text-sm mt-2">\'97 Maria Santos, Restaurant Owner</p>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* Stats Section */\}\
      <section className="px-6 py-16 bg-gray-50">\
        <div className="max-w-7xl mx-auto">\
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">\
            \{stats.map((stat, index) => (\
              <div key=\{index\} className="text-center">\
                <div className="text-4xl lg:text-5xl font-thin text-black mb-2">\
                  \{stat.number\}\
                </div>\
                <div className="text-gray-500 uppercase tracking-wide text-sm">\
                  \{stat.label\}\
                </div>\
              </div>\
            ))\}\
          </div>\
        </div>\
      </section>\
\
      \{/* Success Stories */\}\
      <section className="px-6 py-20 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-16">\
            <h2 className="text-4xl lg:text-5xl font-thin mb-6 text-black">\
              Small Business Success Stories\
            </h2>\
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">\
              Real business owners who transformed their financial lives while focusing on what they love\
            </p>\
          </div>\
\
          <div className="grid lg:grid-cols-3 gap-8">\
            \{successStories.map((story, index) => (\
              <div key=\{index\} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">\
                <div className="aspect-square">\
                  <img \
                    src=\{story.image\} \
                    alt=\{story.name\}\
                    className="w-full h-full object-cover"\
                  />\
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>\
                </div>\
                <div className="absolute bottom-0 left-0 right-0 p-6">\
                  <h3 className="text-xl font-light mb-1 text-white">\{story.name\}</h3>\
                  <p className="text-gray-300 text-sm mb-1">\{story.business\}</p>\
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">\
                    \{story.title\}\
                  </p>\
                  <p className="text-gray-200 text-sm">\
                    \{story.achievement\}\
                  </p>\
                </div>\
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">\
                  <Building2 className="w-5 h-5 text-white" />\
                </div>\
              </div>\
            ))\}\
          </div>\
        </div>\
      </section>\
\
      \{/* Services */\}\
      <section className="px-6 py-20 bg-gray-50">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-16">\
            <h2 className="text-4xl lg:text-5xl font-thin mb-6 text-black">\
              How We Take Care Of Your Finances\
            </h2>\
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">\
              Comprehensive financial support designed specifically for small business owners\
            </p>\
          </div>\
\
          <div className="grid lg:grid-cols-3 gap-12">\
            \{services.map((service, index) => (\
              <div key=\{index\} className="text-center space-y-6">\
                <div className="inline-flex p-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl text-black">\
                  \{service.icon\}\
                </div>\
                <h3 className="text-2xl font-light text-black">\{service.title\}</h3>\
                <p className="text-gray-500 text-lg leading-relaxed">\
                  \{service.description\}\
                </p>\
              </div>\
            ))\}\
          </div>\
        </div>\
      </section>\
\
      \{/* Exclusive Offers */\}\
      <section className="px-6 py-20 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-16">\
            <h2 className="text-4xl lg:text-5xl font-thin mb-6 text-black">\
              Exclusive Business Offers\
            </h2>\
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">\
              Access to affordable financing and business banking solutions\
            </p>\
          </div>\
\
          <div className="grid lg:grid-cols-3 gap-8">\
            \{offers.map((offer, index) => (\
              <div key=\{index\} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">\
                <div className="space-y-4">\
                  <div className="flex justify-between items-start">\
                    <h3 className="text-xl font-semibold text-black">\{offer.type\}</h3>\
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">\
                      \{offer.highlight\}\
                    </span>\
                  </div>\
                  <div className="text-2xl font-light text-black">\{offer.rate\}</div>\
                  <p className="text-gray-500">\{offer.description\}</p>\
                  <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-black transition-all duration-300">\
                    Learn More\
                  </button>\
                </div>\
              </div>\
            ))\}\
          </div>\
        </div>\
      </section>\
\
      \{/* CTA Section */\}\
      <section className="px-6 py-20 bg-gray-50">\
        <div className="max-w-4xl mx-auto text-center">\
          <h2 className="text-5xl lg:text-6xl font-thin mb-8 text-black">\
            Ready To Focus On\
            <br />\
            <span className="text-gray-600">\
              What You Do Best?\
            </span>\
          </h2>\
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">\
            Let us handle your finances while you build your business and take care of your family.\
          </p>\
          \
          <div className="space-y-6">\
            <button className="bg-black text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">\
              Get Your Free Financial Review\
            </button>\
            <p className="text-gray-400 text-sm">\
              Join 15,000+ small business owners \'95 No credit impact \'95 Free consultation\
            </p>\
          </div>\
        </div>\
      </section>\
\
      \{/* Footer */\}\
      <footer className="px-6 py-12 border-t border-gray-200 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">\
            <div className="text-2xl font-light tracking-tight text-black">\
              better<span className="text-gray-500">@</span>\
            </div>\
            <div className="flex space-x-8 text-gray-500">\
              <a href="#" className="hover:text-black transition-colors">Privacy</a>\
              <a href="#" className="hover:text-black transition-colors">Terms</a>\
              <a href="#" className="hover:text-black transition-colors">Business Support</a>\
            </div>\
          </div>\
        </div>\
      </footer>\
    </div>\
  );\
\};\
\
export default BetterLanding;}