//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore() {
    const userAgent = navigator.userAgent;
    var device = "";

    if ((/Mobi|Android/i.test(userAgent))) {
        device = "android";
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
        device = "ios";
    }

    switch (device) {

        case 'android':
            window.location.href = 'st.android.imsspublico://IMSSDigital'; //deeplink
            setTimeout(function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico'; //playstore link
            }, 2000);
            break;
        case 'ios':
            setTimeout(function () {
                window.location.replace(')https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8'); //appstore link
            }, 2000);
            break;
        default:
            alert("Por favor abra esta página en un dispositivo móvil para descargar la aplicación IMSS Digital.");
            window.close();
    }
}
