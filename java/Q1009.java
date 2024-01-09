package java;

import java.util.Scanner;

public class Q1009 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    String d = sc.nextLine();
    double e = sc.nextDouble();
    double f = sc.nextDouble();

    double total = (f * 0.15) + e;
    System.out.printf("TOTAL = R$ %.2f\n", total);

  }

}
