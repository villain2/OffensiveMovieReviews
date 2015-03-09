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

omr.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location){
    $scope.pages = [
        {
            "page": "reviews",
            "active": false
        },
        {
            "page": "classics",
            "active": false
        },
        {
            "page": "television",
            "active": false
        },
        {
            "page": "games",
            "active": false
        },
        {
            "page": "articles",
            "active": false
        }
    ]

    var section = $location.$$absUrl;

    for(var i = 0; i < $scope.pages.length; i++)
    {
        console.log(section);
        console.log($scope.pages[i].page);
        if(section.indexOf($scope.pages[i].page) > -1)
        {
            $scope.pages[i].active = true;
        }
    }

    console.log($scope.pages);
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
