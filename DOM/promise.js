'use strtic'
/**
 * Promise 链式调用
 *
new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + 'seconds');
        }
    }, timeOut * 1000);
}).then(function (r) {
    console.log('Done: ' + r);
}).catch(function (reason) {
    console.log('Failed: ' + reason);
});

/**
 * Promise 串行异步操作
 * Promise.then().then().then()....
 *
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' X ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
});

p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function(result){
        console.log('Got value: ' + result);
    });

/**
 * Promise 并行异步操作
 * Promise.all()
 *
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'P1');
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'P2');
});

Promise.all([p1, p2]).then(function (result) {
    console.log(result);// 获得一个Array: ['P1', 'P2']
});

/**
 * Promise.race() 异步容错
 */
var p3 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, "four"); 
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了              
}, function(reason) {
  // 未被调用
  console.log(reason);
});