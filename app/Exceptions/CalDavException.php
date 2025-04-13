<?php

namespace App\Exceptions;

use Exception;

class CalDavException extends Exception
{
    public function __construct(array $headers, string $response, string $ical)
    {
        parent::__construct(json_encode([
            'headers' => $headers,
            'response' => $response,
            'ical' => $ical,
        ]));
    }
}
