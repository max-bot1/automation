import { Builder, Capabilities, By } from "selenium-webdriver"

import {beforeAll, afterAll, it, test} from '@jest/globals'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



beforeAll (async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})
it ('Adds a movie to the movie list', async() => {
    let inputField = driver.findElement(By.css('[placeholder="Add Movie"]'))

    await driver.sleep(2000)

    await inputField.sendKeys('Tomorrow War\n')

    await driver.sleep(2000)

    let addButton = driver.findElement(By.xpath('//button[text()="Add"]'))
    
    await driver.sleep(2000)
    
    // await addButton.click()
    
    // await driver.sleep(2000)

    await driver.findElement(By.xpath('//button[text()="x"][1]')).click()

    await driver.sleep(2000)
})