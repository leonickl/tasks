<?php

namespace App\Parser;

trait Setters
{
    public function setCompleted(bool $value): void
    {
        $this->vtodo->STATUS = $value ? 'COMPLETED' : 'NEEDS-ACTION';
    }

    public function setSummary(string $value): void
    {
        $this->vtodo->SUMMARY = $value;
    }

    public function setUid(string $value): void
    {
        $this->vtodo->UID = $value;
    }

    public function setDescription(string $value): void
    {
        $this->vtodo->DESCRIPTION = $value;
    }

    public function setDue(string $value): void
    {
        $this->vtodo->remove('DUE');

        if (! $value) {
            return;
        }

        if (str_contains($value, 'T')) {
            $this->vtodo->add('DUE', $value);

            return;
        }

        $this->vtodo->add('DUE', $value, ['VALUE' => 'DATE']);

    }

    public function setPriority(int $value): void
    {
        $this->vtodo->PRIORITY = $value;
    }

    public function setTags(array $value): void
    {
        $this->vtodo->remove('CATEGORIES');
        $this->vtodo->add('CATEGORIES', $value);
    }

    public function setParentUid(?string $value): void
    {
        // TODO: test this

        if ($value === null || $value === '') {
            $this->vtodo->remove('RELATED-TO');
        } else {
            $this->vtodo->add('RELATED-TO', $value);
        }
    }
}
