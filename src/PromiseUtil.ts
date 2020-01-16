
export function series<T>(list): Promise<T> {
    return list.reduce(function (currThenable: any, nextThenable: any) {
        return currThenable.then(nextThenable);
    }, Promise.resolve());
}

export function timeout(time: number = 0) {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve(), time);
    });
}