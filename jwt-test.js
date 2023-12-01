import jwt from 'jsonwebtoken';

const token = jwt.sign({ myPayLoadData: 9999 }, 'mysecretkey');
console.log(token);

// jwt PayLoad 복호화
const decodedValue = jwt.decode(token);
console.log(decodedValue);

// jwt 변조 검증
const decodedValueByVerify = jwt.verify(token, 'mysecretkey');
console.log(decodedValueByVerify);
