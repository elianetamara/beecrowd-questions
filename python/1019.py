entrada = int(input())

hora = entrada // 60**2
entrada = entrada - hora * 60**2

minuto = entrada // 60
entrada = entrada - minuto*60

s = entrada
print('{}:{}:{}'.format(hora, minuto, s))
