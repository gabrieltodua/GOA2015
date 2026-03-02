# 1) შეასრულეთ Sololearn module 1 quiz-ის ჩათვლით

# 2) შექმენი 1-დან 10-მდე ყველა მთელი რიცხვის კვადრატების სია range(1, 11) ფუნქციის გამოყენებით.

# 3) მოცემული რიცხვების სიიდან [1, 2, 5, 8, 10, 13, 18, 21] გამოიტანე მხოლოდ ლუწი რიცხვები ახალ სიაში if პირობის დახმარებით.

# 4) აიღე სტრინგების სია ["  apple", "banana  ", "  cherry "] და თითოეულ ელემენტს დააშორე ზედმეტი სფეისები strip მეთოდის გამოყენებით.

# 5) შექმენი ახალი სია სადაც 1-დან 5-მდე ყველა რიცხვი იქნება გაორმაგებული ანუ გამრავლებული 2-ზე range()-ის გამოყენებით



# 1)



# 2)

squares = [x**2 for x in range(1, 11)]

# 3)


numbers = [1, 2, 5, 8, 10, 13, 18, 21]

even_numbers = [num for num in numbers if num % 2 == 0]

# 4)

fruits = ["  apple", "banana  ", "  cherry "]

cleaned_fruits = [fruit.strip() for fruit in fruits]

# 5)

doubled_numbers = [x * 2 for x in range(1, 6)]

print(squares)
print(even_numbers)
print(cleaned_fruits)
print(doubled_numbers)
