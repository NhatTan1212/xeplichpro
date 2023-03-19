// const { scapeHome} = require('./scaper');
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
        
        btnsearch.onclick = () => {
                getvalues = {                    
                        namhocvalue: getnamhoc.value,
                        hockyvalue: gethocky.value,
                        monhocvalue: getmonhoc.value,
                        mamonvalue: getmamon.value
                }
                console.log(getvalues)

                var jsonData = JSON.stringify(getvalues);
                // var file = new Blob([jsonData], { type: "application/json" });

                // var a = document.createElement("a");
                // a.href = URL.createObjectURL(file);
                // a.download = "data.json";
                // a.click();
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://nhattan1212.github.io/xeplichpro/', true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onreadystatechange = function() {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                }
                };
                xhr.send(jsonData);

        }
// }

// module.exports = {
//         namhocvalue,hockyvalue,monhocvalue,mamonvalue
// }
