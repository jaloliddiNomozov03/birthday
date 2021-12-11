import React from 'react';

const Root =React.lazy(()=>import("./pages/Home/indexRoot"));
const Account = React.lazy(()=> import("./pages/Pages/Account/Account"));
const Form = React.lazy(()=> import("./pages/form/Form"));
const Fff = React.lazy(()=>import("./pages/Pages/test/basic"))
const routes = [

    {path: "/", component: Root, isWithoutLayout: true, exact: true},
    {path: "/home", component: Root, isWithoutLayout: true, exact: true},
    { path: "/profile", component: Account},
    { path: "/form", component: Fff},

];


export default routes;