<?php

use App\Http\Controllers\CalendarController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RemoteController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/', MainController::class)->name('main');

    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('remotes', [RemoteController::class, 'index'])->name('remotes');
    Route::post('remotes', [RemoteController::class, 'store'])->name('remotes.store');
    Route::post('remotes/{remote}', [RemoteController::class, 'update'])->name('remotes.update');
    Route::get('remotes/{remote}/check', [RemoteController::class, 'check'])->name('remotes.check');
    Route::get('remotes/{remote}/calendars', [RemoteController::class, 'calendars'])->name('calendars');
    Route::get('remotes/{remote}/sync', [RemoteController::class, 'sync'])->name('sync-remote');
    Route::get('remotes/{remote}/clear', [RemoteController::class, 'clear'])->name('clear-remote');

    // Route::get('calendars')
    Route::get('calendars/{calendar}', [CalendarController::class, 'index'])->name('calendar');
    Route::any('calendars/{calendar}/default', [CalendarController::class, 'default'])->name('calendar.default');

    Route::get('filters', [FilterController::class, 'filters'])->name('filters');

    Route::get('tasks', [TaskController::class, 'today'])->name('tasks');
    Route::get('tasks/all', [TaskController::class, 'all'])->name('tasks.all');
    Route::get('tasks/today', [TaskController::class, 'today'])->name('tasks.today');
    Route::get('tasks/tomorrow', [TaskController::class, 'tomorrow'])->name('tasks.tomorrow');
    Route::get('tasks/search', [TaskController::class, 'search'])->name('tasks.search');
    Route::get('tasks/last-modified', [TaskController::class, 'lastModified'])->name('tasks.last-modified');
    Route::get('tasks/filters/{filter}', [TaskController::class, 'filter'])->name('tasks.filter');

    Route::get('filters', [FilterController::class, 'index'])->name('filters');
    Route::post('filters', [FilterController::class, 'store'])->name('filters.store');
    Route::get('filters/{filter}', [FilterController::class, 'show'])->name('filters.show');
    Route::post('filters/{filter}', [FilterController::class, 'update'])->name('filters.update');

    Route::get('tasks/create', [TaskController::class, 'create'])->name('task.create');
    Route::get('tasks/{task}', [TaskController::class, 'edit'])->name('task');

    Route::post('tasks', [TaskController::class, 'store'])->name('task.store');
    Route::post('tasks/{task}', [TaskController::class, 'update'])->name('task.update');
    Route::post('tasks/{task}/complete', [TaskController::class, 'complete'])->name('task.complete');

    Route::get('search', [TaskController::class, 'search'])->name('search');

    Route::get('tags', [TagController::class, 'tags'])->name('tags');
    Route::get('people', [TagController::class, 'people'])->name('people');
    Route::get('tags/{tag}/tasks', [TaskController::class, 'tag'])->name('tag');

    Route::get('settings', [SettingsController::class, 'index'])->name('settings');
    Route::any('set', [SettingsController::class, 'set'])->name('set');
    Route::get('cache-all', [SettingsController::class, 'cacheAll'])->name('cache-all');
    Route::get('sync', [SettingsController::class, 'sync'])->name('sync');

    Route::get('logs', [SettingsController::class, 'logs'])->name('logs');
    Route::get('app-directory', [SettingsController::class, 'folder'])->name('app-directory');
});

require __DIR__.'/auth.php';
