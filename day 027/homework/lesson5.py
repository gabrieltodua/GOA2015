
def math(numbers):
    total = 0
    count = 0
    for num in numbers:
        total += num 
        count += 1
    if count == 0:
        return 0  
    return total / count

print(math([10,5])) 
