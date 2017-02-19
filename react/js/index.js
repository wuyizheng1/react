var healthApp =angular.module('health',['ui.router'])
    
	.config(function($stateProvider,$urlRouterProvider,$urlMatcherFactoryProvider){

		$urlRouterProvider.otherwise('/navbar/home');

		$urlMatcherFactoryProvider.caseInsensitive(true);

		$stateProvider
		

		.state('navbar',{
			url:'/navbar',
			templateUrl:'./template/navbar.html',
			controller:'navbarController'
		})
		.state('navbar.home',{
			url:'/home',
			templateUrl:'./template/home.html',
			controller:'homeController'
		})
		// .state('navbar.medicineList',{
		// 	url:'/foodList/:id/:page',
		// 	templateUrl:'./template/medicineList.html',
		// 	controller:'medicineListController'
		// })
		// .state('navbar.foodDetail',{
		// 	url:'/foodDetail/:id',
		// 	templateUrl:'./template/foodDetail.html',
		// 	controller:'foodDetailController'
		// })
		// 
  		.state('navbar.helList',{
          url:"/helList/:id/:page",
          templateUrl:"./template/helList.html",
          controller:"helListController"
        })


        .state('navbar.helDetail',{
           url:"/helDetail/:id",
           templateUrl:"./template/helDetail.html",
           controller:"helDetailController"
        })
	})
	.controller('homeController',function($scope){
		$scope.welcome = "欢迎来到健康大杂汇";
	})
	.controller('navbarController',function($scope,$http){
		$http({
			url:'http://localhost/php/helFenlei.php'
		}).then(function(res){
			// console.log(res.data.tngou);
			$scope.categories = res.data.tngou;
		})
	})
	// 先路由后控制器一起执行
	.controller('helListController',function($scope,$stateParams,$http){
		$http({
			url:'http://localhost/php/helList.php',
			params:{
				id:$stateParams.id, //类
				page:$stateParams.page,//第几页
                rows:9  //每页多少个  修改传过来的参数啦  php返回每页9个,第几页的
			}
		}).then(function(res){
			//上面3参数
			$scope.myLists = res.data.list;
			 // console.log(res.data.list);
			var pageCountList = [];
			var rows = 9;

			for(var i=1;i<=Math.ceil(res.data.total/rows); i++){
				pageCountList.push(i);
			}//该类 多少页
			$scope.id = $stateParams.id;
			$scope.pages = pageCountList;
		})
	})
	.controller('helDetailController',function($scope,$stateParams,$http){
		$http({
			url:'http://localhost/php/helDetail.php',
			params:{
				id:$stateParams.id
			}
		}).then(function(res){
			console.log(res.data.keywords);
			$scope.details = res.data;
			
		})
	})
	.directive("compile", function($compile) {
        return function(scope,element,attrs){
          scope.$watch(
            function(scope){
              return scope.$eval(attrs.compile);
            },
            function(value){
              element.html(value);
              $compile(element.contents())(scope);
            }
          )
        }
      })
