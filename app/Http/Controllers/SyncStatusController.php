<?php

namespace App\Http\Controllers;

use App\Models\Task;

class SyncStatusController extends Controller
{
    public function latest()
    {
        return Task::query()->latest()->first(['updated_at'])?->updated_at ?? today();
    }
}
