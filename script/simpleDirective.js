angular.module('myApp', ["ui.router", "filterApp"])
    .directive('zpCus',function () {
        return {
            restrict: 'AE',
            template:"name:{{cusInfo.name}},age:{{cusInfo.age}},position:{{cusInfo.position}}"
        }
    })
    .directive('zpCusHtml', function () {
        return {
            restrict: 'AE',
            scope: {
                cusInfo: '=',
                desktop: '='
            },
            templateUrl: 'zpCusHtml.html',
            link:function (scope, ele, attrs) {
                ele.text(scope.cusInfo.name);
                console.table(attrs);
				console.table(scope);
            }
        }
    })
    .controller('Ctrl', function ($scope, $location, $state, $q, $timeout) {
        $scope.cusInfo = {
            name: 'zhangp',
            age: 26,
            position: 'web dev'
        };
        $scope.desktop = {
            computer: 'dell',
            mobilePhone: 'iPhone 5s',
            cup: 'zojirushi'
        };
        this.age = 20;
        $scope.wholePage = "whole page";
        $scope.items = [1,2,3,4,5];
        $scope.names = ["zhangp", "xiaog", "liangsy"];
        $scope.change = function () {
            ++$scope.cusInfo.age;
        };
        var s=$scope.s=123;
        $scope.show = function () {
            alert(s);
            alert($scope.s);
        };
        var time = [];
        var xx = function zhp(name) {
            var a = $q.defer();
            time.push(new Date());
            setTimeout(function () {
                a.resolve("hehe-zhp");
            }, 10*1000);
            return a.promise;
        };
        xx().then(function (v) {
            time.push(new Date());
            console.log(v + " 耗时: " + (time[1]-time[0])/1000 + " s");
            time = [];
        });
        //$scope.$on("$destory", function () {
        //    alert("I'll be there")
        //})
    })
    .controller("bindHtmlCtrl", function ($scope, $sce) {
        //$scope.content = $sce.trustAsHtml('<a href="http://www.baidu.com">百度</a>');
        $scope.content = '<a href="http://www.baidu.com">百度</a>';
        $scope.img = '<img src="../media/pic.png" alt=""/>';
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("/","index").otherwise("index");
        $stateProvider
            .state("index",{
                url: "/index"
            })
            .state("index.state1",{
                url: "/state1",
                views:{
                    "main@":{
                        templateUrl: "./state1.html"
                    }
                }
            })
            .state("index.state1.list",{
                url: "/list1",
                views:{
                    "main@":{
                        templateUrl: "./state1.list.html"
                    }
                }
            })
            .state("index.state2",{
                url: "/state2",
                views:{
                    "main@":{
                        templateUrl: "./state2.html"
                    }
                }
            })
            .state("index.state2.list",{
                url: "/list2",
                views:{
                    "state2View":{
                        templateUrl: "./state2.list.html"
                    }
                }
            })
    });
angular.module("filterApp",[]).
    filter("toHtml", function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text)
        }
    });
//angular.module("myApp", ["filterApp"])
//    .controller("Ctrl", function() {
//
//    })
//    .controller("bindHtmlCtrl", function() {
//
//    });

//页面卸载
//window.onunload = function () {
//    console.log("unload")
//};
////页面卸载
//window.onbeforeunload = function () {
//    console.log("before unload");
//};
//window.onload = function () {
//    alert("Hi");
//};
//setTimeout(function(){
//    left(function(){
//        setTimeout(function(){
//            left(function(){
//                setTimeout(function(){
//                    left();
//                },2000);
//            });
//        }, 2000);
//    });
//}, 2000);
//// 创建Promise实例p1
//var p1 = new Promise(function(resolve, reject){
//    setTimeout(function(){
//        console.log('hello1');
//        // 1秒后修改promise实例的状态为fulfilled
//        resolve('hello1');
//    },1000);
//});
//// 订阅p1的执行成功事件处理函数，并创建Promise实例p2
//// 该处理函数将立即返回结果
//var p2 = p1.then(function(val){
//    var newVal = 'hello2';
//    console.log(val);
//    console.log(newVal);
//    return newVal;
//});
//// 订阅p2的执行成功事件处理函数，并创建Promise实例p3
//// 该处理函数返回一个Promise实例，并1秒后该Promise实例的状态转换为rejected
//var p3 = p2.then(function(val){
//    console.log(val);
//    var tmp = new Promise(function(resolve, reject){
//        setTimeout(function(){
//            reject(new Error('my error!'));
//        }, 1000);
//    });
//    return tmp;
//});
//// 订阅p3的执行成功事件处理函数，并创建Promise实例p4
//// 由于p3的处理函数所返回的Promise实例状态为rejected，因此p3的执行成功事件处理函数将不被执行，并且p3没有执行失败事件处理函数，因此会将控制权往下传递给p5的执行失败事件处理函数。
//var p4 = p3.then(function(val){
//    console.log('skip');
//});
////  订阅p4的执行成功事件处理函数，并创建Promise实例p5
//var p5 = p4.catch(function(reason){
//    console.log(reason);
//});
//文件分析与追踪
function analysis () {

}
