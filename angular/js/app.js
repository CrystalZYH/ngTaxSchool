var routerApp = angular.module('routerApp', 
        [
             'ui.router',
            //  'HomeModule',
             'CourseBulletionModule',
            // 'ngGrid', 
            // 'BookTypeModule',
            // 'BookListModule',
            // 'UserManageMoudle'
         ]
    );
/**
 * 方便获得当前状态的方法，绑到根作用域。
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider路由重定向
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '^/index',
            views: {
                '': {
                    templateUrl: 'view/index.html'
                },
                'main@index': {
                    templateUrl: 'view/home.html'
                }
            }
        });

    var hm = [  'home',
                'courseBulletion',
                'courseDownload',
                'videoClass',
                'onlineList',
                'interactivePlace'
             ];
        // hm.forEach(function(element) { //es6
        //       $stateProvider.state('index.'+element,{
        //         url:"^/"+element,
        //         views:{
        //         'main@index': {
        //                 templateUrl: 'view/'+element+'.html'
        //             } 
        //         }
        //     })         
        // }, this);

         
        for(var i = 0;  i < hm.length; i++){
            $stateProvider.state('index.'+hm[i],{
                url:"^/"+hm[i],
                views:{
                'main@index': {
                        templateUrl: 'view/'+hm[i]+'.html'
                    } 
                }
             })      
        };
        $stateProvider.state('index.courseBulletion.detail', {
            url: '/{courseId:[0-9]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                'main@index': {
                    templateUrl: 'view/courseBulletion_detail.html'
                } 
                
            }
        })        

        // .state('register',{
        //     url:'/register',
        //     templateUrl: 'view/register.html'
        // })
        // .state('bookdetail', {
        //     url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
        //     templateUrl: 'view/bookDetail.html'
        // })
});

/** 
 * 路由权限验证管理
 * userInfo role
 * admin 新增书籍  
 * normal 只能查看
 * but 出于安全问题前端不涉及角色控制
 * 权限验证 expree movie 的 controllr 提到（慕课网） 
 */
