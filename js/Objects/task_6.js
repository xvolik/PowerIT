const dots = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const newDots = dots.filter(dot => {
    if (typeof dot.x && typeof dot.y === "number") {
        if (dot.x && dot.y != null || undefined)
            return dot;
    }
})
console.log(newDots);
