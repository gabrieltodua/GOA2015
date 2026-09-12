# 0)დაწერე ფუნქცია add_five(num), რომელიც ნებისმიერ რიცხვს ამატებს 5-ს და აბრუნებს შედეგს
# 1)დაწერე ფუნქცია last_char(text), რომელიც აბრუნებს გადაცემული სიტყვის ბოლო ასოს
# 2)დაწერე ფუნქცია is_even(num), რომელიც აბრუნებს True თუ რიცხვი ლუწია და False თუ კენტი
# 3)დაწერე ფუნქცია sum_two(a, b), რომელიც აბრუნებს ორი რიცხვის ჯამს
# 4)დაწერე ფუნქცია bigger(a, b), რომელიც აბრუნებს უფრო დიდ რიცხვს ორიდან





# 0)

def add_five(num):

    return num + 5

print(add_five(20))
 



# 1)

def last_char(text):
    return text[-1]

print(last_char("gabrieli"))



# 2)


def is_even(num):

    if num % 2 == 0:
        return "true"
    
    return "false"

print(is_even(4))   
print(is_even(7))   



# 3)


def sum_two(a, b):

    return a + a



print(sum_two(3, 5))  
print(sum_two(10, 20)) 




# 4)


def bigger(a, b):

    return min(a,b)


print(bigger(24783,98342))