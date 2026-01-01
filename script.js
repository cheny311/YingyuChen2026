document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 点击“和我联络吧”弹窗提醒
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        alert('你可以通过邮件联系我：yingyu_chen@example.com');
    });

    // 2. 给所有的项目方块增加简单的交互
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#f9f9f9';
        });
        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = '#fff';
        });
    });

    // 3. 小鱼图片的简单漂浮效果
    const fish = document.getElementById('fish');
    let angle = 0;
    function animateFish() {
        angle += 0.05;
        const yOffset = Math.sin(angle) * 10;
        fish.style.transform = `translateY(${yOffset}px)`;
        requestAnimationFrame(animateFish);
    }
    animateFish();
});