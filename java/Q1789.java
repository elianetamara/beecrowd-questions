package java;

import java.util.Scanner;

public class Q1789 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    while (sc.hasNext()) {
      int lesmas = sc.nextInt();
      int velocidade = sc.nextInt();
      int maior = velocidade;
      for (int i = 1; i < lesmas; i++) {
        velocidade = sc.nextInt();
        if (velocidade > maior) {
          maior = velocidade;
        }
      }
      if (maior < 10) {
        System.out.println("1");
      } else if (maior >= 10 && maior < 20) {
        System.out.println("2");
      } else if (maior >= 20) {
        System.out.println("3");
      }

    }

  }

}
