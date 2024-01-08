package java;

import java.util.Scanner;

public class Q2167 {
  
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    int X3 = 0;
    int X5 = 0;
    int cair = 0;
    for (int i = 0; i < N; i++) {
      X3 = sc.nextInt();
      if (X3 < X5) {
        cair = i + 1;
        i = N;
      }
      X5 = X3;
    }
    System.out.println(cair);
  }
}