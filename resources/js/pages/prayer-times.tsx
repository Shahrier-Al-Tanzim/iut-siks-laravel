import { Head } from '@inertiajs/react';
import IutNavigation from '@/components/iut-navigation';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/landing-layout';

interface PrayerTime {
  name: string;
  arabicName: string;
  time: string;
}

interface PrayerTimesPageProps {
  prayerTimes: {
    fajr: PrayerTime;
    dhuhr: PrayerTime;
    asr: PrayerTime;
    maghrib: PrayerTime;
    isha: PrayerTime;
    jummah: PrayerTime;
  };
}

export default function IutPrayerTimes({ prayerTimes }: PrayerTimesPageProps) {
  const dailyPrayers = [
    prayerTimes.fajr,
    prayerTimes.dhuhr,
    prayerTimes.asr,
    prayerTimes.maghrib,
    prayerTimes.isha
  ];

  return (
    <AppLayout currentPage="/prayer-times">
      <Head title="IUT SIKS - Prayer Times" />
     
      
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-16 px-4 text-center bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Today's Prayer Times
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </section>

        {/* Prayer Times */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {dailyPrayers.map((prayer, index) => (
                <Card key={index} className="hover:bg-gray-200 bg-gray-100 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-1">
                          {prayer.name}
                        </h3>
                        <p className="text-gray-500 text-sm" dir="rtl">
                          {prayer.arabicName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {prayer.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Jummah Prayer - Separate */}
              <div className="">
                <Card className="hover:bg-gray-200 bg-gray-100 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-1">
                          {prayerTimes.jummah.name}
                        </h3>
                        <p className="text-gray-500 text-sm" dir="rtl">
                          {prayerTimes.jummah.arabicName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {prayerTimes.jummah.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}