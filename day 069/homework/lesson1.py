# 1) დაწერე try/except ბლოკი, სადაც შეამოწმებ თუ რიცხვი არის 0 და ამ შემთხვევაში გამოიყენე raise, რომ გამოიტანო ერორი "რიცხვი არ უნდა იყოს 0"

# 2) დაწერე პროგრამა try/except/else გამოყენებით: სცადე ორი რიცხვის გაყოფა, ხოლო თუ შეცდომა არ მოხდა else-ში დაბეჭდე შედეგი

# 3) დაწერე პროგრამა try/finally გამოყენებით, სადაც finally-ში ყოველთვის დაბეჭდავ ტექსტს "პროგრამა დასრულდა"

# 4) შექმენი პროგრამა, სადაც თუ მომხმარებელი შეიყვანს უარყოფით რიცხვს გამოიყენე raise, რომ გამოიტანო ერორი "უარყოფითი რიცხვი არ შეიძლება"

# 5) დაწერე პროგრამა try/except/else/finally სტრუქტურით, სადაც else-ში გამოიტან შედეგს და finally-ში დაბეჭდე "დასრულდა"




# 1)

try:

    number = int(input("შეიყვანეთ რიცხვი: "))

    if number == 0:

        raise ValueError("რიცხვი არ უნდა იყოს 0")
    

except ValueError:

    print("რიცხვი არ უნდა იყოს 0")






# 2)

try:
    num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))

    num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

    result = num1 / num2


except ZeroDivisionError:

    print("შეცდომა: რიცხვი არ შეიძლება იყოს 0")

else:   

    print("შედეგი: ", result)






# 3)

try:
    
    num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))


    num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))


    result = num1 / num2

except ZeroDivisionError:


    print("შეცდომა: რიცხვი არ შეიძლება იყოს 0")    

finally:

    print("პროგრამა დასრულდა")







# 4)

try:

    number = int(input("შეიყვანეთ რიცხვი: "))

    if number < 0:

        raise ValueError("უარყოფითი რიცხვი არ შეიძლება")
except ValueError:

    print("უარყოფითი რიცხვი არ შეიძლება")








# 5)

try:   

    num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))


    num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))


    result = num1 / num2


except ZeroDivisionError:
    
    print("შეცდომა: რიცხვი არ შეიძლება იყოს 0")

else:

    print("შედეგი: ", result)

finally:

    print("დასრულდა")



