# 2) შექმენით ფუნქცია, რომელსაც გადაეცემა სამი რიცხვი და გამოიტანეთ ეს რიცხვები ზრდადობით
# 3) შექმენით ფუნქცია, რომელსაც გადაეცემა ლისთი და გამოიტანეთ ლისთში ყველაზე პატარა რიცხვი



# 2)


def sort_numbers(a,b,c):

    numbers = [a, b, c]   

    numbers.sort()        

    return numbers      


print(sort_numbers(8, 3, 5)) 
print(sort_numbers(10, 1, 7)) 


# 3)


def smallest_number(a,b,c):
    return min(a,b,c)


print(smallest_number(1,200,30))



