package java;

import java.util.Scanner;

public class Q1019 {

  public static void main(String[] args) {
    int T;

    Scanner sc = new Scanner(System.in);
    T = sc.nextInt();

    int H = T / 3600;
    T = T - (H * 3600);

    int M = T / 60;
    T = T - (M * 60);

    System.out.printf("%d:%d:%d\n", H, M, T);

  }

}
