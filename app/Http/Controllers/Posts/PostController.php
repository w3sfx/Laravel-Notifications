<?php

namespace App\Http\Controllers\Posts;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index(Post $post){
        $posts = $post->paginate();

        return view('posts.index', compact('posts'));
    }
}
