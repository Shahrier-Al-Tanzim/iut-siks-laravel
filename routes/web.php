<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EventController;

Route::get('/', function () {
    return Inertia::render('home', [
        'statistics' => [
            'members' => '500+',
            'events' => '20+',
            'articles' => '100+',
            'years' => '14+',
        ]
    ]);
})->name('home');



Route::get('/events', function () {
    return Inertia::render('events', [
        'events' => [
            [
                'id' => '1',
                'title' => 'Seerah Quiz',
                'date' => 'May 28, 2025',
                'description' => 'Test your knowledge about the life of Prophet Muhammad (PBUH) in this engaging quiz.',
                'status' => 'available'
            ],
            [
                'id' => '2',
                'title' => 'Poster design competition',
                'date' => 'May 28, 2025',
                'description' => 'Showcase your creativity in designing and calligraphy with an Islamic theme.',
                'status' => 'available'
            ],
            [
                'id' => '3',
                'title' => 'Case Competition',
                'date' => 'May 26, 2025',
                'description' => 'Brainstorm and present innovative ideas to solve challenges faced by the Muslim community.',
                'status' => 'available'
            ],
            [
                'id' => '4',
                'title' => 'Attention Maestro',
                'date' => 'May 28, 2025',
                'description' => 'Participate in a fun and interactive event to test your focus and attention skills.',
                'status' => 'available'
            ],
            [
                'id' => '5',
                'title' => 'Archery Competition',
                'date' => 'May 28, 2025',
                'description' => 'Participate in a fun and interactive event to test your focus and attention skills.',
                'status' => 'coming-soon'
            ]
        ]
    ]);
})->name('events');




Route::get('/prayer-times', function () {
    return Inertia::render('prayer-times', [
        'prayerTimes' => [
            'fajr' => ['name' => 'Fajr', 'arabicName' => 'الفجر', 'time' => '04:50 AM'],
            'dhuhr' => ['name' => 'Dhuhr', 'arabicName' => 'الظهر', 'time' => '1:20 PM'],
            'asr' => ['name' => 'Asr', 'arabicName' => 'العصر', 'time' => '5:00 PM'],
            'maghrib' => ['name' => 'Maghrib', 'arabicName' => 'المغرب', 'time' => '6:40 PM'],
            'isha' => ['name' => 'Isha', 'arabicName' => 'العشاء', 'time' => '8:30 PM'],
            'jummah' => ['name' => 'Jummah', 'arabicName' => 'الجمعة', 'time' => '1:30 PM']
        ]
    ]);
})->name('prayer-times');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// Seerah Fest Event Routes
$seerahFest = [
    'festName' => 'Annual IUT Seerah Fest 1446',
    'organizer' => 'IUT Society of Islamic Knowledge Seekers (SIKS)',
    'events' => [
        [
            'name' => 'Poster Design Competition',
            'description' => 'Showcase your creativity by designing a poster that visually communicates an Islamic theme or message. Focus on clarity, originality, and impactful presentation—let your artwork inspire and educate!',
            'details' => [
                'eligibility' => 'Students of IUT-OIC',
                'posterSize' => '12 x 18 inches',
                'rules' => [
                    'Do not include human or animal faces',
                    'AI-generated designs will be disqualified'
                ],
                'registrationFee' => 'Free',
                'format' => 'Individual',
                'prizes' => 'Exciting prizes for top designs',
                'eventDate' => 'To Be Announced'
            ],
            'howItWorks' => [
                'Design your poster according to the competition rules.',
                'Submit your poster before the deadline.',
                'Wait for the results and see if your creativity stands out!'
            ],
            'winners' => [
                ['rank' => 1, 'name' => 'ID - 210012130'],
                ['rank' => 2, 'name' => 'Mehedi Hasan Pranto'],
                ['rank' => 3, 'name' => 'Atik Shahriar'],
                ['rank' => 4, 'name' => 'Abdullah al Roman'],
                ['rank' => 5, 'name' => 'Md Shahamat Irisham']
            ],
            'contact' => [
                [
                    'name' => 'Mohammad Ilin Rahman',
                    'email' => 'ilinrahman@iut-dhaka.edu',
                    'phone' => '+8801751636585',
                    'whatsapp' => '+8801576608666'
                ],
                [
                    'name' => 'Mahmudul Hasan Mahi',
                    'email' => 'mahmudulmahi@iut-dhaka.edu',
                    'phone' => '+8801316171120',
                    'whatsapp' => '+8801316171120'
                ]
            ]
        ],
        [
            'name' => 'Case Competition',
            'description' => 'Dive into a unique competition where you\'ll address real-world challenges or craft innovative, ethical business models, all through the lens of Islamic values—showcase your creativity, teamwork, and problem-solving skills while making a positive impact on society.',
            'details' => [
                'eligibility' => 'Students of IUT-OIC',
                'teamSize' => 'Up to 4 members',
                'genderSegregation' => 'Only all-male or all-female teams',
                'registrationFee' => 'Free',
                'format' => 'Team (2-4 members)',
                'prizes' => 'Exciting prizes for top teams',
                'eventDate' => 'To Be Announced'
            ],
            'howItWorks' => [
                'Form a team of up to 4 members (all-male or all-female).',
                'Register your team using the form.',
                'Phase-1: Submit your solution document by the deadline.',
                'Phase-2: If shortlisted, present your solution in the final round.',
                'Winners will be selected based on creativity, feasibility, and alignment with Islamic values.'
            ],
            'winners' => [
                ['rank' => 1, 'name' => 'Team Redemption', 'details' => 'Salaha - A Seerah compliant travel kit for muslim travellers'],
                ['rank' => 2, 'name' => 'Team Ababil', 'details' => 'Branding with Barakah'],
                ['rank' => 3, 'name' => 'Team Nahwa Al-Fitrah', 'details' => 'A gender based values curriculum'],
                ['rank' => 4, 'name' => 'Team Lote Tree', 'details' => 'Addiction: From Saqr to Qalb'],
                ['rank' => 5, 'name' => 'Team One Tech', 'details' => 'One App: A Digital Solution for Muslim Ummah']
            ],
            'contact' => [
                [
                    'name' => 'Mohammad Ilin Rahman',
                    'email' => 'ilinrahman@iut-dhaka.edu',
                    'phone' => '+8801751636585',
                    'whatsapp' => '+8801576608666'
                ],
                [
                    'name' => 'Mahmudul Hasan Mahi',
                    'email' => 'mahmudulmahi@iut-dhaka.edu',
                    'phone' => '+8801316171120',
                    'whatsapp' => '+8801316171120'
                ]
            ]
        ],
        [
            'name' => 'Attention Maestro',
            'description' => 'Experience a unique event where your listening skills and attention to detail are put to the test. Attend a live speech by a distinguished speaker, then immediately participate in a quiz based on the talk. Sharpen your focus, test your joints, and compete for exciting prizes. This is your chance to engage, learn, and showcase your attentiveness in a fun and interactive way!',
            'details' => [
                'eligibility' => 'Students of IUT-OIC',
                'format' => 'Individual',
                'registrationFee' => 'Free',
                'prizes' => 'Prizes for top scorers',
                'eventDate' => 'To Be Announced'
            ],
            'howItWorks' => [
                'Attend the live speech session.',
                'Pay close attention to the speaker\'s message.',
                'Right after the speech, participate in the quiz and showcase your understanding.'
            ],
            'winners' => [
                ['rank' => 1, 'name' => '230042116'],
                ['rank' => 2, 'name' => '230041206'],
                ['rank' => 3, 'name' => '230011250']
            ],
            'contact' => [
                [
                    'name' => 'Mohammad Ilin Rahman',
                    'email' => 'ilinrahman@iut-dhaka.edu',
                    'phone' => '+8801751636585',
                    'whatsapp' => '+8801576608666'
                ],
                [
                    'name' => 'Mahmudul Hasan Mahi',
                    'email' => 'mahmudulmahi@iut-dhaka.edu',
                    'phone' => '+8801316171120',
                    'whatsapp' => '+8801316171120'
                ]
            ]
        ],
        [
            'name' => 'Seerah Quiz',
            'description' => 'Test your knowledge about the life and teachings of Prophet Muhammad (PBUH) in this engaging and competitive quiz. Sharpen your understanding of Seerah and compete for exciting prizes!',
            'details' => [
                'eligibility' => 'Students of IUT-OIC',
                'format' => 'Individual participation',
                'registrationFee' => 'Free',
                'prizes' => 'Prizes for top scorers',
                'eventDate' => 'To Be Announced'
            ],
            'howItWorks' => [
                'Register online using the form.',
                'Attend the quiz session on the event date.',
                'Answer questions based on the Seerah of Prophet Muhammad (PBUH).',
                'Top scorers will be awarded exciting prizes.'
            ],
            'winners' => [
                ['rank' => 1, 'name' => 'Rafid Waihan Abid'],
                ['rank' => 2, 'name' => 'Hasan Ul Akib'],
                ['rank' => 3, 'name' => 'Md. Mushfiqul Islam'],
                ['rank' => 4, 'name' => 'Md Sajib Mahmud'],
                ['rank' => 5, 'name' => 'Md Shahriar Hossain Sohag'],
                ['rank' => 6, 'name' => 'Mahajib Tabassum']
            ],
            'contact' => [
                [
                    'name' => 'SIKS team',
                    'email' => 'siks@iut-dhaka.edu',
                    'phone' => '+880 1234-567890',
                    'whatsapp' => '+880 1234-567890'
                ]
            ]
        ]
    ]
];

// Generate routes for each event
foreach ($seerahFest['events'] as $event) {
    $routeName = strtolower(str_replace(' ', '-', $event['name']));
    
    Route::get('/events/' . $routeName, function () use ($event) {
        return Inertia::render('event-details', [
            'event' => $event
        ]);
    })->name('events.' . str_replace('-', '.', $routeName));
}
