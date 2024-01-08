package java;

import java.util.Scanner;

public class Q1074 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    for (int i = 1; i <= N; i++) {
      int X = sc.nextInt();
      if (X == 0) {
        System.out.println("NULL");
      } else if (X % 2 == 0) {
        System.out.print("EVEN ");
      } else {
        System.out.print("ODD ");
      }
      if (X > 0) {
        System.out.println("POSITIVE");
      } else if (X < 0) {
        System.out.println("NEGATIVE");
      }
    }
  }

}
