const { scapeHome, scapeCategory } = require('./scaper');
// const scrapers = require('./scaper')

const scrapeController = async (browserInstance) => {
    // const url = 'http://courses.duytan.edu.vn/Sites/Home_ChuongTrinhDaoTao.aspx?p=home_listcoursedetail&courseid=98&timespan=80&t=s'
    const urlPage = 'http://courses.duytan.edu.vn/Sites/Home_ChuongTrinhDaoTao.aspx?p=home_coursesearch&timespan=80'
    try {
        let browser = await browserInstance
        let datahome = await scapeHome(browser,urlPage);
    
        
        // let categories = await scapeCategory(browser,url);


    } catch (error) {
        console.log('lỗi ở scrape controller: ' + error);
    }
}

module.exports = scrapeController;