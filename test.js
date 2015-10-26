'use strict';

(()=> {


    document.getElementById('getData').addEventListener('click', ()=> {
        console.log('click');

        testFunc();

    }, false);



    let testFunc = ()=> {
        let year = parseInt(document.getElementById('year').value, 10);
        let month = parseInt(document.getElementById('month').value, 10);
        let day = parseInt(document.getElementById('day').value, 10);

        let birth = new Birthday(year, month, day );

        let age = birth.getAge();
        let era = birth.getEraName();

        console.log(age);
        console.log(era);


        document.getElementById('status').innerHTML = age + "歳";
        document.getElementById('status2').innerHTML = era.era + era.year + "年";
    };

})();
