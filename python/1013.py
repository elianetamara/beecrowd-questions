entrada = input().split(" ")

array = []
for numero in entrada:
    array.append(int(numero))

array.sort(reverse=True)

print('{} eh o maior'.format(array[0]))
