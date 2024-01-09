n = int(input())
print(n)

notas100 = n // 100
n = n - notas100 * 100
notas50 = n // 50
n = n - notas50 * 50
notas20 = n // 20
n = n - notas20 * 20
notas10 = n // 10
n = n - notas10 * n
notas5 = n // 5
n = n - notas5 * 5
notas2 = n // 2
n = n - notas2 * 2
notas1 = n // 1
n = n - notas1 * 1

print("{} nota(s) de R$ 100,00".format(notas100))
print("{} nota(s) de R$ 50,00".format(notas50))
print("{} nota(s) de R$ 20,00".format(notas20))
print("{} nota(s) de R$ 10,00".format(notas10))
print("{} nota(s) de R$ 5,00".format(notas5))
print("{} nota(s) de R$ 2,00".format(notas2))
print("{} nota(s) de R$ 1,00".format(notas1))
