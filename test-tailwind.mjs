import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";
import fs from "fs";

const input = `
@tailwind utilities;
`;

postcss([tailwind()])
  .process(input, { from: undefined })
  .then((result) => {
    fs.writeFileSync("output.css", result.css);
    console.log("GENERADO!");
  })
  .catch(console.error);
