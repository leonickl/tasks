<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\RedirectResponse;

class CalendarController extends Controller
{
    public function index(Calendar $calendar)
    {
        return inertia('Tasks', [
            'title' => 'Calendar ' . $calendar->name,
            'filter' => 'forCalendar',
            'params' => [$calendar],
        ]);
    }

    public function default(Calendar $calendar): RedirectResponse
    {
        Calendar::default($calendar);

        return back();
    }
}
