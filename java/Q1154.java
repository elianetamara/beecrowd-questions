package java;

import java.util.Scanner;

public class Q1154 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double idade = sc.nextDouble();
    double soma = 0;
    double pessoas = 0;
    while (idade > 0) {
      soma += idade;
      pessoas++;
      idade = sc.nextDouble();
    }
    System.out.printf("%.2f\n", soma / pessoas);
  }

}
