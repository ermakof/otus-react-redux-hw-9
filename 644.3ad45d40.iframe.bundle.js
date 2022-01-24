"use strict";(self.webpackChunklines=self.webpackChunklines||[]).push([[644],{"./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/esm/syntaxhighlighter/syntaxhighlighter.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SyntaxHighlighter:function(){return SyntaxHighlighter},createCopyToClipboardFunction:function(){return createCopyToClipboardFunction},default:function(){return syntaxhighlighter}});__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/client-logger/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/theming/dist/esm/index.js"),global_window=__webpack_require__("./node_modules/global/window.js"),window_default=__webpack_require__.n(global_window),memoizerific=__webpack_require__("./node_modules/memoizerific/memoizerific.js"),memoizerific_default=__webpack_require__.n(memoizerific),jsx=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js"),bash=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/bash.js"),css=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/css.js"),js_extras=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/js-extras.js"),json=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/json.js"),graphql=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/graphql.js"),markup=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/markup.js"),markdown=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/markdown.js"),yaml=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js"),tsx=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/tsx.js"),typescript=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/typescript.js"),prism_light=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism-light.js"),ActionBar=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/esm/ActionBar/ActionBar.js"),ScrollArea=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/esm/ScrollArea/ScrollArea.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),formatter=memoizerific_default()(2)((function(code){return(0,ts_dedent_esm.default)(code)}));function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var syntaxhighlighter_navigator=window_default().navigator,syntaxhighlighter_document=window_default().document,globalWindow=window_default().window;prism_light.default.registerLanguage("jsextra",js_extras.default),prism_light.default.registerLanguage("jsx",jsx.default),prism_light.default.registerLanguage("json",json.default),prism_light.default.registerLanguage("yml",yaml.default),prism_light.default.registerLanguage("md",markdown.default),prism_light.default.registerLanguage("bash",bash.default),prism_light.default.registerLanguage("css",css.default),prism_light.default.registerLanguage("html",markup.default),prism_light.default.registerLanguage("tsx",tsx.default),prism_light.default.registerLanguage("typescript",typescript.default),prism_light.default.registerLanguage("graphql",graphql.default);var themedSyntax=memoizerific_default()(2)((function(theme){return Object.entries(theme.code||{}).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];return Object.assign({},acc,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},"* .".concat(key),val))}),{})})),copyToClipboard=createCopyToClipboardFunction();function createCopyToClipboardFunction(){return null!=syntaxhighlighter_navigator&&syntaxhighlighter_navigator.clipboard?function(text){return syntaxhighlighter_navigator.clipboard.writeText(text)}:function(){var _ref3=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(text){var tmp,focus;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:tmp=syntaxhighlighter_document.createElement("TEXTAREA"),focus=syntaxhighlighter_document.activeElement,tmp.value=text,syntaxhighlighter_document.body.appendChild(tmp),tmp.select(),syntaxhighlighter_document.execCommand("copy"),syntaxhighlighter_document.body.removeChild(tmp),focus.focus();case 8:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref3.apply(this,arguments)}}()}var Wrapper=dist_esm.styled.div((function(_ref4){return{position:"relative",overflow:"hidden",color:_ref4.theme.color.defaultText}}),(function(_ref5){var theme=_ref5.theme;return _ref5.bordered?{border:"1px solid ".concat(theme.appBorderColor),borderRadius:theme.borderRadius,background:theme.background.content}:{}})),Scroller=(0,dist_esm.styled)((function(_ref6){var children=_ref6.children,className=_ref6.className;return react.createElement(ScrollArea.x,{horizontal:!0,vertical:!0,className:className},children)}))({position:"relative"},(function(_ref7){return{"& code":{paddingRight:_ref7.theme.layoutMargin}}}),(function(_ref8){var theme=_ref8.theme;return themedSyntax(theme)})),Pre=dist_esm.styled.pre((function(_ref9){var theme=_ref9.theme;return{display:"flex",justifyContent:"flex-start",margin:0,padding:_ref9.padded?theme.layoutMargin:0}})),Code=dist_esm.styled.code({flex:1,paddingRight:0,opacity:1}),SyntaxHighlighter=function SyntaxHighlighter(_ref10){var children=_ref10.children,_ref10$language=_ref10.language,language=void 0===_ref10$language?"jsx":_ref10$language,_ref10$copyable=_ref10.copyable,copyable=void 0!==_ref10$copyable&&_ref10$copyable,_ref10$bordered=_ref10.bordered,bordered=void 0!==_ref10$bordered&&_ref10$bordered,_ref10$padded=_ref10.padded,padded=void 0!==_ref10$padded&&_ref10$padded,_ref10$format=_ref10.format,format=void 0===_ref10$format||_ref10$format,_ref10$className=_ref10.className,className=void 0===_ref10$className?null:_ref10$className,_ref10$showLineNumber=_ref10.showLineNumbers,showLineNumbers=void 0!==_ref10$showLineNumber&&_ref10$showLineNumber,rest=_objectWithoutProperties(_ref10,["children","language","copyable","bordered","padded","format","className","showLineNumbers"]);if("string"!=typeof children||!children.trim())return null;var highlightableCode=format?formatter(children):children.trim(),_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1],onClick=function onClick(e){e.preventDefault();var selectedText=globalWindow.getSelection().toString(),textToCopy="click"!==e.type&&selectedText?selectedText:highlightableCode;copyToClipboard(textToCopy).then((function(){setCopied(!0),globalWindow.setTimeout((function(){return setCopied(!1)}),1500)})).catch(esm.logger.error)};return react.createElement(Wrapper,{bordered:bordered,padded:padded,className:className,onCopyCapture:onClick},react.createElement(Scroller,null,react.createElement(prism_light.default,_extends({padded:padded||bordered,language:language,showLineNumbers:showLineNumbers,showInlineLineNumbers:showLineNumbers,useInlineStyles:!1,PreTag:Pre,CodeTag:Code,lineNumberContainerStyle:{}},rest),highlightableCode)),copyable?react.createElement(ActionBar.o,{actionItems:[{title:copied?"Copied":"Copy",onClick:onClick}]}):null)};SyntaxHighlighter.displayName="SyntaxHighlighter";var syntaxhighlighter=SyntaxHighlighter}}]);