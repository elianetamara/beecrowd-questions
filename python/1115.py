while True:
    x, y = input().split(' ')
    x = int(x)
    y = int(y)
    if x == 0 and y == 0:
        break
    if x > 0:
        if y > 0:
            print('primeiro')
        elif y < 0:
            print('quarto')
    if x < 0:
        if y > 0:
            print('segundo')
        elif y < 0:
            print('terceiro')
