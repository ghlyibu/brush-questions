/**
 * @description Array rotate
 * @author ghlyibu
 */

/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * @param arr arr
 * @param key k
 * @returns arr
 */
export function rotate1(arr:number[], k: number): number[] {
    const length= arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length);
    // 0(n^2)
    for (let i = 0;i < step; i++) {
        const n = arr.pop()
        if(n != null) {
            arr.unshift(n)
        }
    }
    return arr
}


/**
 * 旋转数组 k 步 - 使用 contcat
 * @param arr 
 * @param k 
 * @returns 
 */
export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if(!k || length === 0) return arr
    const step = Math.abs(k % length)

    // O(1)
    const part1 = arr.slice(-step) // O(1)
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)
    return part3
}