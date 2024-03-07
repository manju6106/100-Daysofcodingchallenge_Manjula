#Using a for loop to print the square of each number from 1 to 5:
for i in range(1, 6):
    print(i ** 2)

#Using a while loop to print the cube of each number from 1 to 3:
num = 1
while num <= 3:
    print(num ** 3)
    num += 1

#Creating a list of your favorite books and using a for loop to print each book's title:
favorite_books = ["The autobiography of yogi", "Ikigai", "Rich Dad- Poor Dad", "The Psychology of Money", "Ignited Minds"]

for book in favorite_books:
    print(book)

 #Using a while loop to continuously ask the user to enter a number until they enter 0, then printing the sum of all entered numbers:
sum_of_numbers = 0

while True:
    user_input = int(input("Enter a number (enter 0 to stop): "))
    if user_input == 0:
        break
    sum_of_numbers += user_input

print("Sum of entered numbers:", sum_of_numbers)
   

