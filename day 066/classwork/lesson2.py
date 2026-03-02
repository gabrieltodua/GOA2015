# 2) შექმენით dictionary, სადაც შეინახავთ თქვენი ოჯახის წევრების ინფორმაციას
# 3) გამოიყენეთ update ფუნქცია, რომ დაამატოთ ინფორმაცია წინა დავალებაში შექმნილ dictionaryში






# 2)

family = {
    "father": {
        "name": "rezi",
        "age": 42,
    },
    "mother": {
        "name": "lika",
        "age": 38,
    },
    "Brother1": {
        "name": "andria",
        "age": 9,
    },
    "Brother2": {
        "name": "luka",
        "age": 1,
    }, 
    "me": {
        "name": "gabriel",
        "age": 11,
    }, 
    "we don't know yet who is it? Boy or a girl": {
        "name": "baby",
        "age": 0,
    }
}


# 3)


family.update({

    "we don't know yet who is it? Boy or a girl": {
        "name": "baby",
        "age": 0,
    }

})    

print(family)