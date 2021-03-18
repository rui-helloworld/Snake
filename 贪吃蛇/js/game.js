(() => {
    let that; //记录游戏对象

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.strat = function () {
        this.food.render(this.map); //食物的渲染
        this.snake.render(this.map); //蛇的渲染
        runSnake();
        bindKey();
    }

    function runSnake() {

        let timeid = setInterval(() => {
            that.snake.move(that.food,that.map); //蛇往前移动一格
            that.snake.render(that.map); //清除上一条蛇并且渲染新蛇

            let headX = that.snake.body[0].x;
            let headY = that.snake.body[0].y;
            let maxX = that.map.offsetWidth / that.snake.width;
            let maxY = that.map.offsetHeight / that.snake.height;

            if (headX < 0 || headX >= maxX) {
                alert('游戏结束');
                clearInterval(timeid);
            }
            if (headY < 0 || headY >= maxY) {
                alert('游戏结束');
                clearInterval(timeid);
            }

        }, 150);
    }

    function bindKey() {
        document.addEventListener('keydown', function (e) {
            // console.log(e.key)
            switch (e.key) {
                case 'a':
                case 'ArrowLeft':
                    that.snake.direction = 'left';
                    break;
                case 'd':
                case 'ArrowRight':
                    that.snake.direction = 'right';
                    break;
                case 'w':
                case 'ArrowUp':
                    that.snake.direction = 'up';
                    break;
                case 's':
                case 'ArrowDown':
                    that.snake.direction = 'down';
                    break;
                default:
                    break;
            }
        })
    }
    window.Game = Game;
})()