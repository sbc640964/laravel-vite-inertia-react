import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        const page = (await import(`./Pages/${name}.jsx`)).default;
        console.log(page)
        return page
    },
    setup({ el, App, props }) {
        render(App({...props}), el)
    },
})

//require('./bootstrap');
