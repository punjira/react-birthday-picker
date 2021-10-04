/**
 * avoid commits to long living branches
 */

const { exec } = require("child_process");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

(function () {
  exec("git rev-parse --abbrev-ref HEAD", function (error, stdout, stderr) {
    if (
      stdout === "dev" ||
      stdout === "develop" ||
      stdout === "development" ||
      stdout === "master"
    ) {
      console.log(
        RED +
          " You can't commit on " +
          YELLOW +
          " " +
          stdout +
          " branch" +
          RESET
      );
      process.exit(1);
    }
  });
})();
