``export default statement to export one item per file``

``export keyword to export multiple items per file``

``import ... from statement to import items from one file to another``

``export default statement to export an unnamed item and rename the item in an import statement``

``as keyword (in an import ... from statement) to alias and namespace all of a file's exported items``

<!--
'-Browser support for ES6 Modules-'
ES6 modules can only be used when a file is specified as a module. You can use an HTTP server to serve an HTML file with a <script> tag of type="module". By running a local web server, you gain browser support for ES6 module syntax by using a <script> tag in an HTML file to specify a JavaScript file as an ES6 module (not just a normal JavaScript file). Note the <script> tag of type="module" below: -->

<script type="module" src="./wallet.js"></script>
