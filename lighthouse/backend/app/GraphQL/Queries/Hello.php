<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

final readonly class Hello
{
    public function __invoke(): string
    {
      return 'world';
    }
}
