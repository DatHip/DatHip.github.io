// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5m9en":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54665611f54bfa54";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aSihg":[function(require,module,exports) {
var _dateFnsTz = require("date-fns-tz");
const root = ReactDOM.createRoot(document.getElementById("root"));
function TrItems(props) {
    return /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 6,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 7,
            columnNumber: 10
        },
        __self: this
    }, props.id), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 8,
            columnNumber: 10
        },
        __self: this
    }, props.name), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 9,
            columnNumber: 10
        },
        __self: this
    }, props.price), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 10,
            columnNumber: 10
        },
        __self: this
    }, props.rank), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 11,
            columnNumber: 10
        },
        __self: this
    }, props.comment));
}
function Label() {
    return /*#__PURE__*/ React.createElement("table", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 17,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("caption", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 18,
            columnNumber: 10
        },
        __self: this
    }, "H\xf3a \u0111\u01A1n \u0103n nh\u1EADu"), /*#__PURE__*/ React.createElement("thead", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 20,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 21,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 22,
            columnNumber: 16
        },
        __self: this
    }, "STT"), /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 23,
            columnNumber: 16
        },
        __self: this
    }, "T\xean"), /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 24,
            columnNumber: 16
        },
        __self: this
    }, "M\u1EE9c \u0111\xf3ng g\xf3p"), /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 25,
            columnNumber: 16
        },
        __self: this
    }, "X\u1EBFp h\u1EA1ng"), /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 26,
            columnNumber: 16
        },
        __self: this
    }, "Nh\u1EADn x\xe9t"))), /*#__PURE__*/ React.createElement("tbody", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 30,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(TrItems, {
        id: 1,
        name: "Th\u1EA7y Ba",
        price: 1000000,
        rank: "Kim C\u01B0\u01A1ng",
        comment: "Sugar Daddy",
        __source: {
            fileName: "app.jsx",
            lineNumber: 31,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(TrItems, {
        id: 2,
        name: "Nguy\u1EC5n Th\u1EBF Anh",
        price: 500000,
        rank: "B\u1EA1c",
        comment: "Sugar Baby",
        __source: {
            fileName: "app.jsx",
            lineNumber: 32,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(TrItems, {
        id: 3,
        name: "B\xf9i Lan Nhi",
        price: 0,
        rank: "Nh\xf4m",
        comment: "\u0110\u1ECBnh m\u1EDDi Nhi \u0103n t\u1ED1i h\xf3a ra l\u1EA1i th\xe0nh b\u1EEFa t\u1ED1i c\u1EE7a Nhi",
        __source: {
            fileName: "app.jsx",
            lineNumber: 33,
            columnNumber: 13
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("tfoot", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 42,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 43,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        colSpan: "5",
        __source: {
            fileName: "app.jsx",
            lineNumber: 44,
            columnNumber: 16
        },
        __self: this
    }, "T\u1ED5ng bill ca 1: 2022000")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 46,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        colSpan: "5",
        __source: {
            fileName: "app.jsx",
            lineNumber: 47,
            columnNumber: 16
        },
        __self: this
    }, "T\u1ED5ng bill ca 2: 105000")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 49,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        colSpan: "5",
        __source: {
            fileName: "app.jsx",
            lineNumber: 50,
            columnNumber: 16
        },
        __self: this
    }, "T\u1ED5ng \u0111\xf3ng g\xf3p: ", /*#__PURE__*/ React.createElement("span", {
        className: "total",
        __source: {
            fileName: "app.jsx",
            lineNumber: 51,
            columnNumber: 34
        },
        __self: this
    })))));
}
function Label2() {
    return /*#__PURE__*/ React.createElement("table", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 61,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("caption", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 62,
            columnNumber: 10
        },
        __self: this
    }, "B\u1EA3ng ch\xfa th\xedch"), /*#__PURE__*/ React.createElement("thead", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 64,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 65,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 66,
            columnNumber: 16
        },
        __self: this
    }, "M\u1EE9c \u0111\xf3ng g\xf3p"), /*#__PURE__*/ React.createElement("th", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 67,
            columnNumber: 16
        },
        __self: this
    }, "X\u1EBFp h\u1EA1ng"))), /*#__PURE__*/ React.createElement("tbody", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 71,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 72,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 73,
            columnNumber: 16
        },
        __self: this
    }, "Tr\xean 1000000"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 74,
            columnNumber: 16
        },
        __self: this
    }, "Kim C\u01B0\u01A1ng")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 76,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 77,
            columnNumber: 16
        },
        __self: this
    }, "800000 - 1000000"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 78,
            columnNumber: 16
        },
        __self: this
    }, "B\u1EA1ch kim")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 80,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 81,
            columnNumber: 16
        },
        __self: this
    }, "500000 - 800000"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 82,
            columnNumber: 16
        },
        __self: this
    }, "V\xe0ng")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 84,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 85,
            columnNumber: 16
        },
        __self: this
    }, "200000 - 500000"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 86,
            columnNumber: 16
        },
        __self: this
    }, "B\u1EA1c")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 88,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 89,
            columnNumber: 16
        },
        __self: this
    }, "D\u01B0\u1EDBi 200000"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 90,
            columnNumber: 16
        },
        __self: this
    }, "\u0110\u1ED3ng")), /*#__PURE__*/ React.createElement("tr", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 92,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 93,
            columnNumber: 16
        },
        __self: this
    }, "0"), /*#__PURE__*/ React.createElement("td", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 94,
            columnNumber: 16
        },
        __self: this
    }, "Nh\xf4m"))));
}
// Clock
setTimeout(()=>{
    const UI = {
        date: document.querySelector(".date"),
        am_pm: document.querySelector(".am-pm"),
        second: document.querySelector(".hand--second"),
        minute: document.querySelector(".hand--minute"),
        hour: document.querySelector(".hand--hour")
    };
    function updateClock() {
        const nowPrev = new Date();
        const now = (0, _dateFnsTz.utcToZonedTime)(nowPrev, "Asia/Ho_Chi_Minh");
        const date = now.getDate();
        const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
        const minute = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
        const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;
        // Ui update
        UI.date.innerHTML = date;
        UI.second.style.transform = `rotate(${seconds}deg)`;
        UI.minute.style.transform = `rotate(${minute}deg)`;
        UI.hour.style.transform = `rotate(${hours}deg)`;
        requestAnimationFrame(updateClock);
    }
    requestAnimationFrame(updateClock);
});
function handleSelect(e) {
    let valueCity = e.target.value;
    const UI = {
        date: document.querySelector(".date"),
        am_pm: document.querySelector(".am-pm"),
        second: document.querySelector(".hand--second"),
        minute: document.querySelector(".hand--minute"),
        hour: document.querySelector(".hand--hour"),
        h2: document.querySelector(h2)
    };
    function updateClock() {
        const nowPrev = new Date();
        const now = (0, _dateFnsTz.utcToZonedTime)(nowPrev, valueCity);
        const date = now.getDate();
        const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
        const minute = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
        const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;
        // Ui update
        UI.date.innerHTML = date;
        UI.second.style.transform = `rotate(${seconds}deg)`;
        UI.minute.style.transform = `rotate(${minute}deg)`;
        UI.hour.style.transform = `rotate(${hours}deg)`;
        requestAnimationFrame(updateClock);
    }
    requestAnimationFrame(updateClock);
}
function ClockAll() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "container",
        __source: {
            fileName: "app.jsx",
            lineNumber: 162,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        className: "clock--wrapper",
        __source: {
            fileName: "app.jsx",
            lineNumber: 163,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 164,
            columnNumber: 13
        },
        __self: this
    }, "My Time "), /*#__PURE__*/ React.createElement("div", {
        className: "clock",
        __source: {
            fileName: "app.jsx",
            lineNumber: 165,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("svg", {
        className: "clockface",
        width: 300,
        height: 300,
        viewBox: "-150 -150 300 300",
        __source: {
            fileName: "app.jsx",
            lineNumber: 166,
            columnNumber: 16
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("circle", {
        className: "ring ring--seconds",
        r: 145,
        pathLength: 60,
        __source: {
            fileName: "app.jsx",
            lineNumber: 167,
            columnNumber: 19
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("circle", {
        className: "ring ring--hours",
        r: 145,
        pathLength: 12,
        __source: {
            fileName: "app.jsx",
            lineNumber: 168,
            columnNumber: 19
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("text", {
        x: 50,
        y: -5,
        className: "date",
        __source: {
            fileName: "app.jsx",
            lineNumber: 169,
            columnNumber: 19
        },
        __self: this
    }, "23"), /*#__PURE__*/ React.createElement("text", {
        x: 50,
        y: 10,
        className: "am-pm",
        __source: {
            fileName: "app.jsx",
            lineNumber: 172,
            columnNumber: 19
        },
        __self: this
    }, "am"), /*#__PURE__*/ React.createElement("line", {
        className: "hand hand--minute",
        x1: 0,
        y1: 2,
        x2: 0,
        y2: -110,
        __source: {
            fileName: "app.jsx",
            lineNumber: 175,
            columnNumber: 19
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("line", {
        className: "hand hand--hour",
        x1: 0,
        y1: 2,
        x2: 0,
        y2: -60,
        __source: {
            fileName: "app.jsx",
            lineNumber: 176,
            columnNumber: 19
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("circle", {
        className: "ring ring--center",
        r: 3,
        __source: {
            fileName: "app.jsx",
            lineNumber: 177,
            columnNumber: 19
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("line", {
        className: "hand hand--second",
        x1: 0,
        y1: 12,
        x2: 0,
        y2: -130,
        __source: {
            fileName: "app.jsx",
            lineNumber: 178,
            columnNumber: 19
        },
        __self: this
    }))), /*#__PURE__*/ React.createElement("select", {
        onChange: handleSelect,
        name: "",
        id: "",
        __source: {
            fileName: "app.jsx",
            lineNumber: 181,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(RenderOption, {
        __source: {
            fileName: "app.jsx",
            lineNumber: 182,
            columnNumber: 16
        },
        __self: this
    }))));
}
function RenderOption() {
    const value = [
        {
            city: "Asia/Ho_Chi_Minh",
            Utc: "07:00",
            name: "Ha Noi"
        },
        {
            city: "America/New_York",
            Utc: "\u221205:00",
            name: "New York"
        },
        {
            city: "Europe/London",
            Utc: "00:00",
            name: "London"
        },
        {
            city: "Europe/Paris",
            Utc: "+01:00",
            name: "Paris"
        },
        {
            city: "Asia/Tokyo",
            Utc: "09:00",
            name: "Tokyo"
        },
        {
            city: "Europe/Kiev",
            Utc: "+02:00",
            name: "Kiev"
        }, 
    ];
    let options = value.map((e, index)=>{
        return /*#__PURE__*/ React.createElement("option", {
            key: index,
            value: e.city,
            __source: {
                fileName: "app.jsx",
                lineNumber: 224,
                columnNumber: 10
            },
            __self: this
        }, e.name, " UTC: ", e.Utc);
    });
    return options;
}
// Render
function All() {
    return /*#__PURE__*/ React.createElement("div", {
        __source: {
            fileName: "app.jsx",
            lineNumber: 235,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wrapper",
        __source: {
            fileName: "app.jsx",
            lineNumber: 236,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(Label, {
        __source: {
            fileName: "app.jsx",
            lineNumber: 237,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(Label2, {
        __source: {
            fileName: "app.jsx",
            lineNumber: 238,
            columnNumber: 13
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(ClockAll, {
        __source: {
            fileName: "app.jsx",
            lineNumber: 240,
            columnNumber: 10
        },
        __self: this
    }));
}
root.render(/*#__PURE__*/ React.createElement(All, {
    __source: {
        fileName: "app.jsx",
        lineNumber: 245,
        columnNumber: 13
    },
    __self: undefined
}));

},{"date-fns-tz":"ZjMvO"}],"ZjMvO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.
parcelHelpers.export(exports, "format", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "formatInTimeZone", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "getTimezoneOffset", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "toDate", ()=>(0, _indexJsDefault3.default));
parcelHelpers.export(exports, "utcToZonedTime", ()=>(0, _indexJsDefault4.default));
parcelHelpers.export(exports, "zonedTimeToUtc", ()=>(0, _indexJsDefault5.default));
var _indexJs = require("./format/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./formatInTimeZone/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./getTimezoneOffset/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./toDate/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./utcToZonedTime/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./zonedTimeToUtc/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);

},{"./format/index.js":"bogDg","./formatInTimeZone/index.js":"1mvrf","./getTimezoneOffset/index.js":"geGSn","./toDate/index.js":"lwKwP","./utcToZonedTime/index.js":"dFmbz","./zonedTimeToUtc/index.js":"kbmIT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bogDg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("date-fns/format/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./formatters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var matches = formatStr.match(tzFormattingTokensRegExp);
    if (matches) {
        var date = (0, _indexJsDefault2.default)(dirtyDate, options);
        // Work through each match and replace the tz token in the format string with the quoted
        // formatted time zone so the remaining tokens can be filled in by date-fns#format.
        formatStr = matches.reduce(function(result, token) {
            if (token[0] === "'") return result // This is a quoted portion, matched only to ensure we don't match inside it
            ;
            var pos = result.indexOf(token);
            var precededByQuotedSection = result[pos - 1] === "'";
            var replaced = result.replace(token, "'" + (0, _indexJsDefault1.default)[token[0]](date, token, null, options) + "'");
            // If the replacement results in two adjoining quoted strings, the back to back quotes
            // are removed so it doesn't look like an escaped quote.
            return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
        }, formatStr);
    }
    return (0, _indexJsDefault.default)(dirtyDate, formatStr, options);
}
exports.default = format;

},{"date-fns/format/index.js":"ccw4u","./formatters/index.js":"4rWUc","../toDate/index.js":"lwKwP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccw4u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = format;
var _index = _interopRequireDefault(require("../isValid/index.js"));
var _index2 = _interopRequireDefault(require("../locale/en-US/index.js"));
var _index3 = _interopRequireDefault(require("../subMilliseconds/index.js"));
var _index4 = _interopRequireDefault(require("../toDate/index.js"));
var _index5 = _interopRequireDefault(require("../_lib/format/formatters/index.js"));
var _index6 = _interopRequireDefault(require("../_lib/format/longFormatters/index.js"));
var _index7 = _interopRequireDefault(require("../_lib/getTimezoneOffsetInMilliseconds/index.js"));
var _index8 = require("../_lib/protectedTokens/index.js");
var _index9 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index10 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    (0, _index10.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || _index2.default;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index9.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index9.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index9.default)(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index9.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!locale.localize) throw new RangeError("locale must contain localize property");
    if (!locale.formatLong) throw new RangeError("locale must contain formatLong property");
    var originalDate = (0, _index4.default)(dirtyDate);
    if (!(0, _index.default)(originalDate)) throw new RangeError("Invalid time value");
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0, _index7.default)(originalDate);
    var utcDate = (0, _index3.default)(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = _index6.default[firstCharacter];
            return longFormatter(substring, locale.formatLong, formatterOptions);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = _index5.default[firstCharacter];
        if (formatter) {
            if (!options.useAdditionalWeekYearTokens && (0, _index8.isProtectedWeekYearToken)(substring)) (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
            if (!options.useAdditionalDayOfYearTokens && (0, _index8.isProtectedDayOfYearToken)(substring)) (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
module.exports = exports.default;

},{"../isValid/index.js":"7kxwD","../locale/en-US/index.js":"g9y0a","../subMilliseconds/index.js":"6Cb4m","../toDate/index.js":"2qmNb","../_lib/format/formatters/index.js":"48WgQ","../_lib/format/longFormatters/index.js":"k9aif","../_lib/getTimezoneOffsetInMilliseconds/index.js":"7XG25","../_lib/protectedTokens/index.js":"4Po1d","../_lib/toInteger/index.js":"aXIAb","../_lib/requiredArgs/index.js":"aQU0P"}],"7kxwD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isValid;
var _index = _interopRequireDefault(require("../isDate/index.js"));
var _index2 = _interopRequireDefault(require("../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ function isValid(dirtyDate) {
    (0, _index3.default)(1, arguments);
    if (!(0, _index.default)(dirtyDate) && typeof dirtyDate !== "number") return false;
    var date = (0, _index2.default)(dirtyDate);
    return !isNaN(Number(date));
}
module.exports = exports.default;

},{"../isDate/index.js":"imrFr","../toDate/index.js":"2qmNb","../_lib/requiredArgs/index.js":"aQU0P"}],"imrFr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDate;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ function isDate(value) {
    (0, _index.default)(1, arguments);
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
module.exports = exports.default;

},{"../_lib/requiredArgs/index.js":"aQU0P"}],"aQU0P":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = requiredArgs;
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
module.exports = exports.default;

},{}],"2qmNb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toDate;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ function toDate(argument) {
    (0, _index.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
module.exports = exports.default;

},{"../_lib/requiredArgs/index.js":"aQU0P"}],"g9y0a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(require("./_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(require("./_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(require("./_lib/localize/index.js"));
var _index5 = _interopRequireDefault(require("./_lib/match/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: "en-US",
    formatDistance: _index.default,
    formatLong: _index2.default,
    formatRelative: _index3.default,
    localize: _index4.default,
    match: _index5.default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

},{"./_lib/formatDistance/index.js":"6xNab","./_lib/formatLong/index.js":"52SMI","./_lib/formatRelative/index.js":"ilO0C","./_lib/localize/index.js":"7REUh","./_lib/match/index.js":"438zp"}],"6xNab":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

},{}],"52SMI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: (0, _index.default)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _index.default)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _index.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;

},{"../../../_lib/buildFormatLongFn/index.js":"33Tlg"}],"33Tlg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildFormatLongFn;
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
module.exports = exports.default;

},{}],"ilO0C":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

},{}],"7REUh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: (0, _index.default)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _index.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: (0, _index.default)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _index.default)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _index.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

},{"../../../_lib/buildLocalizeFn/index.js":"6YVVx"}],"6YVVx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildLocalizeFn;
function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
module.exports = exports.default;

},{}],"438zp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: (0, _index2.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: (0, _index.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _index.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: (0, _index.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _index.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _index.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

},{"../../../_lib/buildMatchFn/index.js":"cYx1t","../../../_lib/buildMatchPatternFn/index.js":"fziEF"}],"cYx1t":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildMatchFn;
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}
module.exports = exports.default;

},{}],"fziEF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildMatchPatternFn;
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
module.exports = exports.default;

},{}],"6Cb4m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = subMilliseconds;
var _index = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../addMilliseconds/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */ function subMilliseconds(dirtyDate, dirtyAmount) {
    (0, _index3.default)(2, arguments);
    var amount = (0, _index.default)(dirtyAmount);
    return (0, _index2.default)(dirtyDate, -amount);
}
module.exports = exports.default;

},{"../_lib/toInteger/index.js":"aXIAb","../addMilliseconds/index.js":"dpnim","../_lib/requiredArgs/index.js":"aQU0P"}],"aXIAb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toInteger;
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
module.exports = exports.default;

},{}],"dpnim":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addMilliseconds;
var _index = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */ function addMilliseconds(dirtyDate, dirtyAmount) {
    (0, _index3.default)(2, arguments);
    var timestamp = (0, _index2.default)(dirtyDate).getTime();
    var amount = (0, _index.default)(dirtyAmount);
    return new Date(timestamp + amount);
}
module.exports = exports.default;

},{"../_lib/toInteger/index.js":"aXIAb","../toDate/index.js":"2qmNb","../_lib/requiredArgs/index.js":"aQU0P"}],"48WgQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/getUTCDayOfYear/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/getUTCISOWeek/index.js"));
var _index3 = _interopRequireDefault(require("../../../_lib/getUTCISOWeekYear/index.js"));
var _index4 = _interopRequireDefault(require("../../../_lib/getUTCWeek/index.js"));
var _index5 = _interopRequireDefault(require("../../../_lib/getUTCWeekYear/index.js"));
var _index6 = _interopRequireDefault(require("../../addLeadingZeros/index.js"));
var _index7 = _interopRequireDefault(require("../lightFormatters/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return _index7.default.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        var signedWeekYear = (0, _index5.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === "YY") {
            var twoDigitYear = weekYear % 100;
            return (0, _index6.default)(twoDigitYear, 2);
        } // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
         // Padding
        return (0, _index6.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        var isoWeekYear = (0, _index3.default)(date); // Padding
        return (0, _index6.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        var year = date.getUTCFullYear();
        return (0, _index6.default)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _index6.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _index6.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case "M":
            case "MM":
                return _index7.default.M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _index6.default)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        var week = (0, _index4.default)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _index6.default)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        var isoWeek = (0, _index2.default)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _index6.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getUTCDate(), {
            unit: "date"
        });
        return _index7.default.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        var dayOfYear = (0, _index.default)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _index6.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _index6.default)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _index6.default)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _index6.default)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return _index7.default.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
        });
        return _index7.default.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _index6.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _index6.default)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
        });
        return _index7.default.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
        });
        return _index7.default.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return _index7.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return (0, _index6.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _index6.default)(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = (0, _index6.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _index6.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
var _default = formatters;
exports.default = _default;
module.exports = exports.default;

},{"../../../_lib/getUTCDayOfYear/index.js":"fbxOf","../../../_lib/getUTCISOWeek/index.js":"nch2e","../../../_lib/getUTCISOWeekYear/index.js":"aaBaP","../../../_lib/getUTCWeek/index.js":"3XfVn","../../../_lib/getUTCWeekYear/index.js":"jv3N2","../../addLeadingZeros/index.js":"lhuAG","../lightFormatters/index.js":"887z5"}],"fbxOf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUTCDayOfYear;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../requiredArgs/index.js":"aQU0P"}],"nch2e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUTCISOWeek;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../startOfUTCISOWeek/index.js"));
var _index3 = _interopRequireDefault(require("../startOfUTCISOWeekYear/index.js"));
var _index4 = _interopRequireDefault(require("../requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek(dirtyDate) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../startOfUTCISOWeek/index.js":"crmA5","../startOfUTCISOWeekYear/index.js":"asiYA","../requiredArgs/index.js":"aQU0P"}],"crmA5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startOfUTCISOWeek;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _index.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../requiredArgs/index.js":"aQU0P"}],"asiYA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startOfUTCISOWeekYear;
var _index = _interopRequireDefault(require("../getUTCISOWeekYear/index.js"));
var _index2 = _interopRequireDefault(require("../startOfUTCISOWeek/index.js"));
var _index3 = _interopRequireDefault(require("../requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate) {
    (0, _index3.default)(1, arguments);
    var year = (0, _index.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _index2.default)(fourthOfJanuary);
    return date;
}
module.exports = exports.default;

},{"../getUTCISOWeekYear/index.js":"aaBaP","../startOfUTCISOWeek/index.js":"crmA5","../requiredArgs/index.js":"aQU0P"}],"aaBaP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUTCISOWeekYear;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../startOfUTCISOWeek/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../requiredArgs/index.js":"aQU0P","../startOfUTCISOWeek/index.js":"crmA5"}],"3XfVn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUTCWeek;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../startOfUTCWeek/index.js"));
var _index3 = _interopRequireDefault(require("../startOfUTCWeekYear/index.js"));
var _index4 = _interopRequireDefault(require("../requiredArgs/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek(dirtyDate, options) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../startOfUTCWeek/index.js":"kjVDD","../startOfUTCWeekYear/index.js":"jAekF","../requiredArgs/index.js":"aQU0P"}],"kjVDD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startOfUTCWeek;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../toInteger/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    (0, _index2.default)(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index3.default)(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index3.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _index.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../requiredArgs/index.js":"aQU0P","../toInteger/index.js":"aXIAb"}],"jAekF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startOfUTCWeekYear;
var _index = _interopRequireDefault(require("../getUTCWeekYear/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../startOfUTCWeek/index.js"));
var _index4 = _interopRequireDefault(require("../toInteger/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    (0, _index2.default)(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate);
    var year = (0, _index.default)(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _index3.default)(firstWeek, dirtyOptions);
    return date;
}
module.exports = exports.default;

},{"../getUTCWeekYear/index.js":"jv3N2","../requiredArgs/index.js":"aQU0P","../startOfUTCWeek/index.js":"kjVDD","../toInteger/index.js":"aXIAb"}],"jv3N2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUTCWeekYear;
var _index = _interopRequireDefault(require("../../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../startOfUTCWeek/index.js"));
var _index4 = _interopRequireDefault(require("../toInteger/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
module.exports = exports.default;

},{"../../toDate/index.js":"2qmNb","../requiredArgs/index.js":"aQU0P","../startOfUTCWeek/index.js":"kjVDD","../toInteger/index.js":"aXIAb"}],"lhuAG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addLeadingZeros;
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = "0" + output;
    return sign + output;
}
module.exports = exports.default;

},{}],"887z5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../addLeadingZeros/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
    },
    // Day of the month
    d: function(date, token) {
        return (0, _index.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function(date, token) {
        return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function(date, token) {
        return (0, _index.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function(date, token) {
        return (0, _index.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function(date, token) {
        return (0, _index.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _index.default)(fractionalSeconds, token.length);
    }
};
var _default = formatters;
exports.default = _default;
module.exports = exports.default;

},{"../../addLeadingZeros/index.js":"lhuAG"}],"k9aif":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
}
function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
var _default = longFormatters;
exports.default = _default;
module.exports = exports.default;

},{}],"7XG25":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getTimezoneOffsetInMilliseconds;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
module.exports = exports.default;

},{}],"4Po1d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
exports.throwProtectedError = throwProtectedError;
var protectedDayOfYearTokens = [
    "D",
    "DD"
];
var protectedWeekYearTokens = [
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
}

},{}],"4rWUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../_lib/tzIntlTimeZoneName/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../_lib/tzParseTimezone/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_MINUTE = 60000;
var formatters = {
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, localize, options) {
        var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimeter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimeter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, localize, options) {
        var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimeter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimeter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, localize, options) {
        var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, localize, options) {
        var originalDate = options._originalDate || date;
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return (0, _indexJsDefault.default)("short", originalDate, options);
            // Long
            case "zzzz":
            default:
                return (0, _indexJsDefault.default)("long", originalDate, options);
        }
    }
};
function getTimeZoneOffset(timeZone, originalDate) {
    var timeZoneOffset = timeZone ? (0, _indexJsDefault1.default)(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE : originalDate.getTimezoneOffset();
    if (Number.isNaN(timeZoneOffset)) throw new RangeError("Invalid time zone specified: " + timeZone);
    return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = "0" + output;
    return sign + output;
}
function formatTimezone(offset, dirtyDelimeter) {
    var delimeter = dirtyDelimeter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(Math.floor(absOffset % 60), 2);
    return sign + hours + delimeter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimeter);
}
function formatTimezoneShort(offset, dirtyDelimeter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimeter = dirtyDelimeter || "";
    return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}
exports.default = formatters;

},{"../../_lib/tzIntlTimeZoneName/index.js":"3HTSc","../../_lib/tzParseTimezone/index.js":"kzqA4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HTSc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tzIntlTimeZoneName(length, date, options) {
    var dtf = getDTF(length, options.timeZone, options.locale);
    return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
exports.default = tzIntlTimeZoneName;
function partsTimeZone(dtf, date) {
    var formatted = dtf.formatToParts(date);
    return formatted[formatted.length - 1].value;
}
function hackyTimeZone(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, "");
    var tzNameMatch = / [\w-+ ]+$/.exec(formatted);
    return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(length, timeZone, locale) {
    if (locale && !locale.code) throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");
    return new Intl.DateTimeFormat(locale ? [
        locale.code,
        "en-US"
    ] : undefined, {
        timeZone: timeZone,
        timeZoneName: length
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kzqA4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../tzTokenizeDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../newDateUTC/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var patterns = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
    var token;
    var absoluteOffset;
    // Empty string
    if (timezoneString === "") return 0;
    // Z
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) return 0;
    var hours;
    // ±hh
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);
        if (!validateTimezone(hours)) return NaN;
        return -(hours * MILLISECONDS_IN_HOUR);
    }
    // ±hh:mm or ±hhmm
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);
        var minutes = parseInt(token[2], 10);
        if (!validateTimezone(hours, minutes)) return NaN;
        absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
        return hours > 0 ? -absoluteOffset : absoluteOffset;
    }
    // IANA time zone
    if (isValidTimezoneIANAString(timezoneString)) {
        date = new Date(date || Date.now());
        var utcDate = isUtcDate ? date : toUtcDate(date);
        var offset = calcOffset(utcDate, timezoneString);
        var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
        return -fixedOffset;
    }
    return NaN;
}
exports.default = tzParseTimezone;
function toUtcDate(date) {
    return (0, _indexJsDefault1.default)(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
    var tokens = (0, _indexJsDefault.default)(date, timezoneString);
    // ms dropped because it's not provided by tzTokenizeDate
    var asUTC = (0, _indexJsDefault1.default)(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
    var asTS = date.getTime();
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
    var localTS = date.getTime();
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - offset;
    // Test whether the zone matches the offset for this ts
    var o2 = calcOffset(new Date(utcGuess), timezoneString);
    // If so, offset didn't change, and we're done
    if (offset === o2) return offset;
    // If not, change the ts by the difference in the offset
    utcGuess -= o2 - offset;
    // If that gives us the local time we want, we're done
    var o3 = calcOffset(new Date(utcGuess), timezoneString);
    if (o2 === o3) return o2;
    // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time
    return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
    return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
    if (validIANATimezoneCache[timeZoneString]) return true;
    try {
        new Intl.DateTimeFormat(undefined, {
            timeZone: timeZoneString
        });
        validIANATimezoneCache[timeZoneString] = true;
        return true;
    } catch (error) {
        return false;
    }
}

},{"../tzTokenizeDate/index.js":"bFZ6t","../newDateUTC/index.js":"i0Ku6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFZ6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tzTokenizeDate(date, timeZone) {
    var dtf = getDateTimeFormat(timeZone);
    return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
exports.default = tzTokenizeDate;
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function partsOffset(dtf, date) {
    try {
        var formatted = dtf.formatToParts(date);
        var filled = [];
        for(var i = 0; i < formatted.length; i++){
            var pos = typeToPos[formatted[i].type];
            if (pos >= 0) filled[pos] = parseInt(formatted[i].value, 10);
        }
        return filled;
    } catch (error) {
        if (error instanceof RangeError) return [
            NaN
        ];
        throw error;
    }
}
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, "");
    var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [
        parsed[3],
        parsed[1],
        parsed[2],
        parsed[4],
        parsed[5],
        parsed[6]
    ];
}
// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
var dtfCache = {};
function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
        // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
        var testDateFormatted = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z"));
        var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
        dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
    return dtfCache[timeZone];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0Ku6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
    var utcDate = new Date(0);
    utcDate.setUTCFullYear(fullYear, month, day);
    utcDate.setUTCHours(hour, minute, second, millisecond);
    return utcDate;
}
exports.default = newDateUTC;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwKwP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("date-fns/_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/tzParseTimezone/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/tzPattern/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
        /^([+-]\d{2})$/,
        /^([+-]\d{3})$/,
        /^([+-]\d{4})$/
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
        /^([+-]\d{4})/,
        /^([+-]\d{5})/,
        /^([+-]\d{6})/
    ],
    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    // time zone tokens (to identify the presence of a tz)
    timeZone: (0, _indexJsDefault3.default)
};
function toDate(argument, dirtyOptions) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (argument === null) return new Date(NaN);
    var options = dirtyOptions || {};
    var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0, _indexJsDefault.default)(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    // Clone the date
    if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") return new Date(argument);
    else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) return new Date(NaN);
    var dateStrings = splitDateString(argument);
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;
    var date = parseDate(restDateString, year);
    if (isNaN(date)) return new Date(NaN);
    if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
            if (isNaN(time)) return new Date(NaN);
        }
        if (dateStrings.timeZone || options.timeZone) {
            offset = (0, _indexJsDefault2.default)(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
            if (isNaN(offset)) return new Date(NaN);
        } else {
            // get offset accurate to hour in time zones that change offset
            offset = (0, _indexJsDefault1.default)(new Date(timestamp + time));
            offset = (0, _indexJsDefault1.default)(new Date(timestamp + time + offset));
        }
        return new Date(timestamp + time + offset);
    } else return new Date(NaN);
}
exports.default = toDate;
function splitDateString(dateString) {
    var dateStrings = {};
    var parts = patterns.dateTimePattern.exec(dateString);
    var timeString;
    if (!parts) {
        parts = patterns.datePattern.exec(dateString);
        if (parts) {
            dateStrings.date = parts[1];
            timeString = parts[2];
        } else {
            dateStrings.date = null;
            timeString = dateString;
        }
    } else {
        dateStrings.date = parts[1];
        timeString = parts[3];
    }
    if (timeString) {
        var token = patterns.timeZone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], "");
            dateStrings.timeZone = token[1].trim();
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns.YYY[additionalDigits];
    var patternYYYYY = patterns.YYYYY[additionalDigits];
    var token;
    // YYYY or ±YYYYY
    token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
        var yearString = token[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length)
        };
    }
    // YY or ±YYY
    token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
        var centuryString = token[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length)
        };
    }
    // Invalid ISO-formatted year
    return {
        year: null
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return null;
    var token;
    var date;
    var month;
    var week;
    // YYYY
    if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    // YYYY-MM
    token = patterns.MM.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        if (!validateDate(year, month)) return new Date(NaN);
        date.setUTCFullYear(year, month);
        return date;
    }
    // YYYY-DDD or YYYYDDD
    token = patterns.DDD.exec(dateString);
    if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        if (!validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    // yyyy-MM-dd or YYYYMMDD
    token = patterns.MMDD.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        if (!validateDate(year, month, day)) return new Date(NaN);
        date.setUTCFullYear(year, month, day);
        return date;
    }
    // YYYY-Www or YYYYWww
    token = patterns.Www.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        if (!validateWeekDate(year, week)) return new Date(NaN);
        return dayOfISOWeekYear(year, week);
    }
    // YYYY-Www-D or YYYYWwwD
    token = patterns.WwwD.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    }
    // Invalid ISO-formatted date
    return null;
}
function parseTime(timeString) {
    var token;
    var hours;
    var minutes;
    // hh
    token = patterns.HH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(",", "."));
        if (!validateTime(hours)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR;
    }
    // hh:mm or hhmm
    token = patterns.HHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(",", "."));
        if (!validateTime(hours, minutes)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    // hh:mm:ss or hhmmss
    token = patterns.HHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(",", "."));
        if (!validateTime(hours, minutes, seconds)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    // Invalid ISO-formatted time
    return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    if (month < 0 || month > 11) return false;
    if (date != null) {
        if (date < 1) return false;
        var isLeapYear = isLeapYearIndex(year);
        if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) return false;
        if (!isLeapYear && date > DAYS_IN_MONTH[month]) return false;
    }
    return true;
}
function validateDayOfYearDate(year, dayOfYear) {
    if (dayOfYear < 1) return false;
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) return false;
    if (!isLeapYear && dayOfYear > 365) return false;
    return true;
}
function validateWeekDate(year, week, day) {
    if (week < 0 || week > 52) return false;
    if (day != null && (day < 0 || day > 6)) return false;
    return true;
}
function validateTime(hours, minutes, seconds) {
    if (hours != null && (hours < 0 || hours >= 25)) return false;
    if (minutes != null && (minutes < 0 || minutes >= 60)) return false;
    if (seconds != null && (seconds < 0 || seconds >= 60)) return false;
    return true;
}

},{"date-fns/_lib/toInteger/index.js":"aXIAb","date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":"7XG25","../_lib/tzParseTimezone/index.js":"kzqA4","../_lib/tzPattern/index.js":"giQZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"giQZf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Regex to identify the presence of a time zone specifier in a date string */ var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
exports.default = tzPattern;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mvrf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("date-fns/_lib/cloneObject/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../format/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../utcToZonedTime/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function formatInTimeZone(date, timeZone, formatStr, options) {
    var extendedOptions = (0, _indexJsDefault.default)(options);
    extendedOptions.timeZone = timeZone;
    return (0, _indexJsDefault1.default)((0, _indexJsDefault2.default)(date, timeZone), formatStr, extendedOptions);
}
exports.default = formatInTimeZone;

},{"date-fns/_lib/cloneObject/index.js":"gs3tz","../format/index.js":"bogDg","../utcToZonedTime/index.js":"dFmbz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gs3tz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cloneObject;
var _index = _interopRequireDefault(require("../assign/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function cloneObject(dirtyObject) {
    return (0, _index.default)({}, dirtyObject);
}
module.exports = exports.default;

},{"../assign/index.js":"hoAmC"}],"hoAmC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = assign;
function assign(target, dirtyObject) {
    if (target == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    dirtyObject = dirtyObject || {};
    for(var property in dirtyObject)if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) target[property] = dirtyObject[property];
    return target;
}
module.exports = exports.default;

},{}],"dFmbz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/tzParseTimezone/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function utcToZonedTime(dirtyDate, timeZone, options) {
    var date = (0, _indexJsDefault1.default)(dirtyDate, options);
    var offsetMilliseconds = (0, _indexJsDefault.default)(timeZone, date, true);
    var d = new Date(date.getTime() - offsetMilliseconds);
    return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
}
exports.default = utcToZonedTime;

},{"../_lib/tzParseTimezone/index.js":"kzqA4","../toDate/index.js":"lwKwP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"geGSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/tzParseTimezone/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function getTimezoneOffset(timeZone, date) {
    return -(0, _indexJsDefault.default)(timeZone, date);
}
exports.default = getTimezoneOffset;

},{"../_lib/tzParseTimezone/index.js":"kzqA4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbmIT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("date-fns/_lib/cloneObject/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/tzPattern/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/tzParseTimezone/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/newDateUTC/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function zonedTimeToUtc(date, timeZone, options) {
    if (typeof date === "string" && !date.match((0, _indexJsDefault2.default))) {
        var extendedOptions = (0, _indexJsDefault.default)(options);
        extendedOptions.timeZone = timeZone;
        return (0, _indexJsDefault1.default)(date, extendedOptions);
    }
    var d = (0, _indexJsDefault1.default)(date, options);
    var utc = (0, _indexJsDefault4.default)(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()).getTime();
    var offsetMilliseconds = (0, _indexJsDefault3.default)(timeZone, new Date(utc));
    return new Date(utc + offsetMilliseconds);
}
exports.default = zonedTimeToUtc;

},{"date-fns/_lib/cloneObject/index.js":"gs3tz","../toDate/index.js":"lwKwP","../_lib/tzPattern/index.js":"giQZf","../_lib/tzParseTimezone/index.js":"kzqA4","../_lib/newDateUTC/index.js":"i0Ku6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5m9en","aSihg"], "aSihg", "parcelRequirec891")

//# sourceMappingURL=index.f54bfa54.js.map
