/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./alare/preloads/main-preload.ts":
/*!****************************************!*\
  !*** ./alare/preloads/main-preload.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var electronHandler = {
    getApps: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return electron_1.ipcRenderer.invoke.apply(electron_1.ipcRenderer, __spreadArray(['event:getApps'], args, false));
    },
    getScreens: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return electron_1.ipcRenderer.invoke.apply(electron_1.ipcRenderer, __spreadArray(['event:getScreens'], args, false));
    },
    openApp: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return electron_1.ipcRenderer.invoke.apply(electron_1.ipcRenderer, __spreadArray(['event:openApp'], args, false));
    },
    ipcRenderer: {
        sendMessage: function (channel) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            electron_1.ipcRenderer.send.apply(electron_1.ipcRenderer, __spreadArray([channel], args, false));
        },
        on: function (channel, func) {
            var subscription = function (_event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return func.apply(void 0, args);
            };
            electron_1.ipcRenderer.on(channel, subscription);
            return function () {
                electron_1.ipcRenderer.removeListener(channel, subscription);
            };
        },
        once: function (channel, func) {
            electron_1.ipcRenderer.once(channel, function (_event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return func.apply(void 0, args);
            });
        },
    },
};
electron_1.contextBridge.exposeInMainWorld('electron', electronHandler);


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./alare/preloads/main-preload.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wcmVsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUF1RTtBQUl2RSxJQUFNLGVBQWUsR0FBRztJQUN0QixPQUFPLEVBQUU7UUFBQyxjQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLHlCQUFXOztRQUFLLDZCQUFXLENBQUMsTUFBTSxPQUFsQixzQkFBVyxpQkFBUSxlQUFlLEdBQUssSUFBSTtJQUEzQyxDQUE0QztJQUN0RSxVQUFVLEVBQUU7UUFBQyxjQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLHlCQUFXOztRQUFLLDZCQUFXLENBQUMsTUFBTSxPQUFsQixzQkFBVyxpQkFBUSxrQkFBa0IsR0FBSyxJQUFJO0lBQTlDLENBQStDO0lBQzVFLE9BQU8sRUFBRTtRQUFDLGNBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgseUJBQVc7O1FBQUssNkJBQVcsQ0FBQyxNQUFNLE9BQWxCLHNCQUFXLGlCQUFRLGVBQWUsR0FBSyxJQUFJO0lBQTNDLENBQTRDO0lBQ3RFLFdBQVcsRUFBRTtRQUNYLFdBQVcsWUFBQyxPQUFpQjtZQUFFLGNBQWtCO2lCQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7Z0JBQWxCLDZCQUFrQjs7WUFDL0Msc0JBQVcsQ0FBQyxJQUFJLE9BQWhCLHNCQUFXLGlCQUFNLE9BQU8sR0FBSyxJQUFJLFVBQUM7UUFDcEMsQ0FBQztRQUNELEVBQUUsWUFBQyxPQUFpQixFQUFFLElBQWtDO1lBQ3RELElBQU0sWUFBWSxHQUFHLFVBQUMsTUFBd0I7Z0JBQUUsY0FBa0I7cUJBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtvQkFBbEIsNkJBQWtCOztnQkFDaEUsV0FBSSxlQUFJLElBQUk7WUFBWixDQUFhO1lBQ2Ysc0JBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztZQUVyQyxPQUFPO2dCQUNMLHNCQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7WUFDbkQsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLFlBQUMsT0FBaUIsRUFBRSxJQUFrQztZQUN4RCxzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO2dCQUFFLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCw2QkFBTzs7Z0JBQUssV0FBSSxlQUFJLElBQUk7WUFBWixDQUFhLENBQUM7UUFDL0QsQ0FBQztLQUNGO0NBQ0Y7QUFFRCx3QkFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FDM0I1RDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLWFyYWxlLy4vYWxhcmUvcHJlbG9hZHMvbWFpbi1wcmVsb2FkLnRzIiwid2VicGFjazovL2VsZWN0cm9uLWFyYWxlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLWFyYWxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLWFyYWxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tYXJhbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZWN0cm9uLWFyYWxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5leHBvcnQgdHlwZSBDaGFubmVscyA9ICdpcGMtZ2V0LWFwcHMnIHwgJ2lwYy1leGFtcGxlJ1xuXG5jb25zdCBlbGVjdHJvbkhhbmRsZXIgPSB7XG4gIGdldEFwcHM6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpnZXRBcHBzJywgLi4uYXJncyksXG4gIGdldFNjcmVlbnM6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpnZXRTY3JlZW5zJywgLi4uYXJncyksXG4gIG9wZW5BcHA6ICguLi5hcmdzOiBbXSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdldmVudDpvcGVuQXBwJywgLi4uYXJncyksXG4gIGlwY1JlbmRlcmVyOiB7XG4gICAgc2VuZE1lc3NhZ2UoY2hhbm5lbDogQ2hhbm5lbHMsIC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgaXBjUmVuZGVyZXIuc2VuZChjaGFubmVsLCAuLi5hcmdzKVxuICAgIH0sXG4gICAgb24oY2hhbm5lbDogQ2hhbm5lbHMsIGZ1bmM6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQpIHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgc3Vic2NyaXB0aW9uKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihjaGFubmVsLCBzdWJzY3JpcHRpb24pXG4gICAgICB9XG4gICAgfSxcbiAgICBvbmNlKGNoYW5uZWw6IENoYW5uZWxzLCBmdW5jOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKSB7XG4gICAgICBpcGNSZW5kZXJlci5vbmNlKGNoYW5uZWwsIChfZXZlbnQsIC4uLmFyZ3MpID0+IGZ1bmMoLi4uYXJncykpXG4gICAgfSxcbiAgfSxcbn1cblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCBlbGVjdHJvbkhhbmRsZXIpXG5cbmV4cG9ydCB0eXBlIEVsZWN0cm9uSGFuZGxlciA9IHR5cGVvZiBlbGVjdHJvbkhhbmRsZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2FsYXJlL3ByZWxvYWRzL21haW4tcHJlbG9hZC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==