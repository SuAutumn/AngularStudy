/**
 * Created by Administrator on 2016/4/12 0012.
 */
angular.module('myApp',['ui.router'])
    .run()
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("/","index").otherwise("index");
        $stateProvider
            .state('index',{
                url:'/index',
                views:{
                    'viewA':{
                        templateUrl: 'routerA.html',
                        'controller':'Ctrl'
                    }
                }
            })
            .state('index.a1',{
                url : '/routerA',
                views : {
                    'viewB@':{templateUrl: 'page1.html'}
                }
            })
            .state('index.a2',{
                url: '/routerB',
                views: {
                    'viewB@':{templateUrl: 'page2.html'}
                }
            })
    });

