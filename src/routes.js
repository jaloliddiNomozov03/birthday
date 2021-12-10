import React from 'react';

const Root =React.lazy(()=>import("./pages/Home/indexRoot"));
const Account = React.lazy(()=> import("./pages/Pages/Account/Account"));
const Form = React.lazy(()=> import("./pages/form/Form"));
const routes = [

    {path: "/", component: Root, isWithoutLayout: true, exact: true},
    {path: "/home", component: Root, isWithoutLayout: true, exact: true},
    { path: "/profile", component: Account},
    { path: "/form", component: Form},

];


export default routes;