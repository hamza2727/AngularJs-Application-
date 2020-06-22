(function () {
  var app = angular.module("myApp", []);
  app.controller("AccountDetailsController", function ($scope) {
    $scope.address1 = localStorage.getItem("address1");
    $scope.address2 = localStorage.getItem("address2");
    $scope.address3 = localStorage.getItem("address3");
    $scope.address4 = localStorage.getItem("address4");
    $scope.emailAccount = localStorage.getItem("emailAccount");
    $scope.telephone = localStorage.getItem("telephone");
    $scope.businessType = localStorage.getItem("businessType");
    $scope.contactName = localStorage.getItem("contactName");
    $scope.companyName = localStorage.getItem("companyName");
    $scope.exampleSearch = localStorage.getItem("exampleSearch");

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
    $scope.enter = function () {
      $scope.myChangeFunction();
    };

    $scope.saveAccountdetails = function () {
      localStorage.clear("address1");
      localStorage.clear("address2");
      localStorage.clear("address3");
      localStorage.clear("address4");
      localStorage.clear("emailAccount");
      localStorage.clear("telephone");
      localStorage.clear("businessType");
      localStorage.clear("companyName");
      localStorage.clear("contactName");
      localStorage.clear("exampleSearch");

      localStorage.setItem("address1", $scope.address1);
      localStorage.setItem("address2", $scope.address2);
      localStorage.setItem("address3", $scope.address3);
      localStorage.setItem("address4", $scope.address4);
      localStorage.setItem("emailAccount", $scope.emailAccount);
      localStorage.setItem("telephone", $scope.telephone);
      localStorage.setItem("businessType", $scope.businessType);
      localStorage.setItem("companyName", $scope.companyName);
      localStorage.setItem("contactName", $scope.contactName);
      localStorage.setItem("exampleSearch", $scope.exampleSearch);

      $("#modal-default").modal("show");
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
