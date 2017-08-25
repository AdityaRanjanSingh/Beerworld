angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,services) {

                

 
  $scope.getBeersByStyles=function (item) {
    services.getBeersByStyles(item,$scope); 
  }

  $scope.getIngridientsMenu=function(){
    services.getIngridientsMenu($scope);
  }
    function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://api.brewerydb.com/v2/menu/categories?key=91015fac483bb4e604a9f6e9c35a881c';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
   
    alert('Response from CORS request to ' + url + ': ');
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

  $scope.getBeerby=function(name) {
    $scope.loading=true;
    $scope.categories=false;
    $scope.styles=false;
    $scope.glassware=false;
    $scope.srm=false;
    $scope.countries=false;
    $scope.ingredients=false;
    $scope.beeravailability=false;
    $scope.fluidsizevolume=false;
    $scope.beertemperature=false;
    $scope.fluidsize=false;

    switch(name){
      case "categories":
      $scope.categories=true;
      $scope.menuPageTitle="Categories"
      if (!$scope.categoriesList) {
        makeCorsRequest();

       /* services.getCategoriesMenu($scope);*/
      }      
      break;

      case "styles":
      $scope.styles=true;
      $scope.menuPageTitle="Styles"
      if(!$scope.stylesList){
        services.getStylesMenu($scope);
      }      
      break;

      case "glassware":      
      $scope.glassware=true;
      $scope.menuPageTitle="Glassware"
      if (!$scope.glasswareList) {
        services.getGlasswareMenu($scope);
      }
      break;

      case "srm":
      $scope.srm=true;
      $scope.menuPageTitle="Colors"
      if (!$scope.colorsList) {
        services.getSrmColorMenu($scope);
      }      
      break;

      case "countries":
      $scope.countries=true;
      $scope.menuPageTitle="Countries"
      if (!$scope.countriesList) {
         services.getCountriesMenu($scope);
      }     
      break;

      case "ingredients":
      $scope.ingredients=true;
      $scope.menuPageTitle="Ingredients"
      if (!$scope.ingridientsCategories && !$scope.ingridientsData) {
        services.getIngridientsMenu($scope);
      }      
      break;

      case "beer-availability":
      $scope.beeravailability=true;
      $scope.menuPageTitle="Beer Availability"
      if (!$scope.beeravailabilityList) {
        services.getBeeravailabilityMenu($scope);
      }      
      break;

      default:
      $scope.categories=true;
      $scope.menuPageTitle="Categories"
      if (!$scope.categoriesList) {
        services.getCategoriesMenu($scope);
      }      
      break
    }
  } 
  })



.controller('beerGlasswareCtrl',['$scope','$stateParams','services', function($scope,$stateParams,services) {
   $scope.getOrganic=function(item){
    if(item.isOrganic==="N"){
      return "img/inorganic.jpg"
    }else{
      return "img/organic.jpg"
    }
  }
  
   
  $scope.getBackground=function(){
    return "background-color:"+$scope.beerList[0].srm.hex;
  }

  function getBeerList(id){
    $scope.loading=true;  
    services.getBeerByGlassware(id,$scope);
  }
  getBeerList($stateParams.id); 
}])


.controller('beerAvailabilityCtrl',['$scope','$stateParams','services', function($scope,$stateParams,services) {
  
    $scope.getBeerByAvailability=function(id){
    services.getBeerByAvailability(id,$scope);
    
  }

  $scope.loading=true;

  $scope.getBeerByAvailability($stateParams.id)
  $scope.getOrganic=function(item){
    if(item.isOrganic==="N"){
      return "img/inorganic.jpg"
    }else{
      return "img/organic.jpg"
    }
  } 
}])


.controller('beersCtrl',function($scope,$state,services,$ionicPopup,$timeout){ 

  

  $scope.getBeerByAvailability=function(item){    
    $state.go('app.beerAvailability',{
      id:item.id
    })
  }

  $scope.getBeerByGlassware=function(item){
    $state.go('app/beerGlassware/'+item.id);
  }

  $scope.getBeersByStyle=function (item) {    
    $state.go('app.beershome',{id:item.id});   
    
  }

  $scope.displayCategoryData=function(category){
    $scope.ingredients=$scope.ingridientsData[category];
  }

  $scope.getStyleForSrm=function(item){
    return {
      "background-color":"#"+item.hex
    };
  }

   $scope.getOrganic=function(item){
    if(item.isOrganic==="N"){
      return "img/inorganic.jpg"
    }else{
      return "img/organic.jpg"
    }
  }

  $scope.getImageForGlassware=function(item){

    switch(item.id){
      case 1:
      return "img/flute.jpg";
      break;
      case 2:
      return "img/goblet.jpg";
      break;
      case 3:
      return "img/mug.jpg";
      break;
      case 4:
      return "img/pilsner.jpg";
      break;
      case 5:
      return "img/pint.jpg";
      break;
      case 6:
      return "img/snifter.jpg";
      break;
      case 7:
      return "img/stange.jpg";
      break;
      case 8:
      return "img/tulip.jpg";
      break;
      case 9:
      return "img/weizen.jpg";
      break;
      case 10:
      return "img/oversizedwine.jpg";
      break;
      case 13:
      return "img/willi.jpg";
      break;
      case 14:
      return "img/thistle.jpg";
      break;
      default:
      break;
    }

  }
 
})

.controller('beerColorCtrl',['$scope','$stateParams','services',function($scope,$stateParams,services){

  $scope.getBackground=function(item){
    return {"background-color":"#"+item.srm.hex};
  }

  $scope.loading=true;

  function getBeerList(id){
    services.getBeerByColor(id,$scope);
  }
  
  $scope.getOrganic=function(item){
    if(item.isOrganic==="N"){
      return "img/inorganic.jpg"
    }else{
      return "img/organic.jpg"
    }
  }   

  getBeerList($stateParams.id);
}])

.controller('beersHomeCtrl',['$scope','$stateParams','services',function($scope, $stateParams,services) {
  
  $scope.loading=true;

  function getBeers(id){
    services.getBeersByStyles(id,$scope);

  }
  
  getBeers($stateParams.id);

  $scope.getOrganic=function(item){
    if(item.isOrganic==="N"){
      return "img/inorganic.jpg"
    }else{
      return "img/organic.jpg"
    }
  }

  $scope.getGlassForBeer=function(id){
    switch(item.id){
      case 1:
      return "img/flute.jpg";
      break;
      case 2:
      return "img/goblet.jpg";
      break;
      case 3:
      return "img/mug.jpg";
      break;
      case 4:
      return "img/pilsner.jpg";
      break;
      case 5:
      return "img/pint.jpg";
      break;
      case 6:
      return "img/snifter.jpg";
      break;
      case 7:
      return "img/stange.jpg";
      break;
      case 8:
      return "img/tulip.jpg";
      break;
      case 9:
      return "img/weizen.jpg";
      break;
      case 10:
      return "img/oversizedwine.jpg";
      break;
      case 13:
      return "img/willi.jpg";
      break;
      case 14:
      return "img/thistle.jpg";
      break;
      default:
      break;
    }
  }}] 
);
