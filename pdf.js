const { existsSync, mkdirSync } = require('fs')
const puppeteer = require('puppeteer'); // Dont remove this semicolon

(async () => {
  const build = './build'
  if (!existsSync(build)) mkdirSync(build)

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
  await page.setViewport({ width: 1920, height: 1080 })

  const baseElement = await page.$('#mainContainer')
  const boundingBox = await baseElement.boundingBox()
  const printHeight = Math.round(boundingBox.height - 45)
  const pagePDF = { width: 1295, height: printHeight, pageRanges: '1-1', printBackground: true }

  await page.pdf({ ...pagePDF, path: 'build/cv-en.pdf' })

  const dropdown = await page.$('#selectLang')
  await dropdown.click()

  const spanish = await page.$('li[data-value="2"]')
  await spanish.click()

  await page.pdf({ ...pagePDF, path: 'build/cv-es.pdf' })

  await browser.close()
})()
