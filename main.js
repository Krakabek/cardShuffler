angular.module('StackApp', []).config(function ($routeProvider) {

	'use strict';

	$routeProvider
		.when('/', {
			template: '<h1>Animate Order</h1>' +
						'<form action="">' +
							'<label for="reverse">reverse = true</label><br>' +
							'<input type="radio" value="true" name="reverse" ng-model="reverse"><br><br>' +
							'<label for="reverse">reverse = false</label><br>' +
							'<input type="radio" value="false" name="reverse" ng-model="reverse"><br><br>' +
							'<label for="reverse">reverse = random (click button below to shuffle again)</label><br>' +
							'<input type="radio" value="random" name="reverse" ng-model="reverse">' +
						'</form>' +
						'<br><br>' +
						'<input type="button" ng-click="reverse = \'random\';setOrder()" value="setOrder()">' +
						'<br><br>' +
						'<ul id="list" ng-style="{height: ((myList.length * 40) + \'px\')}">' +
							'<li ng-repeat="item in myList" ng-style="{top: ((item.order * 40) + \'px\')}">{{$index}} - {{item.order}}. {{item.text}}</li>' +
						'</ul>',
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
