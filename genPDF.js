const { existsSync, mkdirSync } = require("fs")
const { exec } = require("child_process")
const puppeteer = require("puppeteer")

;(async () => {
  const child = exec("npx serve -s build", { encoding: "utf8" }) // Start child process

  const build = "./build"
  if (!existsSync(build)) mkdirSync(build)

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.waitForTimeout(1000)

  const width = 1295
  const height = 895

  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" })
  await page.setViewport({ width, height })

  const baseElement = await page.$("#mainContainer")
  const boundingBox = await baseElement.boundingBox()
  const printHeight = Math.round(boundingBox.height + 1)
  const pagePDF = {
    width,
    height: printHeight,
    pageRanges: "1-1",
    printBackground: true,
  }

  await page.pdf({ ...pagePDF, path: "build/cv-en.pdf" })

  const dropdown = await page.$("#selectLang")
  await dropdown.click()

  const spanish = await page.$('li[data-value="2"]')
  await spanish.click()

  await page.pdf({ ...pagePDF, path: "build/cv-es.pdf" })

  await browser.close()

  await child.kill() // Kill child process

  process.exit(0)
})()
