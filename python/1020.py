entrada = int(input())

ano = entrada // 365
entrada = entrada - ano * 365

meses = entrada // 30
entrada = entrada - meses * 30

dias = entrada

print('{} ano(s)'.format(ano))
print('{} mes(es)'.format(meses))
print('{} dia(s)'.format(dias))
