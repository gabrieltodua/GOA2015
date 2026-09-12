# 5) გამოიყენე map() ფუნქცია რომ სიაში თითოეული რიცხვი აიყვანო კვადრატში

# 6) გამოიყენე map() ფუნქცია რომ დააბრუნო ახალი სია სადაც იქნება სიაში მყოფი ყველა წევრის სიგრძე

# 7) გამოიყენე map() ფუნქცია რომ გადაიყვანი ყველა სიტყვა დიდ შრიფტში მაგ("hello world" --> "HELLO WORLD")

# 8) გამოიყენე map() ფუნქცია რომ ამ სიაში მყოფი ყველა რიცხვი გადააქციო ინტეგერად ["1", "2", "3"]



# 5)

list1 = [1,2,3,4,5]

kvadratis_cvladi = list(map(lambda x : x * x , list1))

print(kvadratis_cvladi)






# 6)

list2 = ["gamarjoba" , "gabrieli" , "goa" , "programer"]

sigrze_cvladi = list(map(lambda x : len(x) , list2))

print(sigrze_cvladi)






# 7)

list3 = ["gamarjoba" , "gabrieli" , "goa" , "programer"]

yvela_didi_aso = list(map(lambda x : x.upper() , list3))

print(yvela_didi_aso)




# 8)


list4 = ["1", "2", "3"]

ricxvad_gadaqcevad = list(map(lambda x : int(x) , list4))

print(ricxvad_gadaqcevad)

