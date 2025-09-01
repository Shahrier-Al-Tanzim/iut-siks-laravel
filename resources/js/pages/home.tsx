import { Head, Link } from '@inertiajs/react';
import IutNavigation from '@/components/iut-navigation';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, BookOpen, Target, Users, Award, Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import AppLayout from '@/layouts/landing-layout';

interface HomePageProps {
  statistics: {
    members: string;
    events: string;
    articles: string;
    years: string;
  };
}

export default function IutHome({ statistics }: HomePageProps) {
  const platformFeatures = [
    [{
      icon: Calendar,
      title: 'Events',
      description: 'Discover upcoming events and contribute generously',
      href: '/events',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Clock,
      title: 'Prayer Times',
      description: 'Stay updated with accurate daily prayer times',
      href: '/prayer-times',
      color: 'bg-orange-50 text-orange-600'
    }],
    [{
      icon: BookOpen,
      title: 'Daily Reminders',
      description: 'Get inspired with daily spiritual reminders',
      href: '/daily-reminders',
      color: 'bg-purple-50 text-purple-600'
    }]
  ];

  const features = [
    { icon: Target, title: 'Purpose-Driven', description: 'Guided by Islamic values and principles' },
    { icon: Users, title: 'Community', description: 'Connecting knowledge and spiritual growth' },
    { icon: Award, title: 'Knowledge', description: 'Continuous learning and development' },
    { icon: Star, title: 'Excellence', description: 'Striving for highest standards' }
  ];

  return (
    <AppLayout currentPage="/">
      <Head title="IUT SIKS - Home" />
  

      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-9xl font-bold text-gray-900 mb-6">
              IUT SIKS
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Fostering spiritual growth and academic excellence at{' '}
              <span className="text-blue-600">Islamic University of Technology</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                Join Our Community
              </Button>
              <Link href="/events">
                <Button size="lg" variant="outline" >
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Explore Our Platform
                </h2>
                <p className="text-gray-600 mb-8">
                  Discover comprehensive resources designed to enhance your spiritual journey and academic excellence.
                  Connect with fellow students and grow together in faith and knowledge.
                </p>

                <div className="space-y-6">
                  {platformFeatures.map((featurePair, pairIndex) => (
                    <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featurePair.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-3">{feature.description}</p>
                            {/* <Link href={feature.href}>
                              <Button variant="outline" size="sm">
                                Learn More
                              </Button>
                            </Link> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - IUT Logo */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 flex items-center justify-center">
                  <img
                    src="https://assets.noviams.com/novi-file-uploads/amap/members/logo-iut-1.png"
                    alt="Islamic University of Technology Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
    </AppLayout>
  );
}