export function setCookie(cname, cvalue, exdays) {
    if (exdays === void 0) { exdays = 1; }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
export function setLocalStorage(cname, cvalue) {
    localStorage.setItem(cname, cvalue);
}
export function getLocalStorage(cname) {
    return localStorage.getItem(cname);
}
export function deleteLocalStorage(cname) {
    localStorage.removeItem(cname);
}
export function deleteCookie(cname) {
    setCookie(cname, '', 0);
}
export function isLocalStorageAvailable() {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch (e) {
        return false;
    }
}
export var getSavingMethod = function () {
    return isLocalStorageAvailable() ? setLocalStorage : setCookie;
};
export var getRetrieveMethod = function () {
    return isLocalStorageAvailable() ? getLocalStorage : getCookie;
};
export var getDeleteMethod = function () {
    return isLocalStorageAvailable() ? deleteLocalStorage : deleteCookie;
};
export var saveToStorage = getSavingMethod();
export var loadFromStorage = getRetrieveMethod();
export var deleteFromStorage = getDeleteMethod();
//# sourceMappingURL=storage.utils.js.map