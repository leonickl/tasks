<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\Filter;
use App\Models\Tag;
use App\Models\Task;
use App\Tasks;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class TaskController extends Controller
{
    public function all()
    {
        return inertia('Tasks', [
            'title' => 'All Tasks',
            'tasks' => Tasks::make('all'),
        ]);
    }

    public function today()
    {
        return inertia('Tasks', [
            'title' => 'Today',
            'tasks' => Tasks::make('today'),
        ]);
    }

    public function tomorrow()
    {
        return inertia('Tasks', [
            'title' => 'Tomorrow',
            'tasks' => Tasks::make('tomorrow'),
        ]);
    }

    public function search(Request $request)
    {
        $search = strtolower($request->get('search'));

        return inertia('Tasks', [
            'title' => 'Search for "'.$search.'"',
            'tasks' => Tasks::make('search', [$search]),
        ]);
    }

    public function lastModified()
    {
        return inertia('Tasks', [
            'title' => 'Last Modified',
            'tasks' => Tasks::make('lastModified'),
        ]);
    }

    public function update(Task $task): RedirectResponse
    {
        $task->summary = request('summary', '');
        $task->due = ! empty(request('dueDate'))
            ? ! empty(request('dueTime'))
                ? Carbon::make(request('dueDate').' '.request('dueTime'))->format('Ymd\THis')
                : Carbon::make(request('dueDate'))->format('Ymd')
            : '';
        $task->priority = request()->integer('priority');
        $task->tags = $this->tags();
        $task->description = request('description', '');

        $task->save();
        $task->upload();

        return back();
    }

    public function complete(Task $task)
    {
        $task->completed = request()->boolean('completed');

        $task->save();
        $task->upload();

        return response()->json($task);
    }

    public function store(): RedirectResponse
    {
        $task = new Task;

        $uuid = (string) Str::uuid();
        $calendarId = request()->integer('calendar');

        $calendar = Calendar::query()->findOrFail($calendarId);
        $now = now()->format('Ymd\THis');

        $task->calendar_id = $calendarId;
        $task->href = trim($calendar->href, '/').'/'.$uuid.'.ics';
        $task->etag = '';
        $task->ical = 'BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//tasks.gehmasse.de//v1.0//
BEGIN:VTODO
DTSTAMP:'.$now.'
CREATED:'.$now.'
LAST-MODIFIED:'.$now.'
END:VTODO
END:VCALENDAR'; // TODO: set prodid correctly
        $task->completed = false;
        $task->summary = request('summary', '');
        $task->uid = $uuid;
        $task->description = request('description', '');
        $task->due = ! empty(request('dueDate'))
            ? ! empty(request('dueTime'))
                ? Carbon::make(request('dueDate').' '.request('dueTime'))->format('Ymd\THis')
                : Carbon::make(request('dueDate'))->format('Ymd')
            : '';
        $task->priority = request()->integer('priority');
        $task->tags = $this->tags();
        $task->parent_uid = '';

        $task->createAndUploadInitially();

        return back();
    }

    public function tag(Tag $tag)
    {
        return inertia('Tasks', [
            'title' => str_starts_with($tag, '@') ? 'Person '.$tag->name : 'Tag #'.$tag->name,
            'tasks' => Tasks::make('forTag', $tag),
        ]);
    }

    public function tags(): array
    {
        return is_array(request('tags'))
            ? array_map(fn (mixed $id) => Tag::get($id)->name, request('tags'))
            : [];
    }

    public function filter(Filter $filter)
    {
        return inertia('Tasks', [
            'title' => 'Filter',
            'tasks' => Tasks::make($filter->id),
        ]);
    }

    public function create()
    {
        return inertia('CreateTask', [
            'allTags' => Tag::all(),
            'defaultCalendar' => Calendar::default(),
            'calendars' => Calendar::all(),
        ]);
    }

    public function edit(Task $task)
    {
        return inertia('EditTask', [
            'allTags' => Tag::all(),
            'defaultCalendar' => Calendar::default(),
            'calendars' => Calendar::all(),
            'task' => $task,
            'tags' => Tag::all(),
        ]);
    }
}
