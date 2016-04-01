app.controller('PageCtrl', function($scope, $window) {
//ons.ready(function() {

$scope.available = function(){
	$window.touchid.checkSupport(function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + msg)});
	//window.plugins.touchid.isAvailable(function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + msg)});


};

$scope.scan = function(){
	var text = 'Scan your fingerprint please';

	$window.touchid.authenticate(function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + JSON.stringify(msg))}, text);
	//window.plugins.touchid.verifyFingerprint('Scan your fingerprint please', function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + JSON.stringify(msg))});
};

//});
});