/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _decorators = __webpack_require__(1);
	
	var Decorator1 = _decorators.Decorator1;
	var Decorator2 = _decorators.Decorator2;
	
	/*@Decorator1*/
	/*@Decorator2({module: "MY MODULE"})*/
	
	var MyClass = function MyClass() {
	  _classCallCheck(this, MyClass);
	
	  console.log("Instantiate my class");
	};
	
	new Decorator1(undefined, new Decorator2({ module: "MY MODULE" }, MyClass));
	
	console.log(MyClass.annotations);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.Decorator1 = Decorator1;
	exports.Decorator2 = Decorator2;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function addAnnotation(decorable, annotation) {
	  decorable.annotations = decorable.annotations || [];
	  decorable.annotations.push(annotation);
	  return decorable;
	}
	
	var Annotation1 = function Annotation1() {
	  _classCallCheck(this, Annotation1);
	};
	
	var Annotation2 = function Annotation2(config) {
	  _classCallCheck(this, Annotation2);
	
	  this.config = config;
	};
	
	function Decorator1(config, decorable) {
	  console.log(["Decorator1", config, decorable]);
	  decorable = addAnnotation(decorable, new Annotation1(config));
	  return decorable;
	}
	
	function Decorator2(config, decorable) {
	  console.log(["Decorator2", config, decorable]);
	  decorable = addAnnotation(decorable, new Annotation2(config));
	  return decorable;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNlYmQ5OGM5NzQyYjA0YzUyNTQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZGVjb3JhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7Ozs7dUNDdENxQyxDQUFjOztLQUEzQyxVQUFVLGVBQVYsVUFBVTtLQUFFLFVBQVUsZUFBVixVQUFVOzs7OztLQUl4QixPQUFPLEdBQ0EsU0FEUCxPQUFPLEdBQ0c7eUJBRFYsT0FBTzs7QUFFVCxVQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7RUFDckM7O0FBQ0QsS0FBSSxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUzRSxRQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQzs7Ozs7Ozs7OztTQ0loQixVQUFVLEdBQVYsVUFBVTtTQU1WLFVBQVUsR0FBVixVQUFVOzs7O0FBcEIxQixVQUFTLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQzVDLFlBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7QUFDcEQsWUFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsVUFBTyxTQUFTLENBQUM7RUFDbEI7O0tBRUssV0FBVyxZQUFYLFdBQVc7eUJBQVgsV0FBVzs7O0tBRVgsV0FBVyxHQUNKLFNBRFAsV0FBVyxDQUNILE1BQU0sRUFBRTt5QkFEaEIsV0FBVzs7QUFFYixPQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztFQUN0Qjs7QUFHSSxVQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQzVDLFVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLFlBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELFVBQU8sU0FBUyxDQUFDO0VBQ2xCOztBQUVNLFVBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDNUMsVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDOUMsWUFBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsVUFBTyxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2ViZDk4Yzk3NDJiMDRjNTI1NFxuICoqLyIsImltcG9ydCB7RGVjb3JhdG9yMSwgRGVjb3JhdG9yMn0gZnJvbSAnLi9kZWNvcmF0b3JzJztcblxuLypARGVjb3JhdG9yMSovXG4vKkBEZWNvcmF0b3IyKHttb2R1bGU6IFwiTVkgTU9EVUxFXCJ9KSovXG5jbGFzcyBNeUNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnN0YW50aWF0ZSBteSBjbGFzc1wiKTtcbiAgfVxufSBuZXcgRGVjb3JhdG9yMSh1bmRlZmluZWQsIG5ldyBEZWNvcmF0b3IyKHttb2R1bGU6IFwiTVkgTU9EVUxFXCJ9LCBNeUNsYXNzKSlcblxuY29uc29sZS5sb2coTXlDbGFzcy5hbm5vdGF0aW9ucylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9kZWNvcmF0b3JzLWxvYWRlciEuL2FwcC9hcHAuanNcbiAqKi8iLCJmdW5jdGlvbiBhZGRBbm5vdGF0aW9uKGRlY29yYWJsZSwgYW5ub3RhdGlvbikge1xuICBkZWNvcmFibGUuYW5ub3RhdGlvbnMgPSBkZWNvcmFibGUuYW5ub3RhdGlvbnMgfHwgW107XG4gIGRlY29yYWJsZS5hbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICByZXR1cm4gZGVjb3JhYmxlO1xufVxuXG5jbGFzcyBBbm5vdGF0aW9uMSB7fVxuXG5jbGFzcyBBbm5vdGF0aW9uMiB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWNvcmF0b3IxKGNvbmZpZywgZGVjb3JhYmxlKSB7XG4gIGNvbnNvbGUubG9nKFtcIkRlY29yYXRvcjFcIiwgY29uZmlnLCBkZWNvcmFibGVdKVxuICBkZWNvcmFibGUgPSBhZGRBbm5vdGF0aW9uKGRlY29yYWJsZSwgbmV3IEFubm90YXRpb24xKGNvbmZpZykpXG4gIHJldHVybiBkZWNvcmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWNvcmF0b3IyKGNvbmZpZywgZGVjb3JhYmxlKSB7XG4gIGNvbnNvbGUubG9nKFtcIkRlY29yYXRvcjJcIiwgY29uZmlnLCBkZWNvcmFibGVdKVxuICBkZWNvcmFibGUgPSBhZGRBbm5vdGF0aW9uKGRlY29yYWJsZSwgbmV3IEFubm90YXRpb24yKGNvbmZpZykpXG4gIHJldHVybiBkZWNvcmFibGU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZGVjb3JhdG9ycy1sb2FkZXIhLi9hcHAvZGVjb3JhdG9ycy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImFwcC5qcyJ9