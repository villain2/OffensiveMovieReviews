var omr = angular.module('omr', []);

omr.controller('ArticleBlockCtrl', ['$scope', '$element', function ($scope, $element)
{
	var scope 			= $scope;
}]);

omr.controller('SearchCtrl', ['$scope', '$element', function ($scope, $element)
{
	$scope.openSearchModal = function()
	{
		
	}
}]);

omr.directive('articleblock', [function()
{
	return {
		restrict: 'A',
		link: function (scope, elm, attrs)
		{
			var blockbg			= elm.find('.blockbg');
			blockbg.addClass('hidden');
			elm.bind('mouseenter', function ()
			{
				blockbg.removeClass('hidden');
			});
			
			elm.bind('mouseleave', function ()
			{
				blockbg.addClass('hidden');
			});

		}
	}
}]);

omr.directive('searchbutton', [ function ()
{
	return {
		restrict: 'A',
		link: function (scope, elm, attrs)
		{
			elm.bind('mousedown', function ()
			{
				console.log('open search box');

			});
		}
	}
}]);