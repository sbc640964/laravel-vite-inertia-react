
import React from 'react'
import {render} from 'react-dom'
import {createInertiaApp} from '@inertiajs/inertia-react'

import '../css/app.css';

import {InertiaProgress} from '@inertiajs/progress'
InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default
    },
    setup({el, App, props}) {
        render(React.createElement(App, props), el)
    },
})

//require('./bootstrap');
