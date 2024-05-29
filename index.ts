import chalk from "chalk";
import degit from "degit";

const emitter = degit("akoenig/create-livestore-app-template#main", {
  cache: false,
  force: true,
  verbose: true,
});

console.log(chalk.gray("Scaffolding your new LiveStore project ..."));

emitter.clone(process.cwd()).then(() => {
  console.log(
    chalk.green("🎉 Your new LiveStore project was scaffolded successfuly!"),
  );
});
