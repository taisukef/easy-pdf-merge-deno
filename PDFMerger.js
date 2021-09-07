/*
java -jar jar/pdfbox-app-2.0.24.jar
java -jar jar/pdfbox-app-2.0.24.jar PDFMerger "test/github cheat sheet.pdf" test/text_extraction.pdf test/Out.pdf
*/

import { fetchBin } from "https://js.sabae.cc/fetchBin.js";

const PDFBOX = "pdfbox-app-2.0.24.jar";

const URL_PDFBOX = "https://taisukef.github.io/easy-pdf-merge-deno/jar/" + PDFBOX;

const exists = async (fn) => {
  try {
    const s = await Deno.stat(fn);
    //console.log(s);
    return true;
  } catch (e) {
  }
  return false;
}

const mergePDF = async (srcs, dest, opts) => {
  const defaultOpts = {
    maxBuffer: 1024 * 500, // 500kb
    maxHeap: '' // for setting JVM heap limits
  };
  opts ||= defaultOpts;

  const jarPath = "./jar/" + PDFBOX;
  if (!await exists(jarPath)) {
    const jar = await fetchBin(URL_PDFBOX);
    Deno.mkdir("./jar", { recursive: true });
    await Deno.writeFile("./jar/" + PDFBOX, jar);
  }

  let command = [
    "java", "-jar", jarPath, "PDFMerger"
  ];

  const maxHeapOpt = opts.maxHeap ? '-Xmx' + opts.maxHeap : null
  if (maxHeapOpt) {
    command.splice(1, 0, maxHeapOpt)
  }

  command = command.concat(srcs);
  command.push(dest);
  //delete opts.maxHeap;

  // console.log(command.join(" "));
  const p = await Deno.run({ cmd: command, stderr: 'piped', stdout: 'piped' });
  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput()
  ]);
  //console.log(status);
  // console.log(status, new TextDecoder().decode(stdout), new TextDecoder().decode(stderr));
  p.close();
  return status == 0;
};

export { mergePDF };
