<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;   


class EventController extends Controller
{
      public function index()
    {
        // $events = Event::all(); // or paginate if many
        return Inertia::render('events/index', [
            'events' => "amir"
        ]);
    }

    public function show()
    {
        return Inertia::render('events/show', [
            'events' => "amir" 
        ]);
    }
}