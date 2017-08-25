var app = angular.module("skripsi", ["ngRoute","ngStorage"]);
app.run(function($rootScope){
	$rootScope.menu = "";
	$rootScope.toggleMenu = function(x){
		switch(x){
			case 0 :
				$rootScope.menu = "display:none;";
				break;
			case 1 :
				$rootScope.menu = "display:block;";
				break;
		}
	};
	});
/*
app.run(function($rootScope, $timeout) {
   $rootScope.serverBackEnd = '';
   $rootScope.pencarian = function(x){
		$rootScope.kataKunci = x;
	};
	$rootScope.showLoading = function(x){
		if(x == true) $rootScope.loading = 'display:block;';
		else $rootScope.loading = 'display:none;';
	};
	$rootScope.showLoading(false);
	$rootScope.pesan = false;
	$rootScope.showPesan= function(tipe,isi){
		if(tipe == 'Warning') $rootScope.tipePesan = 'w3-panel w3-pink';
		else $rootScope.tipePesan = 'w3-panel w3-light-green w3-text-white';
		$rootScope.isiPesan = isi;
		$rootScope.pesan = true;
		var pesanTimer = $timeout(function () {
	        $rootScope.closePesan();
	        $timeout.cancel(pesanTimer);
	    }, 5000);
	};
	$rootScope.closePesan = function(){
		$rootScope.pesan = false;
		$rootScope.isiPesan = '';
	};
	$rootScope.createForm = false;
	$rootScope.updateForm = false;
	$rootScope.showForm = function(x,y){
		if(x == 0) {
			$rootScope.form = "display:none;";
			}
		else $rootScope.form = "display:block;";
		
		if(y == 0){
			$rootScope.createForm = true;
			$rootScope.updateForm = !$rootScope.createForm;
		}
		else{
			$rootScope.updateForm = true;
			$rootScope.createForm = !$rootScope.updateForm;
		}
	}
	
	$rootScope.pagination = {
		limit : 10,
		offset : 0
	};
	$rootScope.pagNum = function(length,limit){
		var hasil = Math.ceil(length/limit);
		$rootScope.pagCount=[];
		for(x = 0;x < hasil;x++){
			$rootScope.pagCount.push(x);
		}
	};
});
*/
app.service('loadingScreen', 
    ['$q', '$rootScope', '$log', 
    function($q, $rootScope, $log) {
        'use strict';
 
        return {
            request: function(config) {
                $rootScope.loading = "display:block;";
                return config;
            },
            requestError: function(rejection) {
                $rootScope.loading = "display:none;";
                $rootScope.toggleMenu(0);
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
            response: function(response) {
                $rootScope.loading = "display:none;";
                $rootScope.toggleMenu(0);
                return response;
            },
            responseError: function(rejection) {
                $rootScope.loading = "display:none;";
                $rootScope.toggleMenu(0);
                $log.error('Response error:', rejection);
                return $q.reject(rejection);
            }
        };
    }]);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('loadingScreen');
}]);
