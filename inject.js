function notify(title, body) {
    if ("Notification" in window) {
        function doNotify(permission) {
            if (permission === "granted") {
                var notification = new Notification(title, {
                    icon: "data:image/png;base64,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ICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAAASUVORK5CYII=",
                    body: body
                });
                return true;
            }
            return false;
        }
        if (!doNotify(Notification.permission) && Notification.permission !== 'denied') {
            Notification.requestPermission(doNotify);
        }
    }
}

function textOf(selector, element) {
    var e = element.querySelector(selector);
    if (e) {
        return ('' + e.textContent).trim();
    }
    return '';
}

var bodyObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            var element = document.querySelector("._f_n4 div[aria-live='polite']");
            if (element) {
                function notifyPerhaps() {
                    var header = textOf('._f_b4', element);
                    if (header !== '') {
                        var from = textOf('._f_c4', element);
                        var subj = textOf('._f_d4', element);
                        var text = textOf('._f_e4', element);
                        notify(header + " from " + from, subj + " " + text);
                    }
                }
                notifyPerhaps();
                
                var observer = new MutationObserver(notifyPerhaps);
                observer.observe(element, { attributes: true, childList: true, characterData: true, subtree: true });
                
                bodyObserver.disconnect();
            }
        }
    });
});
bodyObserver.observe(document.body, { childList: true });
