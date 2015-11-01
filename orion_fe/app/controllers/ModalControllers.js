app.controller('ModalController', function ($scope, $uibModal, $log) {
    $scope.animationsEnabled = true;
    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modalContent.html',
            controller: 'ModalInstanceController',
            size: size
        });
    };
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

}).
controller('ModalInstanceController', function ($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
