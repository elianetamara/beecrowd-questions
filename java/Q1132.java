package java;

import java.util.Scanner;

public class Q1132 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int x = sc.nextInt();
    int y = sc.nextInt();
    int soma = 0;
    if (x > y) {
      for (int j = y; j <= x; j++) {
        if (j % 13 != 0) {
          soma += j;
        }
      }
    }
    if (y > x) {
      for (int j = x; j <= y; j++) {
        if (j % 13 != 0) {
          soma += j;
        }
      }
    }
    System.out.println(soma);
  }

}
