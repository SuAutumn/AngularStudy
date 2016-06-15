// excute bootstrap(element, modules)
modules=["ng", ["$provide", function($provide) {
	//the element binded by ng-app
	$provide.value('$rootElement',element);
}],"myApp"];

//l:1415 createInjector(modules) l:3739

//loadedModules = new HashMap([], true), l:3114
loadedModules = {
	
}
