

# 0) List და Set განსხვავება:

# List (სია) არის მონაცემთა სტრუქტურა, რომელიც ინახავს ელემენტებს თანმიმდევრულად და შეიძლება შეიცავდეს დუბლიკატებს.

# Set (სეტი) არის უნიკალური ელემენტების კოლექცია, რომელიც არ ინახავს დუბლიკატებს და არ ინახავს ელემენტების კონკრეტულ თანმიმდევრობას.



# 1)




my_set = {1, 2, 3, 4, 5}

my_set.add(7)  


my_set.remove(2) 


another_set = {3, 4, 5}
difference_set = my_set.difference(another_set)  

print("my_set:", my_set)
print("another_set:", another_set)
print("Difference between my_set and another_set:", difference_set)