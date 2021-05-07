//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore(){

    const userAgent = navigator.userAgent;
    var store = "";

    if((/Mobi|Android/i.test(userAgent))){
        store = PlayStore;
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
        store = AppStore;
    }


    switch (store) {
        case 'PlayStore':
            window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico';
            break;

        case 'AppStore':
            window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
            break;

        default:
            alert("Por favor abra esta página en un dispositivo móvil para descargar la aplicación IMSS Digital.")

    }
    
}
