# 0) დაწერეთ ფუნქცია სახელად to_celsius, რომელიც გადაიყვანს ტემპერატურას ფარენჰაიტიდან ცელსიუზე, ფორმულა ამისთვის არის:
# (temp - 32) * 5/9
# 1) დაწერეთ ფუნქცია, რომელიც მიიღებს არგუმენტად რიცხვს და გამოიტანს ლუწს თუ ის არის ლუწი და კენტს თუ არის კენტი


# 0)

def to_celsius(temp):
    return (temp - 32) * 5 / 9

print(to_celsius(212))  
print(to_celsius(32))   


def check_number(num):
    if num % 2 == 0:
        print("ლუწი")
    else:
        print("კენტი")



check_number(4)  
check_number(7)  
