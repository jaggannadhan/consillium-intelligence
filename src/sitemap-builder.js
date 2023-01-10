require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./App").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  new Sitemap(router).build("http://consiliumintelligence.com/").save("./public/sitemap.xml");
}

generateSitemap();
