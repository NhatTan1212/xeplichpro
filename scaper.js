const { get } = require("request")
const fs = require("fs")
// const {namhocvalue,hockyvalue,monhocvalue,mamonvalue} = require('./public/main.js');

const scapeHome = async (browser, url) => new Promise(async (resolve, reject) => {
    try {
        const data = fs.readFileSync('data.json');
        const obj = JSON.parse(data);
        let page = await browser.newPage()
        await page.goto(url)
        await page.waitForSelector('.search')
        console.log('web da load xong')

        // const dataHome = await page.$eval('#area-namhoc1', el => {
        //     return el.querySelector('#cboNamHoc1');
        // })
        await page.waitForSelector('#cboNamHoc1')
        console.log('Đang lấy dữ liệu từ sinh viên...')
        const getdataHome = obj.namhocvalue;
        const gethockyvalue = obj.hockyvalue;
        const getmonhocvalue = obj.monhocvalue;
        const getmamonhocvalue = obj.mamonvalue;

        await page.select('#cboNamHoc1', getdataHome);
        await page.waitForSelector('#cboHocKy1')
        await page.waitForTimeout(4000);
        await page.select('#cboHocKy1', gethockyvalue);
        await page.select('#cboCourse', getmonhocvalue);
        await page.type('#keyword1', getmamonhocvalue);
        console.log('Lấy dữ liệu hoàn tất')
        console.log(getdataHome +'\n'+ gethockyvalue +'\n'+ getmonhocvalue +'\n'+ getmamonhocvalue);

        await page.click('#btnSearchCourse')
        await page.waitForSelector('.tb-calendar')
        const getlink = await page.$eval('.tb-calendar', el => el.querySelector('a.hit').href);
        console.log('đang lấy danh sách lớp học...')
        const dataClasses = await scapeCategory(browser, getlink);
        console.log('Lấy danh sách lớp học thành công!')

        // await page.waitForNavigation();



        await browser.close();
        console.log('trình duyệt đã đóng!') 
        resolve(dataClasses);
    } catch (error) {
        reject(error)
    }
})


const scapeCategory = async (browser, url) => new Promise(async (resolve, reject) => {
    try {
        let page = await browser.newPage()
        await page.goto(url)
        await page.waitForSelector('#noidung')
        console.log('web da load xong')
        await page.waitForSelector('.tb-calendar')

        const dataCategory = await page.$$eval('tr.lop', els => {   
         
            return els.map(el => {
                var getallhour = el.querySelectorAll('td:not(:empty)');
                var allhourvalue = '';
                var pattern = /(T[1-7]|CN): \d{2}:\d{2} -\d{2}:\d{2}/g;
                var matches;
                var valuematch = '';

                //Lấy giờ học từ thẻ td
                getallhour.forEach((fontTag) => {
                    if (fontTag.innerText.includes('T4: ') || fontTag.innerText.includes('T2: ') || 
                        fontTag.innerText.includes('T3: ') || fontTag.innerText.includes('T5: ') || 
                        fontTag.innerText.includes('T6: ') || fontTag.innerText.includes('T7: ') || 
                        fontTag.innerText.includes('CN: ')) 
                            allhourvalue += fontTag.innerText + '';
                            matches = allhourvalue.match(pattern);
                            
                            
                });

               //
                valuematch = matches.join(', ');

                return  {
                    className: el.querySelector('td.hit a').innerText,
                    link: el.querySelector('td.hit a').href,
                    registrationCode: el.querySelector('td:not([class]) a').innerText,
                    type: el.querySelector('td:nth-child(3)').innerText,
                    numOfSeatsAvailable: el.querySelector('td:nth-child(4)').innerText,
                    schedule: el.querySelector('td:nth-child(6)').innerText,
                    class: valuematch,
                    room: el.querySelector('td:nth-child(8)').innerText.replace(/\n/g, ', ').slice(0, -2),
                    location: el.querySelector('td:nth-child(9)').innerText.replace(/\n/g, ', ').slice(0, -2),
                    teacher: el.querySelector('td:nth-child(10)').innerText,
                    registrationStatus: el.querySelector('td:nth-child(11)').innerText,
                    deploymentStatus: el.querySelector('td:nth-child(12)').innerText,
                }
            })
        })

        // console.log(dataCategory)
         
        resolve(dataCategory);
    } catch (error) {
        console.log('lỗi ở scrape category: ' + error);
        reject(error)
    }
})



module.exports = {
    scapeHome, scapeCategory
}