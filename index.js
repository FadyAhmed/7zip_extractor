const Seven = require("node-7z");
const sevenBin = require("7zip-bin");

const pathTo7Zip = sevenBin.path7za;

const filePath = "./test2.7z";
const outputFolderPath = "output";
const password = "123456";

const extractedFolder = Seven.extractFull(filePath, `./${outputFolderPath}`, {
  password: password,
  $bin: pathTo7Zip,
  $progress: true,
});

extractedFolder.on("progress", function (progress) {
  console.log("done", progress.percent, "files extracted", progress.fileCount);
});

extractedFolder.on("end", function (data) {
  require("child_process").exec(`start "" ${outputFolderPath}`);
});
