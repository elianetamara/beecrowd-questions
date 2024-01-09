package java;

import java.util.Scanner;

public class Q1017 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    double a = sc.nextDouble();
    double b = sc.nextDouble();

    double result = (a * b) / 12;

    System.out.printf("%.3f\n", result);

  }
}
