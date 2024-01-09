entrada = input().split(" ")

a, b, c = entrada

a = float(a)
b = float(b)
c = float(c)

delta = (b ** 2 - 4 * a * c)

if (a == 0.0 or delta < 0):
    print('Impossivel calcular')
else:
    x1 = (- b + delta ** (1 / 2)) / (2 * a)
    x2 = (- b - delta ** (1 / 2)) / (2 * a)
    print('R1 = {:.5f}'.format(x1))
    print('R2 = {:.5f}'.format(x2))
