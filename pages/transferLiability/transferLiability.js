(function () {
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.myChangeFunction = function () {
      $scope.exampleSearch;
      $scope.address1;
      $scope.address2;
      $scope.address3;
      $scope.address4;
      if ($scope.exampleSearch == "BS7 8LE") {
        $scope.address1 = "15 Monk Road";
        $scope.address2 = "Bristol";
      } else if ($scope.exampleSearch == "NN4 7HD") {
        $scope.address1 = "Compex Development and Marketing Ltd";
        $scope.address2 = "Century House";
        $scope.address3 = "1 The Lakes";
        $scope.address4 = "Northampton";
      } else {
      }
    };

    $scope.transferPCN = function () {
      $scope.arrayIndex = JSON.parse(localStorage.getItem("index"));
      var index = parseInt($scope.arrayIndex);
      $scope.PcnAdmin = JSON.parse(localStorage.getItem("items"));

      angular.forEach($scope.PcnAdmin, function (value, key) {
        if (value.id == index) {
          value.Status = "Transfered";
        }
      });

      localStorage.removeItem("Transfer");

      localStorage.setItem("items", JSON.stringify($scope.PcnAdmin));

      window.location.href =
        "../../pages/penaltyChargeNotices/penaltyChargeNotices.html";
    };

    $scope.enter = function () {
      $scope.myChangeFunction();
    };
    $scope.onClear = function () {
      if ($scope.exampleSearch == "") {
        $scope.address1 = "";
        $scope.address2 = "";
        $scope.address3 = "";
        $scope.address4 = "";
      }
    };
  });
})();
