var app = ons.bootstrap('my-app', ['onsen']);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {        
  yepnope({
    test : window.device.platform === 'iOS' && parseFloat(window.device.version) >= 7.0,
    yep  : 'css/ios7.css',         
  });
}