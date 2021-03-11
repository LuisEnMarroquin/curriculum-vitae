const { existsSync, mkdirSync } = require('fs')
const puppeteer = require('puppeteer'); // Dont remove this semicolon

(async () => {
  const build = './build'
  if (await !existsSync(build)) await mkdirSync(build)

  const pagePDF = { width: 1295, height: 850, pageRanges: '1-1', printBackground: true }

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
  await page.setViewport({ width: 1920, height: 1080 })

  await page.pdf({ ...pagePDF, path: 'build/cv-en.pdf' })

  const dropdown = await page.$('#selectLang')
  await dropdown.click()

  const spanish = await page.$('li[data-value="2"]')
  await spanish.click()

  await page.pdf({ ...pagePDF, path: 'build/cv-es.pdf' })

  await browser.close()
})()
