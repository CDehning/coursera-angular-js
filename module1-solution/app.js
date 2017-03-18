(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.count = function () {
    if (!$scope.lunchMenu) {
        $scope.message = "Please enter data first";
        return;
    }

    var count = $scope.lunchMenu.split(",").length;
    $scope.message = count > 3 ? "Too much!" : "Enjoy!";
  };
}

})();
