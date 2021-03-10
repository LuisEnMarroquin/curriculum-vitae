const { Builder, By, until } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/firefox')

const options = process.env.GITHUB_ACTIONS === 'true' ? new Options().headless() : new Options()
options.windowSize({ width: 1000, height: 925 })

const driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

(async function totalTesting () {
  const waitMillisecs = 10000
  const everyMillisecs = 2000
  const timedOut = `Timed out after ${waitMillisecs / 1000} seconds, checking for its presence every ${everyMillisecs / 1000} seconds`

  const elementClick = (element) => {
    return driver.wait(until.elementLocated(element), waitMillisecs, timedOut, everyMillisecs).then(locatedElement => {
      driver.wait(until.elementIsVisible(locatedElement), waitMillisecs, timedOut, everyMillisecs).then(visibleElement => {
        driver.wait(until.elementIsEnabled(visibleElement), waitMillisecs, timedOut, everyMillisecs).then(() => {
          driver.findElement(element).click()
        })
      })
    })
  }

  try {
    await driver.get('http://localhost:3000')

    await driver.executeScript('document.getElementsByTagName("html")[0].style.transform = "scale(0.9) translate(0%, -5%)"')

    await elementClick({ id: 'selectLang' })

    await elementClick(By.css('li[data-value="2"]'))
  } catch (error) {
    console.error(`%%%%%%%%%% Fatal error ${error} %%%%%%%%%%`)
  }
})()
