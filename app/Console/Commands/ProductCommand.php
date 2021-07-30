<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use mysql_xdevapi\Exception;

class ProductCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:clone';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command cloneData';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $products = Http::get('https://fakestoreapi.com/products')->json();
        try {
            foreach ($products as $item){
                $product = Product::create($item);
                $product->save();
            }
            $this->info('clone success');
        }catch (Exception $exception){
            $this->error($exception->getMessage());
        }

    }
}
