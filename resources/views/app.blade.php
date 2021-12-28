<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Zed</title>

        <!-- Fonts -->

        <!-- Scripts -->
        {{ vite_assets() }}

        <!-- Styles -->

    </head>
    <body>
        @inertia
    </body>
</html>
