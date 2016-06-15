/**
 * Created by Administrator on 2016/3/21 0021.
 */


var myApp=angular.module("myApp",['ui.router']);

//controller
myApp
    .controller('testExample',function ($scope){
        $scope.zhangp=["zhangp909153", 0, 1, 2, 3,'hehehehe'];
        $scope.name = 'zhangp';
    })
    // .controller('CartController',function ($scope) {
    //     $scope.items = [
    //         {name: "雷柏（Rapoo） V500 机械游戏键盘 机械黄轴", quantity: 1, price: 199.00},
    //         {name: "雷柏（Rapoo） V20 光学游戏鼠标 黑色烈焰版", quantity: 1, price: 139.00},
    //         {name: "AngularJS权威教程", quantity: 2, price: 84.20}
    //     ];
    //     $scope.remove = function (index) {
    //         console.log(index);
    //         $scope.items.splice(index, 1);
    //     }
    // })
    .controller('test01',function ($scope,$rootScope) {
        $scope.arrays ={
            'info01':{'name':'zhangp', 'age':27},
            'info02':{'name':'lidl','age':28}
        };
        $scope.arr=[
            {name:"zhangp",age:26},
            {name:"leo",age:'27p'},
            {name:"wei",age:28}
        ];
        $rootScope.wholePage = '全域';
        $rootScope.name = 'zhangp';
        $scope.time=$.now();
        // $scope.search01 = function (item) {
        //     return item.age === 26;
        // }
    })
    .controller('myCtrl', function ($scope) {
        $scope.name = 'zhangp';
        $scope.age = 27
    });

//router
myApp
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.when("/","index").otherwise('index');

        //$stateProvider.state(name,{url,templateUrl})
        //name需要层级关系，a a.list

        $stateProvider
            .state('index',{
                url: "/index",
                templateUrl: 'views/state1.html'
            })

            .state('index.list',{
                url:'/state1.list', // aa/state1.list
                templateUrl: 'views/state1.list.html',
                controller: function ($scope) {
                    $scope.items=['首页','消息','收藏','···'];
                }
            })

            .state('b',{
                url: '/bb',
                templateUrl: 'views/state2.html'
            })

            .state('b.list',{
                url: '/state2.list',// bb/state2.list
                templateUrl: 'views/state2.list.html',
                controller: function ($scope) {
                    $scope.names=['裴勇俊','金秀贤','车太贤','Rain'];
                }
            })
});

//directive specify your directive
myApp.directive('hello', function(){
    // Runs during compile
    return {
         name: 'name01',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
         template: '<div>hello {{name}}</div>',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    };
})
//service
myApp.service('weather', function(){
    
});
myApp.filter(function search (a) {
    console.log(a);
    return a;
});

//filter
Number.prototype.power = function (n) {
    if (typeof n === 'number') {
        var a = this , b=1;
        for (var i = Math.floor(n); i >= 1; i--) {
            b = b * a;
        }
        return b
    } else {
        throw new Error('arg is not int')
    }
}
function getNumberInNormalDistribution(mean,std_dev){
    return mean+(randomNormalDistribution()*std_dev);
}

function randomNormalDistribution(){
    var u=0.0, v=0.0, w=0.0, c=0.0;
    do{
        //获得两个（-1,1）的独立随机变量
        u=Math.random()*2-1.0;
        v=Math.random()*2-1.0;
        w=u*u+v*v;
    }while(w==0.0||w>=1.0)
    //这里就是 Box-Muller转换
    c=Math.sqrt((-2*Math.log(w))/w);
    //返回2个标准正态分布的随机数，封装进一个数组返回
    //当然，因为这个函数运行较快，也可以扔掉一个
    //return [u*c,v*c];
    return u*c;
}
var a=[];
for (var i=0; i<10000; i++) {
    a.push(Math.floor(getNumberInNormalDistribution(180,10)))
}
