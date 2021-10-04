/**
 * avoid commits to long living branches
 */

const util = require("util");
const exec = util.promisify(require("child_process").exec);

const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

(async function () {
  const { stdout, stderr } = await exec("git rev-parse --abbrev-ref HEAD");
  const branch = stdout.replace(/\s/g, "");
  if (
    branch === "dev" ||
    branch === "develop" ||
    branch === "development" ||
    branch === "master"
  ) {
    console.log(
      RED +
        " You can't commit on " +
        YELLOW +
        " " +
        branch +
        RED +
        " branch" +
        RESET
    );
    process.exit(1);
  }
})();
