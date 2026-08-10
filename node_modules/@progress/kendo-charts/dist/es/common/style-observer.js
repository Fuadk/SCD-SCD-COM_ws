export function setupStyleObserver(element, callback, properties) {
    const curStyles = getComputedStyle(element);
    const values = new Map();
    properties.forEach(prop => {
        values.set(prop, curStyles.getPropertyValue(prop));
    });

    let rafPending = false;

    const check = () => {
        if (!element.isConnected) {
            return;
        }
        let changed = false;
        properties.forEach(prop => {
            const newValue = curStyles.getPropertyValue(prop);
            if (values.get(prop) !== newValue) {
                values.set(prop, newValue);
                changed = true;
            }
        });
        if (changed) {
            callback();
        }
    };

    const interval = setInterval(() => {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => {
                rafPending = false;
                check();
            });
        }
    }, 500);

    return {
        disconnect: () => {
            clearInterval(interval);
            values.clear();
        },
    };
}
