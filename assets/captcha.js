javascript: (function () {
    if (typeof window.grecaptcha != 'undefined') {
        console.log('GOTCAPTCHATOKEN:' + window.grecaptcha.getResponse());
    }
})()