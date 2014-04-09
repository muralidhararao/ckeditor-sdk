Ext.data.JsonP.dev_basepath({"guide":"<h1 id='dev_basepath-section-specifying-the-editor-path'>Specifying the Editor Path</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_basepath-section-problem'>Problem</a></li>\n<li><a href='#!/guide/dev_basepath-section-solution%3A-ckeditor_basepath'>Solution: CKEDITOR_BASEPATH</a></li>\n</ol>\n</div>\n\n<p>As explained in the <a href=\"#!/guide/dev_ckeditor_js_load\">Loading CKEditor</a> article, to make CKEditor work it is enough to include the <code>ckeditor.js</code> file in your pages. However, there are some situations when the original editor file name cannot be used:</p>\n\n<ul>\n<li>The file must be renamed, for any reason.</li>\n<li>The original editor script is merged with other scripts used in the page to reduce the number of files being downloaded. This single file will also have a name that is different from <code>ckeditor.js</code>. This is the most common case.</li>\n<li>You have yet another file named <code>ckeditor.js</code> which is not placed in the editor installation directory.</li>\n</ul>\n\n\n<h2 id='dev_basepath-section-problem'>Problem</h2>\n\n<p>In order to work correctly CKEditor needs to know where in the structure of the website it is installed. Thanks to that information the editor is able to load other resource files like skins, language files, plugins, etc. In other words, the <strong>editor installation path</strong> is needed.</p>\n\n<p>By default, CKEditor is looking for the <code>ckeditor.js</code> file in the <code>&lt;script&gt;</code> tags present in the page in order to automatically retrieve its installation path. If it is not able to find it, just like in the cases presented above, the editor will simply not work.</p>\n\n<h2 id='dev_basepath-section-solution%3A-ckeditor_basepath'>Solution: CKEDITOR_BASEPATH</h2>\n\n<p>When loading the editor script, CKEditor is looking for the global <code>CKEDITOR_BASEPATH</code> JavaScript variable that contains the editor installation path. If it is defined, its value is used. Otherwise the automatic detection process described above takes place. In order to solve this uncommon loading issue it is thus enough to define the <code>CKEDITOR_BASEPATH</code> variable. For example:</p>\n\n<pre><code>&lt;script&gt;\n    var CKEDITOR_BASEPATH = '/ckeditor/';\n&lt;/script&gt;\n\n&lt;script src=\"all_my_scripts.js\"&gt;&lt;/script&gt;\n</code></pre>\n\n<p>Note that this global JavaScript variable must be set <strong><em>before</em></strong> you include the CKEditor code. In the example above the variable definition was placed in-page, but it could also be included inside the <code>all_my_scripts.js</code> file, at the beginning (or in any case &mdash; before the editor code).</p>\n","title":"Specifying Editor Path","meta_description":"How to specify the editor path.","meta_keywords":"ckeditor, editor, wysiwyg, install, installation, path, script, basepath"});