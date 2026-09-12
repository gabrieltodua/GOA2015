# 2)ახსენით რა არის nested if
# 3)მომხმარებელს შემოატანინეთ ასაკი და სახელი, თუ მისი ასაკი არის 18ზე ნაკლები, გამოიტანეთ "Denied" სხვა შემთხვევაში შეამოწმეთ თუ მისი
#  სახელი არის "დემე" გამოიტანეთ "Denied" სხვა ყველა შემთხვევაში გამოიტანეთ "Accepted"


#2)

# Nested if ქართულად შეიძლება გავიგოთ როგორც „ჩახლართული/შიდა თუ“. ეს არის if-ის შიგნით სხვა if-ის გამოყენება. ანუ, ერთი პირობის შემოწმების
#  შემდეგ, თუ ის დამაკმაყოფილებელია, ჩვენ შემდგომ ვამოწმებთ სხვა პირობას.

#მაგ...

# მაგალითი:

# age = int(input("Enter your age: "))

# if age < 18:
#     print("You are not old enough.")
# else:
#     height = int(input("Enter your height in cm: "))
#     if height < 155:
#         print("You are not tall enough.")
#     else:
#         print("You are accepted!")






#3)





age = int(input("შეიყვანეთ თქვენი ასაკი: "))
name = input("შეიყვანეთ თქვენი სახელი: ")

# შემოწმება
if age < 18:
    print("Denied")
else:
    if name == "დემე":
        print("Denied")
    else:
        print("Accepted")
