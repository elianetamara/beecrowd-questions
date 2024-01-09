package java;

import java.util.Scanner;

public class Q1168 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int teste = sc.nextInt();
    sc.nextLine();
    for (int i = 0; i < teste; i++) {
      String numero = sc.nextLine();
      int cont = 0;
      for (int h = 0; h < numero.length(); h++) {
        char letra = numero.charAt(h);
        if (letra == '1') {
          cont += 2;
        }
        if (letra == '4') {
          cont += 4;
        }
        if (letra == '7') {
          cont += 3;
        }
        if (letra == '8') {
          cont += 7;
        }
        if (letra == '2' || letra == '3' || letra == '5') {
          cont += 5;
        }

        if (letra == '6' || letra == '9' || letra == '0') {
          cont += 6;
        }
      }
      System.out.println(cont + " leds");
    }
  }

}
