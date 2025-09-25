# 2) შექმენით ფუნქცია სახელად Verification, სადაც გადაეცემა არგუმენტები, ასაკი და გამოცდილება. შემდეგ თუ მისი ასაკი არის 18ზე მეტი და აქვს გამოცდილება 1ზე მეტი, გამოიტანეთ "Hired", სხვა შემთხვევაში გამოიტანეთ "Not Hired"
# 3) შექმენით ფუნქცია სახელად Average, რომელსაც გადაეცემა 3 რიცხვი და გამოაქვს ამ სამი რიცხვის საშუალო არითმეტიკული(საშუალო არითმეტიკული არის რიცხვების ჯამი გაყოფილი რიცხვების რაოდნობაზე




# 2)




def Verification(age, experience):
   
    if age > 18 and experience > 1:
        print("Hired")
    else:
        print("Not Hired")

Verification(20, 2)  
Verification(17, 3)   
Verification(25, 0)   

# 3) 




def Average(a, b, c):

    avg = (a + b + c) / 3
    print("Average:", avg)

Average(3, 6, 9)    
Average(10, 20, 30)  


