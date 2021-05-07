//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore(){

    const userAgent = navigator.userAgent;

    if((/Mobi|Android/i.test(userAgent))){
        //window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico';
        window.location.href = 'st.android.imsspublico://IMSSDigital/Home';
    } else if(/iPad|iPhone|iPod/i.test(userAgent)){
        window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
    } else {
        alert("Por favor abra esta página en un dispositivo móvil para descargar la aplicación IMSS Digital.");
    }

}

