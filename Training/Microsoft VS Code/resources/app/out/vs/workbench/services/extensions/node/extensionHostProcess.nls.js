/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/services/extensions/node/extensionHostProcess.nls",{"vs/base/common/date":["in {0}","now","{0} sec ago","{0} secs ago","{0} sec","{0} secs","{0} min ago","{0} mins ago","{0} min","{0} mins","{0} hr ago","{0} hrs ago","{0} hr","{0} hrs","{0} day ago","{0} days ago","{0} day","{0} days","{0} wk ago","{0} wks ago","{0} wk","{0} wks","{0} mo ago","{0} mos ago","{0} mo","{0} mos","{0} yr ago","{0} yrs ago","{0} yr","{0} yrs"],"vs/base/common/errorMessage":["{0}: {1}","A system error occurred ({0})","An unknown error occurred. Please consult the log for more details.","An unknown error occurred. Please consult the log for more details.","{0} ({1} errors in total)","An unknown error occurred. Please consult the log for more details."],"vs/base/node/processes":["Can't execute a shell command on a UNC drive."],
"vs/editor/common/config/editorOptions":["The editor will use platform APIs to detect when a Screen Reader is attached.","The editor will be permanently optimized for usage with a Screen Reader.","The editor will never be optimized for usage with a Screen Reader.","Controls whether the editor should run in a mode where it is optimized for screen readers.","Controls whether a space character is inserted when commenting.","Controls if empty lines should be ignored with toggle, add or remove actions for line comments.","Controls whether copying without a selection copies the current line.","Controls whether the search string in the Find Widget is seeded from the editor selection.","Never turn on Find in selection automatically (default)","Always turn on Find in selection automatically","Turn on Find in selection automatically when multiple lines of content are selected.","Controls whether the find operation is carried out on selected text or the entire file in the editor.","Controls whether the Find Widget should read or modify the shared find clipboard on macOS.","Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.","Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.","Enables/Disables font ligatures.","Explicit font-feature-settings.","Configures font ligatures or font features.","Controls the font size in pixels.","Show peek view of the results (default)","Go to the primary result and show a peek view","Go to the primary result and enable peek-less navigation to others","This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead.","Controls the behavior the 'Go to Definition'-command when multiple target locations exist.","Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.","Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.","Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.","Controls the behavior the 'Go to References'-command when multiple target locations exist.","Alternative command id that is being executed when the result of 'Go to Definition' is the current location.","Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.","Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.","Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.","Alternative command id that is being executed when the result of 'Go to Reference' is the current location.","Controls whether the hover is shown.","Controls the delay in milliseconds after which the hover is shown.","Controls whether the hover should remain visible when mouse is moved over it.","Enables the code action lightbulb in the editor.","Controls the line height. Use 0 to compute the line height from the font size.","Controls whether the minimap is shown.","The minimap has the same size as the editor contents (and might scroll).","The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling).","The minimap will shrink as necessary to never be larger than the editor (no scrolling).","Controls the size of the minimap.","Controls the side where to render the minimap.","Controls when the minimap slider is shown.","Scale of content drawn in the minimap: 1, 2 or 3.","Render the actual characters on a line as opposed to color blocks.","Limit the width of the minimap to render at most a certain number of columns.","Controls the amount of space between the top edge of the editor and the first line.","Controls the amount of space between the bottom edge of the editor and the last line.","Enables a pop-up that shows parameter documentation and type information as you type.","Controls whether the parameter hints menu cycles or closes when reaching the end of the list.","Enable quick suggestions inside strings.","Enable quick suggestions inside comments.","Enable quick suggestions outside of strings and comments.","Controls whether suggestions should automatically show up while typing.","Line numbers are not rendered.","Line numbers are rendered as absolute number.","Line numbers are rendered as distance in lines to cursor position.","Line numbers are rendered every 10 lines.","Controls the display of line numbers.","Number of monospace characters at which this editor ruler will render.","Color of this editor ruler.","Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.","Insert suggestion without overwriting text right of the cursor.","Insert suggestion and overwrite text right of the cursor.","Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.","Controls whether filtering and sorting suggestions accounts for small typos.","Controls whether sorting favours words that appear close to the cursor.","Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).","Controls whether an active snippet prevents quick suggestions.","Controls whether to show or hide icons in suggestions.","Controls how many suggestions IntelliSense will show before showing a scrollbar (maximum 15).","This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.","When enabled IntelliSense shows `method`-suggestions.","When enabled IntelliSense shows `function`-suggestions.","When enabled IntelliSense shows `constructor`-suggestions.","When enabled IntelliSense shows `field`-suggestions.","When enabled IntelliSense shows `variable`-suggestions.","When enabled IntelliSense shows `class`-suggestions.","When enabled IntelliSense shows `struct`-suggestions.","When enabled IntelliSense shows `interface`-suggestions.","When enabled IntelliSense shows `module`-suggestions.","When enabled IntelliSense shows `property`-suggestions.","When enabled IntelliSense shows `event`-suggestions.","When enabled IntelliSense shows `operator`-suggestions.","When enabled IntelliSense shows `unit`-suggestions.","When enabled IntelliSense shows `value`-suggestions.","When enabled IntelliSense shows `constant`-suggestions.","When enabled IntelliSense shows `enum`-suggestions.","When enabled IntelliSense shows `enumMember`-suggestions.","When enabled IntelliSense shows `keyword`-suggestions.","When enabled IntelliSense shows `text`-suggestions.","When enabled IntelliSense shows `color`-suggestions.","When enabled IntelliSense shows `file`-suggestions.","When enabled IntelliSense shows `reference`-suggestions.","When enabled IntelliSense shows `customcolor`-suggestions.","When enabled IntelliSense shows `folder`-suggestions.","When enabled IntelliSense shows `typeParameter`-suggestions.","When enabled IntelliSense shows `snippet`-suggestions.","When enabled IntelliSense shows `user`-suggestions.","When enabled IntelliSense shows `issues`-suggestions.","Controls the visibility of the status bar at the bottom of the suggest widget.","Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.","Only accept a suggestion with `Enter` when it makes a textual change.","Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.","Controls the number of lines in the editor that can be read out by a screen reader. Warning: this has a performance implication for numbers larger than the default.","Editor content","Use language configurations to determine when to autoclose brackets.","Autoclose brackets only when the cursor is to the left of whitespace.","Controls whether the editor should automatically close brackets after the user adds an opening bracket.","Type over closing quotes or brackets only if they were automatically inserted.","Controls whether the editor should type over closing quotes or brackets.","Use language configurations to determine when to autoclose quotes.","Autoclose quotes only when the cursor is to the left of whitespace.","Controls whether the editor should automatically close quotes after the user adds an opening quote.","The editor will not insert indentation automatically.","The editor will keep the current line's indentation.","The editor will keep the current line's indentation and honor language defined brackets.","The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages.","The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.","Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.","Use language configurations to determine when to automatically surround selections.","Surround with quotes but not brackets.","Surround with brackets but not quotes.","Controls whether the editor should automatically surround selections.","Controls whether the editor shows CodeLens.","Controls whether the editor should render the inline color decorators and color picker.","Enable that the selection with the mouse and keys is doing column selection.","Controls whether syntax highlighting should be copied into the clipboard.","Control the cursor animation style.","Controls whether the smooth caret animation should be enabled.","Controls the cursor style.","Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as 'scrollOff' or `scrollOffset` in some other editors.","`cursorSurroundingLines` is enforced only when triggered via the keyboard or API.","`cursorSurroundingLines` is enforced always.","Controls when `cursorSurroundingLines` should be enforced.","Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.","Controls whether the editor should allow moving selections via drag and drop.","Scrolling speed multiplier when pressing `Alt`.","Controls whether the editor has code folding enabled.","Use a language-specific folding strategy if available, else the indentation-based one.","Use the indentation-based folding strategy.","Controls the strategy for computing folding ranges.","Controls whether the editor should highlight folded ranges.","Controls whether clicking on the empty content after a folded line will unfold the line.","Controls the font family.","Controls the font weight.","Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.","Controls whether the editor should automatically format the line after typing.","Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.","Controls whether the cursor should be hidden in the overview ruler.","Controls whether the editor should highlight the active indent guide.","Controls the letter spacing in pixels.","Controls whether the editor should detect links and make them clickable.","Highlight matching brackets.","A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.","Zoom the font of the editor when using mouse wheel and holding `Ctrl`.","Merge multiple cursors when they are overlapping.","Maps to `Control` on Windows and Linux and to `Command` on macOS.","Maps to `Alt` on Windows and Linux and to `Option` on macOS.","The modifier to be used to add multiple cursors with the mouse. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. [Read more](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).","Each cursor pastes a single line of the text.","Each cursor pastes the full text.","Controls pasting when the line count of the pasted text matches the cursor count.","Controls whether the editor should highlight semantic symbol occurrences.","Controls whether a border should be drawn around the overview ruler.","Focus the tree when opening peek","Focus the editor when opening peek","Controls whether to focus the inline editor or the tree in the peek widget.","Controls whether the Go to Definition mouse gesture always opens the peek widget.","Controls the delay in milliseconds after which quick suggestions will show up.","Controls whether the editor auto renames on type.","Controls whether the editor should render control characters.","Controls whether the editor should render indent guides.","Render last line number when the file ends with a newline.","Highlights both the gutter and the current line.","Controls how the editor should render the current line highlight.","Controls if the editor should render the current line highlight only when the editor is focused","Render whitespace characters except for single spaces between words.","Render whitespace characters only on selected text.","Controls how the editor should render whitespace characters.","Controls whether selections should have rounded corners.","Controls the number of extra characters beyond which the editor will scroll horizontally.","Controls whether the editor will scroll beyond the last line.","Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.","Controls whether the Linux primary clipboard should be supported.","Controls whether the editor should highlight matches similar to the selection.","Always show the folding controls.","Only show the folding controls when the mouse is over the gutter.","Controls when the folding controls on the gutter are shown.","Controls fading out of unused code.","Controls strikethrough deprecated variables.","Show snippet suggestions on top of other suggestions.","Show snippet suggestions below other suggestions.","Show snippets suggestions with other suggestions.","Do not show snippet suggestions.","Controls whether snippets are shown with other suggestions and how they are sorted.","Controls whether the editor will scroll using an animation.","Font size for the suggest widget. When set to `0`, the value of `#editor.fontSize#` is used.","Line height for the suggest widget. When set to `0`, the value of `#editor.lineHeight#` is used.","Controls whether suggestions should automatically show up when typing trigger characters.","Always select the first suggestion.","Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently.","Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.","Controls how suggestions are pre-selected when showing the suggest list.","Tab complete will insert the best matching suggestion when pressing tab.","Disable tab completions.","Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.","Enables tab completions.","Unusual line terminators are ignored.","Unusual line terminators prompt to be removed.","Unusual line terminators are automatically removed.","Remove unusual line terminators that might cause problems.","Inserting and deleting whitespace follows tab stops.","Characters that will be used as word separators when doing word related navigations or operations.","Lines will never wrap.","Lines will wrap at the viewport width.","Lines will wrap at `#editor.wordWrapColumn#`.","Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.","Controls how lines should wrap.","Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.","No indentation. Wrapped lines begin at column 1.","Wrapped lines get the same indentation as the parent.","Wrapped lines get +1 indentation toward the parent.","Wrapped lines get +2 indentation toward the parent.","Controls the indentation of wrapped lines.","Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width.","Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.","Controls the algorithm that computes wrapping points."],
"vs/platform/configuration/common/configurationRegistry":["Default Language Configuration Overrides","Configure settings to be overridden for {0} language.","Configure editor settings to be overridden for a language.","This setting does not support per-language configuration.","Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.","Cannot register '{0}'. This property is already registered."],"vs/platform/extensionManagement/common/extensionManagement":["Extensions","Preferences"],"vs/platform/files/common/files":["Unknown Error","{0}B","{0}KB","{0}MB","{0}GB","{0}TB"],"vs/platform/markers/common/markers":["Error","Warning","Info"],"vs/platform/workspaces/common/workspaces":["Code Workspace"],"vs/workbench/api/common/extHost.api.impl":["{0} (Extension)"],"vs/workbench/api/common/extHostDiagnostics":["Not showing {0} further errors and warnings."],
"vs/workbench/api/common/extHostExtensionActivator":["Cannot activate extension '{0}' because it depends on extension '{1}', which failed to activate.","Activating extension '{0}' failed: {1}."],"vs/workbench/api/common/extHostExtensionService":["Path {0} does not point to a valid extension test runner."],"vs/workbench/api/common/extHostProgress":["{0} (Extension)"],"vs/workbench/api/common/extHostStatusBar":["Extension Status"],"vs/workbench/api/common/extHostTerminalService":["Could not find the terminal with id {0} on the extension host"],"vs/workbench/api/common/extHostTreeViews":["No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","Element with id {0} is already registered"],"vs/workbench/api/common/extHostWorkspace":["Extension '{0}' failed to update workspace folders: {1}"],
"vs/workbench/api/node/extHostDebugService":["debuggee"],"vs/workbench/contrib/debug/node/debugAdapter":["Debug adapter executable '{0}' does not exist.","Cannot determine executable for debug adapter '{0}'.","Unable to launch debug adapter from '{0}'.","Unable to launch debug adapter."],"vs/workbench/contrib/externalTerminal/node/externalTerminalService":["VS Code Console","Script '{0}' failed with exit code {1}","'{0}' not supported","Press any key to continue...","'{0}' failed with exit code {1}","can't find terminal application '{0}'"],"vs/workbench/contrib/search/common/queryBuilder":["No folder in workspace with name: {0}"],"vs/workbench/contrib/terminal/common/terminal":["Terminal","Contributes terminal functionality.","Defines additional terminal types that the user can create.","Command to execute when the user creates this type of terminal.","Title for this type of terminal."],
"vs/workbench/contrib/terminal/node/terminalProcess":['Starting directory (cwd) "{0}" is not a directory','Starting directory (cwd) "{0}" does not exist','Path to shell executable "{0}" is not a file of a symlink','Path to shell executable "{0}" does not exist'],
"vs/workbench/services/configurationResolver/common/variableResolver":["'{0}' can not be resolved. Please open an editor.","'{0}' can not be resolved. No such folder '{1}'.","'{0}' can not be resolved in a multi folder workspace. Scope this variable using ':' and a workspace folder name.","'{0}' can not be resolved. Please open a folder.","'{0}' can not be resolved because no environment variable name is given.","'{0}' can not be resolved because setting '{1}' not found.","'{0}' can not be resolved because '{1}' is a structured value.","'{0}' can not be resolved because no settings name is given.","'{0}' can not be resolved. Make sure to have a line selected in the active editor.","'{0}' can not be resolved. Make sure to have some text selected in the active editor.","'{0}' can not be resolved because the command has no value."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3dd905126b34dcd4de81fa624eb3a8cbe7485f13/core/vs/workbench/services/extensions/node/extensionHostProcess.nls.js.map
