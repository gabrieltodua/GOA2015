# 0) შექმენით ფუნქცია, რომელსაც გადაეცემა 2 რიცხვი და ამ ორი რიცხვიდან აბრუნებს იმ რიცხვს, რომელიც არის უფრო დიდი
# 1) შემქენით ფუნქცია, რომელსაც გადაეცემა რიცხვი და აბრუნებს კენტია თუ ლუწი ეს რიცხვი


# 0)

def numbers(a,b):

    if a > b:

        return a

    elif b > a:

        return b

    else:

        return "ტოლია"      


print(numbers(235,77777))



# 1)




def even_or_odd(number):
    if number % 2 == 0:
        return "ლუწი"
    else:
        return "კენტი"
    


print(even_or_odd(4)) 
print(even_or_odd(7)) 
