entrada = float(input())

n100 = entrada // 100
entrada = entrada - n100*100

n50 = entrada // 50
entrada = entrada - n50*50

n20 = entrada // 20
entrada = entrada - n20*20

n10 = entrada // 10
entrada = entrada - n10*10

n5 = entrada // 5
entrada = entrada - n5*5

n2 = entrada // 2
entrada = entrada - n2*2

n1 = entrada // 1
entrada = entrada - n1*1
n1 = float('%.2f' % n1)
entrada = float('%.2f' % entrada)

m50 = entrada // 0.5
entrada = entrada - m50*0.5
m50 = float('%.2f' % m50)
entrada = float('%.2f' % entrada)

m25 = entrada // 0.25
entrada = entrada - m25*0.25
m25 = float('%.2f' % m25)
entrada = float('%.2f' % entrada)

m10 = entrada // 0.10
entrada = entrada - m10*0.10
m10 = float('%.2f' % m10)
entrada = float('%.2f' % entrada)

m5 = entrada // 0.05
entrada = entrada - m5*0.05
m5 = float('%.2f' % m5)
entrada = float('%.2f' % entrada)

m1 = entrada * 100
m1 = float('%.2f' % m1)
entrada = float('%.2f' % entrada)

print('NOTAS:')
print('{} nota(s) de R$ 100.00'.format(int(n100)))
print('{} nota(s) de R$ 50.00'.format(int(n50)))
print('{} nota(s) de R$ 20.00'.format(int(n20)))
print('{} nota(s) de R$ 10.00'.format(int(n10)))
print('{} nota(s) de R$ 5.00'.format(int(n5)))
print('{} nota(s) de R$ 2.00'.format(int(n2)))
print('MOEDAS:')
print('{} moeda(s) de R$ 1.00'.format(int(n1)))
print('{} moeda(s) de R$ 0.50'.format(int(m50)))
print('{} moeda(s) de R$ 0.25'.format(int(m25)))
print('{} moeda(s) de R$ 0.10'.format(int(m10)))
print('{} moeda(s) de R$ 0.05'.format(int(m5)))
print('{} moeda(s) de R$ 0.01'.format(int(m1)))
