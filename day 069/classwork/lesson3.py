# დაწერე ფუნქცია divide(a, b).

# - თუ b არის 0 → გამოიყენე raise და გამოიტანე ZeroDivisionError("Cannot divide by zero")
# - სხვა შემთხვევაში → დააბრუნე a / b

# მაგალითები:
# divide(10, 2) -> 5
# divide(7, 0)  -> ZeroDivisionError


def divide(a, b):

    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b




print(divide(10, 2)) # 5

print(divide(10, 0)) #raise ZeroDivisionError("Cannot divide by zero")
