export const PageAnimation= {
    hidden: {
        opacity: 0,
        y:300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: 'beforeChildren'
        }
    }
}

export const titleAnim = {
    hidden: {y:800},
    show: {
        y:0,
        transition: {duration: 0.75, ease: "easeOut"}
    }
}

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 0.75}
    },
};