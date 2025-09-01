import { Head } from '@inertiajs/react';
import IutNavigation from '@/components/iut-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar} from 'lucide-react';
import AppLayout from '@/layouts/landing-layout';
import {Link} from '@inertiajs/react';
import { useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'available' | 'coming-soon';
}

interface EventsPageProps {
  events: Event[];
}

export default function IutEvents({ events }: EventsPageProps) {
  useEffect(() => {
    console.log(events);
  }, []);
  return (
    <AppLayout currentPage="/events">
      <Head title="IUT SIKS - Events" />
      

      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-16 px-4 text-center bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="py-8 hover:bg-gray-100 bg-gray-50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <CardTitle className="text-xl text-emerald-600">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {event.status === 'available' ? (
                      <Link href={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          Details
                        </Button>
                      </Link>
                      
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}