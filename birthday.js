'use strict';
var Birthday = function (year, month, day) {
    this.year   = year;
    this.month  = month;
    this.day    = day;

};

Birthday.prototype.getAge = function() {
    let today = new Date();
    let today_y = today.getFullYear();
    let today_m = today.getMonth()+1;
    let today_d = today.getDate();

    let age = today_y - this.year;
    if (today_m < this.month ||
        today_m == this.month && today_d < this.day ) {
        age -=1;
    }
    if (age < 0) {
        return -1;
    }
    return age;
};

// 元号取得
Birthday.prototype.getEraName = function() {

    let eraObj = {
            "平成" : {
                year    : 1989,
                month    : 1,
                day    : 8,
            },
            "昭和": {
                year    : 1926,
                month    : 12,
                day    : 25,
            },
            "大正": {
                year    : 1912,
                month    : 7,
                day    : 30,
            },
            "明治" : {
                year    : 1868,
                month    : 1,
                day    : 8,
            }
        };

    for (let prop in eraObj) {
        let data = eraObj[prop];
        let era = prop;

        if (this.year > data.year ||
            (this.year === data.year && this.month > data.month ||
             (this.year === data.year && this.month === data.month && this.day >= data.day)) ) {
            return {
                era : era,
                year : this.year - data.year + 1
            };
        }
    }

    return "OLD";
};
