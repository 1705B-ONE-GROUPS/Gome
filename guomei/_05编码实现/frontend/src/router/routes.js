const routes=[
    {
        path: '/home',                                        
        name: 'Home',
        component: () => import('../views/home')            //主页面
    },
    {
        path: '/found',
        name: 'Found',
        component: () => import('../views/found'),           //发现
        children:[
            {
                path: '/found/popular',
                name: 'Popular',
                component: () => import('../views/found/popular'),           //发现--热门   
            },
            {
                path: '/found/circle',
                name: 'Circle',
                component: () => import('../views/found/circle'),           //发现--圈子   
            },
            {
                path:"/found",
                redirect:"/found/popular"
            }
        ]
    },
    {
        path: '/really',
        name: 'Really',
        component: () => import('../views/really'),          //真划算
        children:[
            {
                path: '/really/homepage',
                name: 'Homepage',
                component: () => import('../views/really/homepage'),           //真划算--首页   
            },
            {
                path: '/really/daily',
                name: 'Daily',
                component: () => import('../views/really/daily'),             //真划算--每日必抢   
            },
            {
                path:"/really",
                redirect:"/really/homepage"
            }
        ]
    },
    {
        path: '/supermarket',
        name: 'Supermarket',
        component: () => import('../views/supermarket')     //超市
    },
    {
        path: '/electric',
        name: 'Electric',
        component: () => import('../views/electric')        //电器城
    },
    {
        path: '/automobile',
        name: 'automobile',
        component: () => import('../views/automobile')      //汽车
    },
    {
        path: '/automobile/straightDown',
        name: 'StraightDown',
        component: () => import('../views/automobile/StraightDown')//汽车_直降500
    },
    {
        path: '/automobile/tire',
        name: 'Tire',
        component: () => import('../views/automobile/Tire')//汽车_轮胎满减
    },
    {
        path: '/automobile/notProvide',
        name: 'NotProvide',
        component: () => import('../views/automobile/NotProvide')//汽车_不提供服务
    },
    {
        path: '/decoration',
        name: 'Decoration',
        component: () => import('../views/decoration')      //家居家装
    },
    {
        path: '/intelligence',
        name: 'Intelligence',
        component: () => import('../views/intelligence')     //智能
    },
    {
        path: '/butler',
        name: 'Butler',
        component: () => import('../views/butler')          //管家
    },
    {
        path: '/user/login',
        name: 'Login',
        component: () => import('../views/user/login')      //用户登录
    },
    {
        path: '/user/registry',
        name: 'Registry',
        component: () => import('../views/user/registry')   //用户注册
    },
    {
        path: '/user/forgot_password',
        name: 'ForgotPassword',
        component: () => import('../views/user/forgotPassword')//用户忘记密码
    },
    {
        
        path:'/',
        redirect:"/home"  
    }
  ]
  export default routes