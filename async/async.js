// async & await
//  clear style of using promise :)(promise 사용의 명확한 스타일)

// 1. async
// Promise를 사용하지않고 async를 사용하면 promise로 변환된다.(함수 앞에사용)
async function fetchUser(){
        // do network request in 10 secs....
        return 'sungmin';
};


const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    // asycn를 사용한곳에서만 await를 사용할수 있음
    await delay(2000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
};

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log)

// 하나만 먼저 수행되는것을 콘솔에 전달해줌
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

