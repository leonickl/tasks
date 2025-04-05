<?php

namespace App\Http\Controllers;

use App\Jobs\SyncAll;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;

class SettingsController extends Controller
{
    public function index()
    {
        return inertia('Settings');
    }

    public function set(): RedirectResponse
    {
        session([
            'completed' => request()->boolean('completed'),
            'per-page' => request()->integer('per-page'),
        ]);

        return back();
    }

    public function cacheAll(): RedirectResponse
    {
        Task::all()->each(fn (Task $task) => $task->save());

        return back();
    }

    public function logs(): RedirectResponse
    {
        return redirect(url('log-viewer'));
    }

    public function folder(): RedirectResponse
    {
        // TODO: implement

        return back();
    }

    public function sync(): RedirectResponse
    {
        logger()->log('info', 'starting sync...');

        SyncAll::dispatch();

        return back();
    }
}
