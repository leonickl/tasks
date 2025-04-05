<?php

namespace App\Http\Controllers;

use App\Client;
use App\Jobs\SyncRemote;
use App\Models\Remote;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RemoteController extends Controller
{
    public function index()
    {
        return inertia('Remotes', ['remotes' => Remote::all()]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'href' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);

        Remote::create([
            'name' => $validated['name'],
            'href' => $validated['href'],
            'username' => $validated['username'],
            'password' => $validated['password'],
        ]);

        return back();
    }

    public function update(Remote $remote): RedirectResponse
    {
        $validated = request()->validate([
            'name' => 'required',
            'href' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);

        $remote->update([
            'name' => $validated['name'],
            'href' => $validated['href'],
            'username' => $validated['username'],
            'password' => $validated['password'],
        ]);

        return back();
    }

    public function check(Remote $remote): void
    {
        Client::calendars($remote);
    }

    public function calendars(Remote $remote)
    {
        return inertia('Calendars', [
            'remote' => $remote,
        ]);
    }

    public function sync(Remote $remote): RedirectResponse
    {
        SyncRemote::dispatch($remote);

        return back()->info('Syncing ...');
    }

    public function clear(Remote $remote): RedirectResponse
    {
        foreach ($remote->calendars as $calendar) {
            foreach ($calendar->tasks as $task) {
                $task->delete();
            }

            $calendar->delete();
        }

        return back();
    }
}
