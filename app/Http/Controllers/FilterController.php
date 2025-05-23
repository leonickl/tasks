<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use Illuminate\Http\RedirectResponse;

class FilterController extends Controller
{
    public function index()
    {
        return inertia('Filters', [
            'predefined' => [
                'tasks.all' => 'All',
                'tasks.today' => 'Today',
                'tasks.tomorrow' => 'Tomorrow',
                'tasks.last-modified' => 'Last Modified',
            ],
            'filters' => Filter::all(),
        ]);
    }

    public function store(): RedirectResponse
    {
        $filter = new Filter;
        $filter->name = 'New Filter';
        $filter->filter = '[]';
        $filter->save();

        return redirect()->route('filters.show', $filter);
    }

    public function show(Filter $filter)
    {
        return inertia('Filter', ['filter' => $filter]);
    }

    public function update(Filter $filter): RedirectResponse
    {
        $filter->name = request('name');
        $filter->filter = request('filter');
        $filter->save();

        return back();
    }
}
