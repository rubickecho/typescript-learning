/**
 * 如果没有明确指定类型，typescript会依照类型推论的规则推断出一个类型
 * 
 * 如果定义的适合没有赋值，不管之后有没有赋值，都会被推断为any，而不被类型检查
 */