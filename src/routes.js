import React from 'react';

const Root =React.lazy(()=>import("./pages/Home/indexRoot"));
const Account = React.lazy(()=> import("./pages/Pages/Account"));
const routes = [

    {path: "/", component: Root, isWithoutLayout: true, exact: true},
    {path: "/home", component: Root},
    { path: "/profile", component: Account },

];


export default routes;