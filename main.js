angular.module('StackApp', []).config(function ($routeProvider) {

	'use strict';

	$routeProvider
		.when('/', {
			templateUrl: "./main_view.html",
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

});

angular.module('StackApp').controller('MainCtrl', function ($scope) {
	'use strict';

	$scope.reverse = 'false';

	$scope.myList = [
		{id:0, text:'HTML5 Boilerplate'},
		{id:1, text:'AngularJS'},
		{id:2, text:'Karma'},
		{id:3, text:'Hello'},
		{id:4, text:'World'},
		{id:5, text:'How'},
		{id:6, text:'Are'},
		{id:7, text:'You'},
		{id:8, text:'?'},
		{id:9, text:'I'},
		{id:10, text:'write'},
		{id:11, text:'more'},
		{id:12, text:'to'},
		{id:13, text:'make'},
		{id:14, text:'the'},
		{id:15, text:'list'},
		{id:16, text:'longer'}
	];

	$scope.$watch('reverse', function () {
		$scope.setOrder();
	});

	$scope.setOrder = function () {

		console.log('change', $scope.reverse);

		if ($scope.reverse === 'random') {

			var t = [];

			for (var i = 0; i < $scope.myList.length; i++) {
				var r = Math.floor(Math.random() * $scope.myList.length);
				while (inArray(t,r)) {
					r = Math.floor(Math.random() * $scope.myList.length);
				}
				t.push(r);
				$scope.myList[i].order = r;
			}

		} else {

			for (var i = 0; i < $scope.myList.length; i++) {
				if ($scope.reverse === 'false') {
					$scope.myList[i].order = i;
				} else {
					$scope.myList[i].order = ($scope.myList.length - 1 - i);
				}
			}
		}
	};

	function inArray(a, value) {
		for (var i = 0; i < a.length; i++) {
			if (a[i] === value) {
				return true;
			}
		}
		return false;
	}

});
