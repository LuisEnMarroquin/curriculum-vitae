const { existsSync, mkdirSync } = require('fs');
const puppeteer = require("puppeteer");

(async () => {
  var dir = './build';
  if (await !existsSync(dir)) await mkdirSync(dir)

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: "build/hacker_news.pdf",
    printBackground: true,
    width: 1400,
    height: 990,
    pageRanges: '1-1'
  });

  await browser.close();
})();
