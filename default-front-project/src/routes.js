import HelloWorld from './components/HelloWorld'

export const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        // redirect: '/hello-world',
        // children: [
        //     {
        //         path: '/view',
        //         name: 'View',
        //         component: View,
        //     },
        // ]
    }
];