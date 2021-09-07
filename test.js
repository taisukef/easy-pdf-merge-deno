import { mergePDF } from "./PDFMerger.js";

const test = async (opts) => {
  //await mergePDF(["test/github cheat sheet.pdf", "test/text_extraction.pdf"], "test/Out.pdf", opts);
  await mergePDF(["test/text_extraction.pdf", "test/text_extraction.pdf"], "./test/Out.pdf", opts);
  console.log("Success");
};

await test();

/*
await test({
  maxBuffer: 1024 * 500, // 500kb
  maxHeap: '' // for setting JVM heap limits
});

await test({
  maxBuffer: 1024 * 500, // 500kb
  maxHeap: '10m' // for setting JVM heap limits
});
*/