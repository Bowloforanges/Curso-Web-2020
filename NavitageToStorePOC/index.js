//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore(){

    const userAgent = navigator.userAgent;

    if((/Mobi|Android/i.test(userAgent))){
        try{
            window.location.href = 'st.android.imsspublico://IMSSDigital';
        } catch (exception){
            console.log(exception);
            window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico';
        }
    } else if(/iPad|iPhone|iPod/i.test(userAgent)){
        //gob.mx.imss.digital
        //window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
        window.location.href = 'gob.mx.imss.digital://IMSSDigital';
    } else {
        alert("Por favor abra esta página en un dispositivo móvil para descargar la aplicación IMSS Digital.");
    }

}

