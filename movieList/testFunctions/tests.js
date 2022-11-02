const {By} = require('selenium-webdriver')
let searchTerm = 'Knives out'
let despacedSearchTerm = searchTerm.replace(/\s/g, '')


const deleteMovie = async (driver) => {
    // then we will select the new button that is created and delete the movie 
    await driver.sleep(3000)
    await driver.findElement(By.id(`${despacedSearchTerm}`)).click()
    let displayed = await driver.findElement(By.xpath('//ul')).isDisplayed()
    expect(displayed).toBeFalsy()
}

const checkedMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`${searchTerm}\n`)
    await driver.findElement(By.xpath(`//span[text()='${searchTerm}']`)).click()

    expect(driver.findElement(By.xpath('//span[contains(@class, "checked")]'))).toBeTruthy()
}

const uncheckedMovie = async (driver) => {
    await driver.findElement(By.className('checked')).click()
    expect(driver.findElement(By.xpath('//aside[contains(text(), "added back!")]'))).toBeTruthy()
}


module.exports = {
    checkedMovie,
    uncheckedMovie,
    deleteMovie
}