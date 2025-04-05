<?php

namespace App\Http\Controllers;

use App\Models\Tag;

class TagController extends Controller
{
    public function tags()
    {
        return inertia('Tags', [
            'title' => 'Tags',
            'tags' => Tag::allTags(),
        ]);
    }

    public function people()
    {
        return inertia('Tags', [
            'title' => 'People',
            'tags' => Tag::allPeople(),
        ]);
    }
}
