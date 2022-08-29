function basicOp(operation, value1, value2) {
  //eval should be avoided
  return eval(value1 + operation + value2);
}

basicOp("+", 4, 7); //--> 11
basicOp("-", 15, 18); // --> -3
basicOp("*", 5, 5); //--> 25
basicOp("/", 49, 7); // --> 7
