<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// API route group
$router->group(['prefix' => 'api','middleware'=>'core'], function () use ($router) {
    // Matches "/api/register
    $router->post('register', 'U-Controll@register');
    // Matches "/api/login
    $router->post('login', 'U-Controll@login');
    $router->get('profile', 'U-Controll@profile');
    $router->post('charge', 'U-Controll@charge');

    $router->group(['prefix' => 'admin'], function () use ($router) {

        //Category routes
        $router->get('category', 'Cat-Controll@index');
        $router->post('category/store', 'Cat-Controll@store');
        $router->delete('category/delete/{id}', 'Cat-Controll@destroy');

        //Meals routes
        $router->get('meal', 'M-Controll@index');
        $router->post('meal/store', 'M-Controll@store');
        $router->delete('meal/delete/{id}', 'M-Controll@destroy');

        //Orders routes
        $router->get('order', 'O-Controll@index');
        $router->post('order/accept/{id}', 'O-Controll@accept');
        $router->post('order/complete/{id}', 'O-Controll@complete');
        $router->post('order/cancel/{id}', 'O-Controll@cancel');
    });

    $router->group(['prefix' => 'customer'], function () use ($router) {

        //Category routes
        $router->get('category', 'Cat-Controll@index');

        //Meals routes
        $router->get('meal', 'M-Controll@index');

        //Orders routes
        $router->get('order', 'O-Controll@index');
        $router->post('order/store', 'O-Controll@store');
    });
});
