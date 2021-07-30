<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function getCart()
    {
        $cart = session()->get('cart');
//        dd($cart);
        return response()->json($cart);
    }

    public function addToCart($id)
    {
        $product =Product::findOrFail($id);
        $cart = session()->get('cart');
        if (!$cart){
            $cart= [
               $id=> [
                   'title'=>$product->title,
                   'price'=>$product->price,
                   'description'=>$product->description,
                   'image'=>$product->image,
                   'quantity'=>1,
               ]
            ];
        }
        $cart[$id] =[
            'title'=>$product->title,
            'price'=>$product->price,
            'description'=>$product->description,
            'image'=>$product->image,
            'quantity'=>1,
        ];
        session()->put('cart',$cart);
//        dd(session()->get('cart'));
        return response()->json($cart);
    }
}
