package java;

import java.util.Scanner;

public class Q1012 {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    double A = sc.nextDouble();
    double B = sc.nextDouble();
    double C = sc.nextDouble();
    double círculo = (3.14159 * C * C);
    double quadrado = B * B;
    double retangulo = A * B;
    double triangulo = (A * C) / 2;
    double trapezio = ((A + B) / 2) * C;
    System.out.printf("TRIANGULO: %.3f\n", triangulo);
    System.out.printf("CIRCULO: %.3f\n", círculo);
    System.out.printf("TRAPEZIO: %.3f\n", trapezio);
    System.out.printf("QUADRADO: %.3f\n", quadrado);
    System.out.printf("RETANGULO: %.3f\n", retangulo);

  }

}
