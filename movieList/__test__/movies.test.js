const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// Boilerplate code
const {deleteMovie, checkedMovie, uncheckedMovie} = require('../testFunctions/tests')
// ----------------------------------------------------------------------

// Establish what the runner will do by having it go to the website:

beforeAll( async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

// Tests go here
    describe('This will add a movie then fire various functions', () => {
        test('checks a movie that has been added', async ()=> {
            await checkedMovie(driver)
            await driver.sleep(5000)
            
        })
        test('unchecks movie from the list', async ()=> {
            await uncheckedMovie(driver)
            await driver.sleep(5000)
        })
        test('deletes the movie added', async () => {
        await deleteMovie(driver)
        await driver.sleep(5000)
        })
    })


afterAll( async () => {
    await driver.quit()
})
// Then it will quit the test at the end
// ----------------------------------------------------------------------