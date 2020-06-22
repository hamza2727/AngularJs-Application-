(function () {
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.vehicles = [];
    var offline = {};
    $scope.abc = [];


    var items = [];

    $scope.clearAll = function () {
      $scope.vrm = "";
      $scope.make = "";
      $scope.model = "";
      $scope.colour = "";
      $scope.reference = "";
      //$scope.status = "NEW";
    };

    //  $scope.vehicles = vehiclesListnew;

    $scope.abc = JSON.parse(localStorage.getItem("vehicle"));
    if ($scope.abc != null) {
      $scope.vehicles = $scope.abc;
    }

    $scope.addEmployee = function () {
      debugger;
      //Add the new item to the Array.
      var employee = {
        id: $scope.vehicles.length,
        VRM: $scope.vrm,
        Make: $scope.make,
        Model: $scope.model,
        Color: $scope.colour,
        Our_Reference: $scope.reference,
      //  Status: $scope.status,
        isChecked: false,
      };
      $scope.vehicles.push(employee);
      
    localStorage.setItem("vehicle", JSON.stringify($scope.vehicles));
      debugger;

      $scope.clearAll();
      $(function () {
        $("#modal-default").modal("toggle");
      });
    };
    $scope.removeRow = function (index) {
      debugger;
      //Find the record using Index from Array.
      var vrm = $scope.vehicles[index].VRM;
debugger;
      //Remove the item from Array using Index.
      $scope.vehicles.splice(index, 1);
      //   localStorage.removeItem("items");
      //   localStorage.setItem("items", JSON.stringify($scope.vehicles));

    };

  });
})();
