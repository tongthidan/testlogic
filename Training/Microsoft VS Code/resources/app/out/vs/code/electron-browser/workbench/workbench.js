/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const perf=(globalThis.MonacoPerformanceMarks=globalThis.MonacoPerformanceMarks||[],{mark(t){globalThis.MonacoPerformanceMarks.push(t,Date.now())}});perf.mark("renderer/started");const bootstrapWindow=(()=>window.MonacoBootstrapWindow)();function showPartsSplash(t){let e,o,r,i;if(perf.mark("willShowPartsSplash"),"string"==typeof t.partsSplashPath)try{e=JSON.parse(require.__$__nodeRequire("fs").readFileSync(t.partsSplashPath,"utf8"))}catch(t){}e&&t.highContrast&&"hc-black"!==e.baseTheme&&(e=void 0),e&&t.extensionDevelopmentPath&&(e.layoutInfo=void 0),e?(o=e.baseTheme,r=e.colorInfo.editorBackground,i=e.colorInfo.foreground):t.highContrast||"hc"===t.defaultThemeType?(o="hc-black",r="#000000",i="#FFFFFF"):"vs"===t.defaultThemeType?(o="vs",r="#FFFFFF",i="#000000"):(o="vs-dark",r="#1E1E1E",i="#CCCCCC");const a=document.createElement("style");if(a.className="initialShellColors",document.head.appendChild(a),a.innerHTML=`body { background-color: ${r}; color: ${i}; margin: 0; padding: 0; }`,
e&&e.layoutInfo){const{id:r,layoutInfo:i,colorInfo:a}=e,n=document.createElement("div");n.id=r,n.className=o,i.windowBorder&&(n.style.position="relative",n.style.height="calc(100vh - 2px)",n.style.width="calc(100vw - 2px)",n.style.border="1px solid var(--window-border-color)",n.style.setProperty("--window-border-color",a.windowBorder),i.windowBorderRadius&&(n.style.borderRadius=i.windowBorderRadius)),i.sideBarWidth=Math.min(i.sideBarWidth,window.innerWidth-(i.activityBarWidth+i.editorPartMinWidth)),
t.folderUri||t.workspace?n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${a.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${a.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: ${i.activityBarWidth}px; width: ${i.sideBarWidth}px; background-color: ${a.sideBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${a.statusBarBackground};"></div>\n\t\t\t`:n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${a.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${a.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${a.statusBarNoFolderBackground};"></div>\n\t\t\t`,
document.body.appendChild(n)}perf.mark("didShowPartsSplash")}function getLazyEnv(){const t=bootstrapWindow.globals().ipcRenderer;return new Promise((function(e){const o=setTimeout((function(){e(),console.warn("renderer did not receive lazyEnv in time")}),1e4);t.once("vscode:acceptShellEnv",(function(t,r){clearTimeout(o),Object.assign(process.env,r),e(process.env)})),t.send("vscode:fetchShellEnv")}))}process.lazyEnv=getLazyEnv(),bootstrapWindow.load(["vs/workbench/workbench.desktop.main","vs/nls!vs/workbench/workbench.desktop.main","vs/css!vs/workbench/workbench.desktop.main"],(function(t,e){return perf.mark("didLoadWorkbenchMain"),performance.mark("workbench-start"),process.lazyEnv.then((function(){return perf.mark("main/startup"),require("vs/workbench/electron-browser/desktop.main").main(e)}))}),{removeDeveloperKeybindingsAfterLoad:!0,canModifyDOM:function(t){showPartsSplash(t)},beforeLoaderConfig:function(t,e){e.recordStats=!0},beforeRequire:function(){perf.mark("willLoadWorkbenchMain")}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3dd905126b34dcd4de81fa624eb3a8cbe7485f13/core/vs/code/electron-browser/workbench/workbench.js.map
