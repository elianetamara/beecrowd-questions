package java;

import java.util.Scanner;

public class Q1010 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int A = sc.nextInt();
    double B = sc.nextDouble();
    double C = sc.nextDouble();
    int D = sc.nextInt();
    int E = sc.nextInt();
    double F = sc.nextDouble();
    double RESULTADO = (B * C) + (E * F);
    System.out.printf("VALOR A PAGAR: R$ %.2f\n", RESULTADO);
  }

}
