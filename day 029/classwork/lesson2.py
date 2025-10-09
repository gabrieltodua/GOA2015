# 0) კომენტარებით ახსენით რა დროს გამოიყენება default value
# 1) შექმენით ფუნქცია სახელად Student, რომელიც არგუმენტად მიიღებს სახელს, გვარს და ნიშანს, ნიშანის default value იყოს 6,
#  ხოლო returnით f სტრინგის გამოყენებით დააბრუნეთ "You are {name} {surname}, and your grade is {grade}"





# 0)

# იმიტომ ვიყენებთ რომ შეიძლება რომ user - მა რომ არ შეიყვანოს ინ difault value გააკტიურდა ბა და ის იქნა მაგის ნაცვლად 


# 1)

def Student(name,surname,grade = 6):

    return f"You are {name} {surname}, and your grade is {grade}"

print(Student("gabriel","todua","5"))



