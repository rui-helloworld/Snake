(() => {
    let elements = [];

    function Snake(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;

        this.direction = options.direction || 'right'; //移动方向

        this.body = [{
                x: 3,
                y: 2,
                color: 'red'
            },
            {
                x: 2,
                y: 2,
                color: 'blue'
            },
            {
                x: 1,
                y: 2,
                color: 'blue'
            }
        ];
    }
    Snake.prototype.render = function (map) { //渲染蛇
        remove(); //清除上一条蛇
        for (let i = 0, len = this.body.length; i < len; i++) { //把每一个蛇节渲染到地图上
            let object = this.body[i];

            let div = document.createElement('div');
            map.appendChild(div);
            elements.push(div); //记录这条蛇

            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;

        }
    }
    Snake.prototype.move = function (food, map) {
        for (let i = this.body.length - 1; i > 0; i--) { //从最后蛇节遍历到第一个蛇节,现在蛇节位置移动到下一个蛇节位置
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        let head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
        }
        let headX = head.x * this.width;
        let headY = head.y * this.height;
        console.log('蛇头坐标:'+headX,headY+',食物坐标:'+ food.x,food.y+'')
        if (headX == food.x && headY == food.y) { //如果蛇头和食物坐标一致,
            let last = this.body[this.body.length-1];
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            food.render(map);
            console.log('吃到食物');
        }
    }

    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1)
        }
    }
    window.Snake = Snake;
})()

// let snake = new Snake();
// snake.render(map);