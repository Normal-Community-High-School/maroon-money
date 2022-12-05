window.IQC_EMBED_SOURCE = 'https://iqcalculators.com';
window.IQC_CALC_PREFIX = '/calculator/';
window.IQC_WIDGET_SUFFIX = '/widget';
window.IQC_SITE_SLUG = 'student-loan';
window.IQC_WIDGET_TITLE_ID = '0';
window.IQC_EMBED_ID = '1669734975937';
window.IQC_EMBED_OPTIONS = 'eyJib3JkZXIiOnRydWUsImNoYXJ0cyI6dHJ1ZSwidGl0bGUiOjAsImNvbG9ycyI6eyJwcmltYXJ5IjoiIzJhNTVhNiJ9fQ==';
(function() {
  var failedMount;

  failedMount = function(query) {
    if (typeof console !== "undefined" && console !== null) {
      if (console.error != null) {
        return console.error("IQC Widget failed to mount on element " + query);
      } else if (console.log != null) {
        return console.log("Error: IQC Widget failed to mount on element " + query);
      }
    }
  };

  window.onload = function() {
    var backlinkContainer, borderColor, c, calcBacklink, checkResizer, container, cpre, e, host, id, iframe, iframeLoaded, iqcBacklink, logo, options, pOpts, query, script, scriptLoaded, slug, titleId, url, wsuf, xhr;
    host = window.IQC_EMBED_SOURCE;
    cpre = window.IQC_CALC_PREFIX;
    wsuf = window.IQC_WIDGET_SUFFIX;
    slug = window.IQC_SITE_SLUG;
    id = window.IQC_EMBED_ID;
    options = window.IQC_EMBED_OPTIONS;
    titleId = window.IQC_WIDGET_TITLE_ID;
    query = '#iq-calculators-embed-' + id;
    container = document.querySelector(query);
    if (container == null) {
      return failedMount(query);
    }
    iframe = document.createElement('iframe');
    iframe.setAttribute('src', host + cpre + slug + wsuf + "?options=" + options);
    iframe.setAttribute('allowtransparency', true);
    iframe.setAttribute('background', 'transparent');
    iframe.setAttribute('frameborder', '0');
    iframe.width = "100%";
    backlinkContainer = document.createElement('div');
    backlinkContainer.style.padding = "5px";
    backlinkContainer.style.backgroundColor = "transparent";
    backlinkContainer.style.lineHeight = "0";
    backlinkContainer.style.display = "flex";
    backlinkContainer.style.justifyContent = "flex-start";
    backlinkContainer.style.alignItems = "center";
    iqcBacklink = document.createElement('a');
    iqcBacklink.setAttribute('href', "" + host);
    iqcBacklink.title = "";
    iqcBacklink.setAttribute('target', "_blank");
    backlinkContainer.appendChild(iqcBacklink);
    calcBacklink = document.createElement('a');
    calcBacklink.setAttribute('href', "" + host + cpre + slug);
    calcBacklink.title = "";
    calcBacklink.setAttribute('target', "_blank");
    calcBacklink.textContent = "Calculator";
    backlinkContainer.appendChild(calcBacklink);
    logo = document.createElement('img');
    logo.setAttribute('src', 'https://iqcalculators.com/sassets/img/iq.png');
    logo.style.width = "30px";
    logo.style.display = "block";
    logo.style.marginRight = "5px";
    iqcBacklink.appendChild(logo);
    xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
      var data;
      try {
        data = JSON.parse(this.responseText);
        return logo.style.background = data.color;
      } catch (error) {
        return '';
      }
    });
    url = host + "/api/v1/calculator-data/" + slug;
    xhr.open("GET", url);
    xhr.send();
    xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
      var title;
      try {
        title = JSON.parse(this.responseText);
        return calcBacklink.textContent = title;
      } catch (error) {
        return '';
      }
    });
    url = "" + host + cpre + slug + "/widget-title?index=" + titleId;
    xhr.open("GET", url);
    xhr.send();
    while (c = container.lastChild) {
      myNode.removeChild(c);
    }
    script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.15/iframeResizer.min.js';
    pOpts = {};
    try {
      pOpts = JSON.parse(atob(options));
      if (pOpts.border) {
        container.style.padding = "5px";
        borderColor = "#000";
        if (pOpts.colors != null) {
          if (pOpts.colors.primary != null) {
            borderColor = pOpts.colors.primary;
          }
        }
        container.style.border = "solid 2px " + borderColor;
      }
      if (pOpts.colors != null) {
        if (pOpts.colors.primary != null) {
          logo.style.backgroundColor = pOpts.colors.primary;
        }
      }
    } catch (error) {
      e = error;
      null;
    }
    container.appendChild(script);
    container.appendChild(iframe);
    container.appendChild(backlinkContainer);
    iframeLoaded = false;
    scriptLoaded = false;
    checkResizer = function() {
      if (!iframeLoaded) {
        return false;
      }
      if (!scriptLoaded) {
        return false;
      }
      return iFrameResize({}, iframe);
    };
    script.addEventListener('load', (function(_this) {
      return function() {
        scriptLoaded = true;
        return checkResizer();
      };
    })(this));
    return iframe.addEventListener('load', (function(_this) {
      return function() {
        iframeLoaded = true;
        return checkResizer();
      };
    })(this));
  };

}).call(this);
