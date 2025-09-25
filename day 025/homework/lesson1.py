# 0) ახსენი ერთ წინადადებაში რას აკეთებს custom function და რატომ ვიყენებთ მას პროგრამირებაში

# 1) დაწერე ფუნქცია add_numbers(a, b), რომელიც აბრუნებს ორი რიცხვის ჯამს

# 2) დაწერე ფუნქცია square(n), რომელიც აბრუნებს რიცხვის კვადრატს

# 3) დაწერე ფუნქცია greet(name), რომელიც ბეჭდავს: "გამარჯობა, <სახელი>!"

# 4) დაწერე ფუნქცია max_of_two(a, b), რომელიც აბრუნებს ორიდან დიდ რიცხვს

# 5) დაწერე ფუნქცია reverse_string(text), რომელიც აბრუნებს გადაბრუნებულ სტრიქონს (მაგ: "გამარჯობა" → "აბოჯრამაგ")


# 1)

def add_numbers(a,b):
    print(a,b)

# 2)




def square(n):
    return n * n


# 3)

def greet(name):
    print("გამარჯობა, " + name + "!")


# 4)

def max_of_two(a, b):
    if a > b:
        print(a)
    else:
        print(b)




# 5)


def reverse_string(text):
    print(text[::-1])
