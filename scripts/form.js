var userInfoModule = angular.module('userInfoModule',[]);

userInfoModule.controller('userInfoCtrl',['$scope', function ($scope){
  var vm = this;

  $scope.userInfo = {
    email: 'moomoo9513@gmail.com',
    password: '123456',
    autoLogin: true
  }

  $scope.getFormData = function () {
    console.log($scope.userInfo);
  }

  $scope.setFormData = function () {
    $scope.userInfo = {
      email: '123@123.com',
      password: '123456',
      autoLogin: false
    }
  }

  $scope.resetFormData = function () {
    $scope.userInfo = {
      email: 'moomoo9513@gmail.com',
      password: '123456',
      autoLogin: true
    }
  }
}]);