require.config({
	baseUrl:'./',
	paths:{ //bind-once
		'angular':'libs/angular-1.3.0.14/angular',
        'angular-ui':'libs/angular-ui-router',
		'app':'js/app',
		'utils-service':'js/utils/utils-service',
		'utils-directive':'js/utils/utils-directive',
		'home.controller':'js/controller/home.controller',
		'courseBulletion.controller':'js/controller/courseBulletion.controller'
	},
	waitSeconds: 0,
	packages:[
		// {name:'app',main:'',location:'js/'}
	],
	shim:{//定义依赖关系
		'angular' : {'exports' : 'angular'},
		'angular-ui': {deps:['angular']},
		'app': {deps:['angular','angular-ui']},
		'utils-directive': {deps:['angular','angular-ui']},
		'utils-service': {deps:['angular','angular-ui']},
		'home.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'courseBulletion.controller': {deps:['angular','angular-ui','utils-directive','utils-service']}
	}
});


require([
		// 'jquery',
        'angular',
        'angular-ui',
		'app',
		'utils-service',
		'utils-directive',
		'home.controller',
		'courseBulletion.controller'
		 ],
   function(angular){
	   //手动启动ng-app
	   angular.bootstrap(document, ['routerApp']);
   });