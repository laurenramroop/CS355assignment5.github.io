document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown buttons
    var dropdownButtons = document.querySelectorAll('.dropbtn');

    // Attach a click event listener to each dropdown button
    dropdownButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the visibility of the associated dropdown content
            var dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Function to display Navigator information
    window.navigatorFunction = function () {
        document.getElementById('navigatorName').innerText = navigator.appName;
        document.getElementById('navigatorProduct').innerText = navigator.product;
        document.getElementById('navigatorAppVersion').innerText = navigator.appVersion;
        document.getElementById('navigatorUserAgent').innerText = navigator.userAgent;
        document.getElementById('navigatorPlatform').innerText = navigator.platform;
        document.getElementById('navigatorLanguage').innerText = navigator.language;
    };

    // Function to display Window information
    window.windowFunction = function () {
        document.getElementById('innerHeight').innerText = window.innerHeight;
        document.getElementById('innerWidth').innerText = window.innerWidth;
    };

    // Function to display Screen information
    window.screenFunction = function () {
    console.log('screenFunction called');
    document.getElementById('screenWidth').innerText = window.screen.width;
    document.getElementById('screenHeight').innerText = window.screen.height;
    document.getElementById('availScreenWidth').innerText = window.screen.availWidth;
    document.getElementById('availScreenHeight').innerText = window.screen.availHeight;
    document.getElementById('screenColorDepth').innerText = window.screen.colorDepth;
    document.getElementById('screenPixelDepth').innerText = window.screen.pixelDepth;
};


    // Function to display Location information
    window.locationFunction = function () {
        document.getElementById('locationHref').innerText = window.location.href;
        document.getElementById('locationHostname').innerText = window.location.hostname;
        document.getElementById('locationPathname').innerText = window.location.pathname;
        document.getElementById('locationProtocol').innerText = window.location.protocol;
    };

    // Function to display Geolocation information
    window.geolocationFunction = function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById('latitude').innerText = position.coords.latitude;
            document.getElementById('longitude').innerText = position.coords.longitude;
        });
    };

});
