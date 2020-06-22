(function () {
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.pcnAdmin = [];
    $scope.someVarName = [];
    var offline = {};
    $scope.abc = [];
    $scope.status = "NEW";

    var items = [];

    $scope.clearAll = function () {
      $scope.notice = "";
      $scope.vrm = "";
      $scope.date = "";
      $scope.time = "";
      $scope.amount = "";
      $scope.status = "NEW";
    };

    $scope.abc = JSON.parse(localStorage.getItem("items"));
    if ($scope.abc != null) {
      $scope.pcnAdmin = $scope.abc;
    }

    $scope.addEmployee = function () {
      //Add the new item to the Array.
      var employee = {
        id: $scope.pcnAdmin.length,
        Notice: $scope.notice,
        VRM: $scope.vrm,
        Date: $scope.date,
        Time: $scope.time,
        Amount_Due: $scope.amount,
        Status: $scope.status,
        isChecked: false,
      };
      $scope.pcnAdmin.push(employee);
      localStorage.setItem("items", JSON.stringify($scope.pcnAdmin));

      $scope.clearAll();
      $(function () {
        $("#modal-default").modal("toggle");
      });
    };

    $scope.removeRow = function (index) {
      //Find the record using Index from Array.
      var vrm = $scope.pcnAdmin[index].VRM;

      //Remove the item from Array using Index.
      $scope.pcnAdmin.splice(index, 1);

      localStorage.setItem("items", JSON.stringify($scope.pcnAdmin));
    };
  });
})();
