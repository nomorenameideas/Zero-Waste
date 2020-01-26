<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controll as BaseController;

class Controll extends BaseController
{
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'expires_in' => Auth::factory()->getTTL() * 60
        ], 200);
    }
}
