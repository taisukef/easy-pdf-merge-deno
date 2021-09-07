## easy-pdf-merge-deno

easy-pdf-merge is a module to merge multiple PDFs into a single PDF easily for Deno. This module uses [Apache PDFBox Library 2.0.24](http://pdfbox.apache.org). No special softwares are required for the module to run. But Java 6 or higher must be present.

forked [karuppiah7890/easy-pdf-merge: An npm module to merge PDFs](https://github.com/karuppiah7890/easy-pdf-merge)
## Usage :

```js
import { mergePDF } from "https://taisukef.github.io/easy-pdf-merge-deno/PDFMerger.js";

await mergePDF(source_pdf_files, dest_pdf_file);
```

source_files must be an array of file paths, with two or more file paths, or the module throws an error accordingly.
dest_file path is the destination path for the merged PDF to be saved.

meargePDF will fetch 'pdfbox.jar' and put it on your local './temp/' folder.

## Example

### Using relative file paths

```javascript
await mergePDF(['File One.pdf', 'File Two.pdf'], 'File Ouput.pdf');
```
### Options

You can pass some options to the `merge` function, like this

```javascript
const opts = {
    maxBuffer: 1024 * 500, // 500kb
    maxHeap: '2g' // for setting JVM heap limits to 2GB
};

await mergePDF(['File One.pdf', 'File Two.pdf'], 'File Ouput.pdf', opts);
```

The default options is this

```javascript
const defaultOpts = {
    maxBuffer: 1024 * 500, // 500kb
    maxHeap: '' // for setting JVM heap limits
};
```

`maxBuffer` - option passed to childprocess invoked by library to run pdfbox.jar java
software. Refer [here](https://nodejs.org/api/child_process.html#child_process_maxbuffer_and_unicode)
for docs

`maxHeap` - To pass value to `-Xmx` Java option, for maximum memory allocation.
Check [this stackoverflow answer](https://stackoverflow.com/questions/14763079/what-are-the-xms-and-xmx-parameters-when-starting-jvm)
for some details

## An App based on easy-pdf-merge!

[PDF Merger](https://github.com/karuppiah7890/pdf-merger-app) is a cross platform Desktop App being developed using [Electron Framework](http://electron.atom.io) and [easy-pdf-merge module](https://www.npmjs.com/package/easy-pdf-merge). You can find the source code of the App [here](https://github.com/karuppiah7890/pdf-merger-app).

## Reporting Issues and Feature Requests

For reporting issues and for feature requests, go to the [github issues page of the module](https://github.com/taisukef/easy-pdf-merge-deno/issues)

## License - Apache License 2.0
```
Copyright 2016 Karuppiah N
Copyright 2021 Taisuke Fukuno

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
