const ttsem1 = {
    WE08000900G : 'Lec-ELC112',
    MO08000900G : 'Lec-ELC112',
    TH08000900G : 'Lec-ELC112',
    FR08000900G : 'Lec-ELC112',
    MO09001000G : 'Lec-PHY114',
    TU09001000G : 'Lec-PHY114',
    TH09001000G : 'Tut-PHY114',
    FR09001000G : 'Lec-PHY114',
    FR10001300R : 'Prc-PHY111',
    TU10001300R : 'Prc-TA111',
    MO14001500R : 'Lec-CHM112M',
    WE14001500R : 'Lec-CHM112M',
    MO15001600G : 'Lec-TA111',
    WE15001600G : 'Lec-TA111',
    FR15001600R : 'Tut-CHM112M',
    MO16001700R : 'Lec-MTH111',
    TU16001700R : 'Tut-MTH111',
    TH16001700R : 'Lec-MTH111',
    FR16001700R : 'Lec-MTH111',
}

const ttsem2 = {
    WE08000900G : 'Lec-ETH111',
    MO09001000G : 'Lec-PHY113',
    TU09001000G : 'Lec-PHY113',
    TH09001000G : 'Tut-PHY113',
    FR09001000G : 'Lec-PHY113',
    TH10001100G : 'Lec-ETH111',
    MO10001100R : 'Lec-MTH113',
    TU10001100R : 'Tut-MTH113',
    FR10001100R : 'Lec-MTH113',
    FR10001100R : 'Lec-MTH113',
    TU11001200G : 'Lec-LIF111',
    FR11001200G : 'Lec-LIF111',
    MO12001300R : 'Lec-ESC111',
    WE12001300R : 'Tut-ESC111',
    TH12001300R : 'Lec-ESC111',
    FR12001300R : 'Lec-ESC111',
    TU14001600R : 'Prc-ESC111',
    FR14001600R : 'Prc-CHM111',
    MO17001800G : 'Lec-ETH111',
}

function getting_time(tt){
    emptyTable()
    for (let i=0; i< Object.keys(tt).length;i++){
        day = Object.keys(tt)[i].slice(0,2);
        start_time = Object.keys(tt)[i].slice(2,6);
        end_time = Object.keys(tt)[i].slice(6,10);
        subject = Object.values(tt)[i]
        color_code = Object.keys(tt)[i].slice(10,11);
        tt_list = [day,start_time,end_time,subject,color_code]
        console.log(tt_list)
        update_time_table(day,start_time,end_time,subject,color_code)
    }

}
let days_all = ['MO', 'TU', 'WE', 'TH', 'FR']
getting_time(ttsem2)

function update_time_table(day,start_time,end_time,subject,color_code){
    let myTable = document.getElementsByClassName('time_table')[0];
    let row_no = ((start_time-800)/50)+1;
    let cell_no = days_all.indexOf(day)+1;
    let row_count = (end_time-start_time)/50;
    console.log(row_no,cell_no,color_code);
    if (color_code === 'G'){
        myTable.rows[row_no].cells[cell_no].style.backgroundColor = '#6c9f52'
        // myTable.rows[row_no].cells[cell_no].style.borderRadius = '#6c9f52'
        // myTable.rows[row_no].cells[cell_no].style.border =  '1px solid #6c9f52'

    } else {
        myTable.rows[row_no].cells[cell_no].style.backgroundColor =  '#e87a6c'
        // myTable.rows[row_no].cells[cell_no].style.borderRadius =  '#e87a6c'
        // myTable.rows[row_no].cells[cell_no].style.border =  '1px solid #e87a6c'
        

    }
    
    myTable.rows[row_no].cells[cell_no].innerHTML = subject
    myTable.rows[row_no].cells[cell_no].rowSpan = row_count
    for (let n=1; n < row_count ;n++){
        console.log(n,'n');
        myTable.rows[row_no+n].cells[cell_no].style.display = "none";
    }
}  
function emptyTable() {
    let myTable = document.getElementsByClassName('time_table')[0];
    for (let i = 0; i < myTable.rows.length; i++) {
        let row = myTable.rows[i];

        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];

            if (i === 0) {
                continue;
            }
            if (j === 0) {
                continue;
            }
            cell.rowSpan = 1;
            cell.innerHTML = '';
            cell.style.backgroundColor = '';
            cell.style.display = '';
        }
    }
}

