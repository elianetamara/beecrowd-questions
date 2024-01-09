import math

x = input().split(" ")
y = input().split(" ")

x1, y1 = x
x2, y2 = y

distancia = ((float(x2) - float(x1)) * (float(x2) - float(x1))) + \
    ((float(y2) - float(y1))*(float(y2) - float(y1)))
resultado = math.sqrt(distancia)
