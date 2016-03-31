app.controller('PageCtrl', function($scope) {
//ons.ready(function() {

$scope.available = function(){
	alert('Available'); //window.plugins.touchid.isAvailable(function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + msg)});
};

$scope.scan = function(){
	alert('Scan'); //window.plugins.touchid.verifyFingerprint('Scan your fingerprint please', function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + JSON.stringify(msg))});
};

//});
});