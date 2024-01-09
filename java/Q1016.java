package java;

import java.util.Scanner;

public class Q1016 {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    int d = sc.nextInt();
    int total = (int) (d / ((90 / 60.0) - (60 / 60.0)));

    System.out.printf("%d minutos\n", total);
  }

}
