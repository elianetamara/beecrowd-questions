package java;

import java.util.Scanner;

public class Q1011 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double r = sc.nextDouble();
    double v = (4.0 / 3) * ((3.14159) * (r * r * r));
    System.out.printf("VOLUME = %.3f\n", v);
  }

}
