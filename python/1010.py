um = input().split(" ")
dois = input().split(" ")

c1, n1, vl1 = um
c2, n2, vl2 = dois

total = (int(n1) * float(vl1)) + (int(n2) * float(vl2))

print("VALOR A PAGAR: R$ {:.2f}".format(total))
