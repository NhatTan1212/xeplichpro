import startBrowser from './browser';
import scrapeController from './scapeController';

// const { scapeHome} = require('./scaper');

// const { data } = require("cheerio/lib/api/attributes");

// const getDataSearchCourse = () => {
        let getnamhoc = document.querySelector('#cboNamHoc1');
        let gethocky = document.querySelector('#cboHocKy1');
        let getmonhoc = document.querySelector('#cboCourse');
        let getmamon = document.querySelector('#keyword1');
        let btnsearch = document.querySelector('#btnSearchCourse');
        
        
        
        console.log(getnamhoc.value)
        getnamhoc.onchange = function () {
            switch (getnamhoc.value) {
                case '45':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="46"> Học Kỳ I</option> <option value="47"> Học Kỳ II</option> <option value="48"> Học Kỳ Hè</option>'
                    break;
                case '49':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="50"> Học Kỳ I</option> <option value="51"> Học Kỳ II</option> <option value="52"> Học Kỳ Hè</option>'
                    break;
                case '53':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="54"> Học Kỳ I</option> <option value="55"> Học Kỳ II</option> <option value="56"> Học Kỳ Hè</option>'
                    break;
                case '57':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="58"> Học Kỳ I</option> <option value="59"> Học Kỳ II</option> <option value="60"> Học Kỳ Hè</option>'
                break;
                case '61':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="62"> Học Kỳ I</option> <option value="63"> Học Kỳ II</option> <option value="64"> Học Kỳ Hè</option>'
                break;
                case '65':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="66"> Học Kỳ I</option> <option value="67"> Học Kỳ II</option> <option value="68"> Học Kỳ Hè</option>'
                break;
                case '69':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="70"> Học Kỳ I</option> <option value="71"> Học Kỳ II</option> <option value="73"> Học Kỳ Hè</option>'
                break;
                case '74':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="75"> Học Kỳ I</option> <option value="76"> Học Kỳ II</option> <option value="77"> Học Kỳ Hè</option>'
                break;
                case '78':
                        gethocky.innerHTML = '<option value="0">--Chọn Học kỳ--</option> <option value="79"> Học Kỳ I</option> <option value="80"> Học Kỳ II</option> <option value="81"> Học Kỳ Hè</option>'
                break;
                default:
                    break;
            }
            
        }
        
        let namhocvalue
        let hockyvalue
        let monhocvalue
        let mamonvalue
        let getvalues

        fetch('http://localhost:3000/courses')
        .then(response => response.json())
        .then(data => {
                console.log(data.length)
                var countBtnSearch = data.length;
        
        
                btnsearch.onclick = () => {
                  
                        countBtnSearch += 1;
                        getvalues = { 
                                id: countBtnSearch,
                                namhocvalue: getnamhoc.value,
                                hockyvalue: gethocky.value,
                                monhocvalue: getmonhoc.value,
                                mamonvalue: getmamon.value
                        }
                        console.log(getvalues)
        
                        fetch(' http://localhost:3000/courses', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(getvalues)
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Data saved successfully!');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    
                            
                            let browser = startBrowser();
                            scrapeController(browser);
                        //     fetch('/start')
                        //     .then((response) => response.text())
                        //     .then((text) => console.log(text))
                        //     .catch((error) => console.error(error));
                            
                        }

                        
                        // fetch("http://localhost:3000/newClasses")
                        //     .then(response => response.json())
                        //     .then(data => console.log(data))
                        //     .catch(error => console.error(error));
                }
                )
                .catch(error => console.error(error));
                

// }

// module.exports = {
//         namhocvalue,hockyvalue,monhocvalue,mamonvalue
// }
