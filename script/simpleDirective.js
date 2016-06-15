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
            console.log(v + " ��ʱ: " + (time[1]-time[0])/1000 + " s");
            time = [];
        });
        //$scope.$on("$destory", function () {
        //    alert("I'll be there")
        //})
    })
    .controller("bindHtmlCtrl", function ($scope, $sce) {
        //$scope.content = $sce.trustAsHtml('<a href="http://www.baidu.com">�ٶ�</a>');
        $scope.content = '<a href="http://www.baidu.com">�ٶ�</a>';
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

//ҳ��ж��
//window.onunload = function () {
//    console.log("unload")
//};
////ҳ��ж��
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
//// ����Promiseʵ��p1
//var p1 = new Promise(function(resolve, reject){
//    setTimeout(function(){
//        console.log('hello1');
//        // 1����޸�promiseʵ����״̬Ϊfulfilled
//        resolve('hello1');
//    },1000);
//});
//// ����p1��ִ�гɹ��¼���������������Promiseʵ��p2
//// �ô��������������ؽ��
//var p2 = p1.then(function(val){
//    var newVal = 'hello2';
//    console.log(val);
//    console.log(newVal);
//    return newVal;
//});
//// ����p2��ִ�гɹ��¼���������������Promiseʵ��p3
//// �ô���������һ��Promiseʵ������1����Promiseʵ����״̬ת��Ϊrejected
//var p3 = p2.then(function(val){
//    console.log(val);
//    var tmp = new Promise(function(resolve, reject){
//        setTimeout(function(){
//            reject(new Error('my error!'));
//        }, 1000);
//    });
//    return tmp;
//});
//// ����p3��ִ�гɹ��¼���������������Promiseʵ��p4
//// ����p3�Ĵ����������ص�Promiseʵ��״̬Ϊrejected�����p3��ִ�гɹ��¼�������������ִ�У�����p3û��ִ��ʧ���¼�����������˻Ὣ����Ȩ���´��ݸ�p5��ִ��ʧ���¼���������
//var p4 = p3.then(function(val){
//    console.log('skip');
//});
////  ����p4��ִ�гɹ��¼���������������Promiseʵ��p5
//var p5 = p4.catch(function(reason){
//    console.log(reason);
//});
//�ļ�������׷��
function analysis () {

}
