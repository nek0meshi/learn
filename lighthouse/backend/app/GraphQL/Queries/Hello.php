<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

final readonly class Hello
{
    public function __invoke(): array
    {
      return [
        'world' => 'test',
        'foo' => 'bar',
        'list' => ['a', 'b', 'c'],
      ];
    }
}
