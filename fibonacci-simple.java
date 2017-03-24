// Java Fibonacci
// Non-recursive, no memoization

int fibonacci(int n) {

  if (n == 0) return 0;
  int a = 0;
  int b = 0;
  for (int i = 2; i < n; i++) {
    int c = a + b;
    a = b;
    b = c;
}

return a + b;

}
