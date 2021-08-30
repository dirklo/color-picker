function freeForAllFunction(args: any): any {
    return args
}











function typeSafeFunction<T>(args: T): T {
    return String(args)
}





function multipleTypesFunction<T, U, V>{args1: T, args2: U, args3: V}: V {
    return args3
}




function stringFunction(args: string): string {
    return args
}
 
function numberFunction(args: number): number {
    return args
}

const num: number = 25
const str: string = 'Rick'

console.log(typeSafeFunction(num));
// > 25
console.log(typeSafeFunction(str));
// > Rick


export default typeSafeFunction