import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import AppLayout from '@/layouts/landing-layout';
import { useEffect } from 'react';
import { Table, TableBody, TableCell, TableCaption, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ContactPerson {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
}

interface Winner {
  rank: number;
  name: string;
}

interface EventDetails {
  name: string;
  description: string;
  details: {
    eligibility: string;
    format: string;
    registrationFee: string;
    prizes: string;
    eventDate: string;
  };
  howItWorks: string[];
  winners: Winner[];
  contact: ContactPerson[];
}

interface EventDetailsPageProps {
  event: {
    name: string;
    description: string;
    details: {
      eligibility: string;
      format: string;
      registrationFee: string;
      prizes: string;
      eventDate: string;
      [key: string]: any; // For additional dynamic properties
    };
    howItWorks: string[];
    winners: Array<{
      rank: number;
      name: string;
      details?: string;
      [key: string]: any;
    }>;
    contact: Array<{
      name: string;
      email: string;
      phone: string;
      whatsapp: string;
      [key: string]: any;
    }>;
  };
}

export default function EventDetails({ event }: EventDetailsPageProps) {
  // If event is not loaded yet, show loading state
  if (!event) {
    return (
      <AppLayout currentPage="/events">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-lg">Loading event details...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout currentPage="/events">
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{event.name}</CardTitle>
          <CardDescription className="text-lg">{event.description}</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Details */}
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(event.details).map(([key, value]) => {
              // Skip if value is an array (like rules)
              if (Array.isArray(value)) return null;
              
              // Format the key for display
              const displayKey = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());
                
              return (
                <div key={key}>
                  <h3 className="font-semibold">{displayKey}</h3>
                  <p>{String(value)}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {event.howItWorks.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Winners */}
        {event.winners && event.winners.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Winners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Table>
                  <TableBody>
                    {event.winners.map((winner) => (
                      <TableRow key={winner.rank}>
                        <TableCell className="font-medium">{winner.rank === 1 ? '🥇' : winner.rank === 2 ? '🥈' : '🥉'} 
                        {winner.teamName ? `Team ${winner.teamName}` : winner.name}</TableCell>
                        <TableCell><span className="text-sm text-muted-foreground">Rank {winner.rank}</span></TableCell>
                        <TableCell>{winner.details && (
                      <p className="mt-1 text-sm text-muted-foreground">{winner.details}</p>
                    )}</TableCell>
                      
                      </TableRow>
                    ))}
                  </TableBody>
                  
                </Table>
                </div>
            </CardContent>
          </Card>
        )}

        
        
      </div>
      {/* Contact */}
      <Card className='block mt-8 '>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex justify-between py-8">
            {event.contact.map((person, index) => (
              <div key={index} className="space-y-2 p-3 bg-muted/10 rounded-lg">
                <h3 className="font-semibold">{person.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="inline-flex">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                    </a>
                  )}
                  {person.phone && (
                    <a href={`tel:${person.phone}`} className="inline-flex">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </a>
                  )}
                  {person.whatsapp && (
                    <a 
                      href={`https://wa.me/${person.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
    </div>
    </AppLayout>
  );
}
