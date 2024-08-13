<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::insert(array_map(
          fn ($item) => [
            'title' => 'タスク' . $item,
            'status' => 0,
          ],
          range(1, 10)
        ));
    }
}
