
from turtle import *


#we want to paint a house

#step 1 : drave a square

speed(6)
width(7)
color("red")
begin_fill()

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of spuare

#drawing a door

forward(70)
color("brown")

begin_fill()

left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200,200)
pendown()

color("black")

begin_fill()
right(147)
forward(174)
left(112)
forward(174)
end_fill()

penup()
goto(140,140)
pendown()
right(-125)

forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(41)

right(90)
color("red")

forward(80)

color("black")
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)






















































exitonclick()
