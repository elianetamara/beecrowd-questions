package java;

import java.util.Scanner;

public class Q1174 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double a;
    for (int i = 0; i < 100; i++) {
      a = sc.nextDouble();
      if (a <= 10) {
        System.out.print("A[" + i + "] = ");
        System.out.printf("%.1f\n", a);
      }
    }
  }

}
