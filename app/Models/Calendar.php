<?php

namespace App\Models;

use App\Client;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

/**
 * @property int $id
 * @property int $remote_id
 * @property string $href
 * @property string $name
 * @property string $ctag
 * @property string $color
 * @property bool $default
 * @property-read Remote $remote
 * @property-read Collection<int, Task> $tasks
 * @property-read string $full_href
 */
class Calendar extends Model
{
    use HasFactory;

    protected $fillable = ['remote_id', 'href', 'name', 'ctag', 'color'];

    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'taskCount' => count($this->tasks),
            'taskCountOpen' => count($this->tasks->filter(fn (Task $task) => ! $task->completed)),
        ];
    }

    public static function default(?Calendar $calendar = null): ?self
    {
        if ($calendar !== null) {
            Calendar::all()->each(function (Calendar $calendar) {
                $calendar->default = false;
                $calendar->save();
            });

            $calendar->default = true;
            $calendar->save();
        }

        return self::query()->where('default', true)->first();
    }

    public function saveOrUpdate(): void
    {
        if (Calendar::query()->where('remote_id', $this->remote_id)->where('href', $this->href)->exists()) {
            $calendar = Calendar::query()->where('remote_id', $this->remote_id)->where('href', $this->href)->first();

            $calendar->name = $this->name;
            $calendar->color = $this->color;

            $calendar->save();

            return;
        }

        $this->save();
    }

    public function status()
    {
        return $this->ctag === Client::ctag($this);
    }

    public function remote(): BelongsTo
    {
        return $this->belongsTo(Remote::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function fullHref(): Attribute
    {
        return Attribute::get(fn () => trim($this->remote->href, '/').'/'.Arr::last(explode('/', (trim($this->href, '/')))));
    }
}
