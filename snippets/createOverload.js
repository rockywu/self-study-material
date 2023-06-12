/**
 * 实现一个JS函数重载代码实现
 * @example 
 * const test = createOverload();
 * test.addImpl('number', 'string', (num, str) => {
 *  console.log(num, str)
 * })
 * test.addImpl('number', 'boolean', (num, bool) => {
 *    console.log('2', num, bool)
 * })
 * test(18, 'rocky');
 * test(18, true);
 */
function createOverload() {
    const callMap = new Map();
    function overload(...args) {
        const key = args.map(arg => typeof arg).join(',')
        const fn = callMap.get(key);
        if(fn) {
            fn.apply(this, args)
        } else {
            throw new RangeError('参数错误')
        }
    }
    overload.addImpl = function(...args) {
        const fn = args.pop();
        if(typeof fn !== 'function') {
            return;
        }
        callMap.set(args.join(','), fn)
    }
    return overload;
}

export default createOverload