(() => {
    let tools = {
        getRandom: (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    window.tools = tools;
})()