(function () {
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.pcn = [];
    $scope.pcnList = [];
    var offline = {};
    $scope.totalAmount = 0;
    offline.indexedDB = {};

    var i = 0;
    $scope.items = JSON.parse(localStorage.getItem("items"));
    angular.forEach($scope.items, function (value, key) {
      if (value.Status == "NEW") {
        $scope.pcnList.push(value);
      }
    });

    for (var i = 0; i < $scope.items.length; i++) {
      $scope.items[i].isChecked = false;
    }

    $scope.transferPCN = function (index) {
      localStorage.setItem("index", index);
      window.location.href =
        "../../pages/transferLiability/transferLiability.html";
    };

    $scope.clickOnCheckedBox = function (item) {
      $scope.items[item.id].isChecked =
        $scope.items[item.id].isChecked == false ? true : false;
    };

    $scope.payTheTotalAmount = function (item) {
      $scope.totalAmount = 0;

      angular.forEach($scope.items, (option) => {
        if (option.isChecked == true) {
          $scope.totalAmount =
            $scope.totalAmount + parseFloat(option.Amount_Due);
        }
      });
    };

    $scope.payNotices = function (item) {
      angular.forEach($scope.items, function (value, key) {
        if (value.isChecked == true) {
          value.Status = "Paid";
        }
      });
      localStorage.setItem("items", JSON.stringify($scope.items));
      window.location.reload();
    };
  });
})();
