# 0) შექმენით lambda ფუნქცია რომელიც დააბრუნებს მიღებული რიცხვის კვადრატს

# 1) შექმენით lambda ფუნქცია რომელიც მიიღებს არგუმენტად სტრინგს და დააბრუნებს ამ სტრინგს შებრუნებულს

# 2) შექმენით lambda ფუნქცია რომელიც მიიღებს არგუმენტად რიცხვების სიას და დააბრუნებს ყველაზე დიდ რიცხვს ამ სიაში

# 3) შექმენით lambda ფუნქცია რომელიც მიიღებს არგუმენტად რიცხვების სიას და დააბრუნებს ყველაზე პატარა რიცხვს ამ სიაში

# 4) შექმენით lambda ფუნქცია რომელიც მიიღებს 2 რიცხვს და დააბრუნებს მათ ჯამს



# 0)

kvadrati = lambda x : x * x

print(kvadrati(5))

print(kvadrati(7))


# 1)

sebrunebuli = lambda x : x[::-1]

print(sebrunebuli("gabrieli"))

print(sebrunebuli("gamarjoba"))



# 2)

didi_ricxvi = lambda a , b , c , d , e : max(a , b ,c, d, e, )

print(didi_ricxvi(10,20,30,40,50))


# 3)

patara_ricxvi = lambda a , b , c , d , e : min(a , b ,c, d, e, )

print(patara_ricxvi(10,20,30,40,50))


# 4)

jami = lambda x , y : x + y

print(jami(27,27))

print(jami(5,5))

print(jami(7,7))



