function sleep(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

async function main() {
    await sleep(3000)
    console.log('你好')
}
main()