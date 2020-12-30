// os 내장 모듈
const os = require('os');
console.log("os Arch : "+os.arch);

//path module
const path = require('path');
    //디렉터리
console.log(path.dirname(__filename));
    //실행확장자
console.log(path.extname(__filename));
    //파일네임
console.log(path.basename(__filename));
    //전체 구조
console.log(path.parse(__filename));
    //노멀라이즈
console.log(path.normalize('/Users/radline000/Desktop/Node_Study/Node_Boock/path.js'));
    //절대경로인지, 상대경로인지
console.log(path.isAbsolute("../"));
    //조인
console.log(path.join(__dirname,'..','..','/Users/','.','/zerocho'));
