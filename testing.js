const { existsSync, mkdirSync } = require('fs')
const puppeteer = require('puppeteer');

(async () => {
  const build = './build'
  if (await !existsSync(build)) await mkdirSync(build)

  const pagePDF = { width: 1400, height: 980, pageRanges: '1-1', printBackground: true }

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
  await page.setViewport({ width: 1500, height: 1200 })

  await page.pdf({ ...pagePDF, path: 'build/curriculum-en.pdf' })

  const dropdown = await page.$('#selectLang')
  await dropdown.click()

  const spanish = await page.$('li[data-value="2"]')
  await spanish.click()

  await page.pdf({ ...pagePDF, path: 'build/curriculum-es.pdf' })

  await browser.close()
})()
