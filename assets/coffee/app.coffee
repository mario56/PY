PYApp = angular.module('PYApp',['ui.bootstrap','ngMaterial','lfNgMdFileInput','infinite-scroll','angular-md5'])

##评论等级对应表
rateMap =
  1:'较差'
  2:'一般'
  3:'良好'
  4:'喜欢'
  5:'棒棒哒'

PYApp.controller 'navCtl',['$scope',($scope)->

  $scope.isOpen = false
  $scope.navCollapse = false

  $scope.openSearch = ()->
    $scope.isOpen = !$scope.isOpen
  $scope.closeSearch = ()->
    $scope.isOpen = false

  $scope.getActiveMenu = (_path)->

    path = window.location.pathname
    if (path.length is 1) and (_path.length is 1)
      'active'
    else if (path.substr(0, _path.length) is _path) and (_path.length >1)
      'active'
    else
      ''
]

PYApp.directive 'infoAttr', ->
  restrict: 'E',
  require: '?ngModel',
  scope:
    modelValue:"=value"
    checkValue:"="
    attrMap:"="
  template: """ <div flex='40' class='key'>
                <span ng-bind="(attrMap[modelValue.attr_key])+' :'"></span>
              </div>
              <div flex='60' class='value'>
                <ul class='goods-param ng-goods-param'>
                  <li class='goods-param-li' ng-repeat='value in modelValue.attr_value' ng-click='choose(value)' ng-class='{goodAttrActive:checkValue == value}'>
                    <span ng-bind='value'></span>
                  </li>
                </ul>
              </div>
            """

  link: (scope, elm, attr, ctrl) ->
    scope.choose = (value) ->
      scope.checkValue = value