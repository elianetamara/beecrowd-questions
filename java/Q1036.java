package java;

import java.util.Scanner;

public class Q1036 {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    double A = sc.nextDouble();
    double B = sc.nextDouble();
    double C = sc.nextDouble();
    double delta = B * B - 4 * A * C;
    double r1 = (-B + Math.sqrt(delta)) / (2 * A);
    double r2 = (-B - Math.sqrt(delta)) / (2 * A);
    if (delta < 0 || A == 0) {
      System.out.println("Impossivel calcular");
    } else {
      System.out.printf("R1 = %.5f\n", r1);
      System.out.printf("R2 = %.5f\n", r2);
    }
  }

}
