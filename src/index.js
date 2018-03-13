 // DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propName => propName;

const createNotEnumerableProperty = (propName) => {
  Object.defineProperty(Object.prototype, propName, {
    enumerable: false,
    value: 'value'
})
return propName;
};

const createProtoMagicObject = () => {
  const obj = function (){};
  obj.prototype = obj.__proto__;
  return obj;
};

let counter=0;
const incrementor = () => {
  counter++;
  incrementor.toString =()=>counter;
  return incrementor;
};

let number=0;
const asyncIncrementor = () => {
    number++;
    return number;
};
const createIncrementer = () => {
  let obj=[];
  obj.value=0;
  obj.next=()=>{
    obj.value++;
    return obj;
  }
  return obj;
  // class Inc{
  //   constructor(){
  //     this.value=0;
  //   }
  //   next(){
  //     this.value++;
  //     return this
  //   }
  // }
  // return new Inc();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
