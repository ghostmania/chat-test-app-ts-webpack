var module = angular.module('myApp', []);

module.component('heros', {
	template: "My heros:",
  controller: function herosController() {},
  controllerAs: "$ctrl"
})

angular.element(document).ready(function() {
  angular.bootstrap(document, ["myApp"]);
});