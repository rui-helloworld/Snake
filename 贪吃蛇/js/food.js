(() => {
    let elements = [] // 记录上一次创建的食物,为删除作准备
    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.backgroundColor = options.backgroundColor || 'red';
        this.width = options.width || 20;
        this.height = options.height || 20;
    }

    Food.prototype.render = function (map) { //渲染食物
        remove(); //渲染之前删除上一个食物

        this.x = tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width; // 随机坐标
        this.y = tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

        let div = document.createElement('div');
        map.appendChild(div); // 在map上创建div
        elements.push(div); //记录创建的div

        div.style.width = this.width + 'px'; // 设置div的属性
        div.style.height = this.height + 'px';
        div.style.position = 'absolute';
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.backgroundColor = this.backgroundColor;

    }

    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1)
        }
    }
    window.Food = Food;
})()

// let map = document.getElementById('map');
// let food = new Food();
// food.render(map);