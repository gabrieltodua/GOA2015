# 0) კომენტარებით ახსენით რას აკეთებს else და finally 
# 1) შექმენით კოდი, სადაც გამოიყენებთ ყველა ნასწავლ exception handlingის კოდს(try, except, finally და else)



# 0)

# else - გამოიყენება try block-ის შემდეგ და ის შესრულდება მხოლოდ მაშინ, როდესაც try block-ში არ მოხდება შეცდომა.

# finally - გამოიყენება try და except ბლოკების შემდეგ და ის შესრულდება მიუხედავად იმისა შეცდომა მოხდა თუ არა.


# 1)

try:

    num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))

    num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))

    result = num1 / num2
    
except ValueError:

    print("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.")



except ZeroDivisionError:

    print("არ შეიძლება განაწილება ნულზე.")


else:

    print("შედეგი: " , result)

finally:

    print("ოპერაცია დასრულდა.")


