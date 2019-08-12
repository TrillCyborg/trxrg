const fs = require("fs")
const path = require("path")
const showdown = require('showdown')

const converter = new showdown.Converter()
const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), "./pages/blog/");
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

module.exports = files
  .map(file => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, "utf8");
    const match = META.exec(contents);
    
    if (!match || typeof match[1] !== "string")
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval("(" + match[1] + ")");

    if (meta.exportHtml) {
      const start = contents.indexOf('|start') + '|start'.length
      const end = contents.indexOf('|end')

      if (start === -1 || end === -1)
        throw new Error(`${name} needs to have |start and |end around markdown`);

      const postContent = contents.slice(start, end)
      const html = converter.makeHtml(postContent);
      meta.html = html
    }

    return {
      ...meta,
      path: "/blog/" + file.replace(/\.mdx?$/, ""),
    };
  })
  .filter((meta) => meta.published)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));