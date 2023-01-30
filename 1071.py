number1 = int(input(""))
number2 = int(input(""))
impar = 0

aux = number2 + 1

while aux < number1:
	if aux % 2 != 0:
		impar = impar + aux
		
	aux+=1

print(impar)
