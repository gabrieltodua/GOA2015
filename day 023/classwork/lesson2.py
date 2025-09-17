# 2)ნასწავლი ლისთის ფუნქციებიდან, გამოიყენეთ ყველა და კომენტარებით გვერდზე მიუწერეთ რას აკეთებს



#2)


I_am_gabriel = " hello I am gabriel !!! "




print(I_am_gabriel.upper()) #.upper - ყველა ასო დიდად აქცევს
print(I_am_gabriel.lower()) #.lower - ყველა ასო პატარა ხდის
print(I_am_gabriel.capitalize()) #.capitalize - პირველი ასო დიდად აქცევს, დანარჩენი პატარა ხდის
print(I_am_gabriel.title()) #.title - ყველა სიტყვის პირველი ასო დიდად აქცევს
print(I_am_gabriel.find("g")) #.find - ეძებს სტრიქონში კონკრეტულ სიტყვას და აბრუნებს იმ ინდექსს თუ სად მდებარეობს ეს სიტყვა, თუ არ მოიძებნა აბრუნებს -1
print(I_am_gabriel.count("h"))#.count - ითვლის რამდენჯერ არის გამოყენებული კონკრეტული ასო ან სიტყვა სტრინგში
I_am_gabriel.append("ronaldo")   # ბოლოში ამატებს ახალ ელემენტს
I_am_gabriel.insert(0, "suuuu")      # ჩასვამს True-ს პირველ ინდექსზე
I_am_gabriel.insert(-1, "Hello")  # ჩასვამს 'Hello'-ს ბოლო ელემენტის წინ
I_am_gabriel.pop(-1)              # შლის ბოლო ელემენტს
I_am_gabriel.pop(2)               # შლის 2 ინდექსზე არსებულ ელემენტს
I_am_gabriel.remove("Mate")       # პოულობს პირველ "Mate"-ს და შლის
