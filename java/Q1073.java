package java;

import java.util.Scanner;

public class Q1073 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    for (int i = 2; i <= N; i += 2) {
      System.out.println(i + "^2 = " + (i * i));
    }
  }

}
