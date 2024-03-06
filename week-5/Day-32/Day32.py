# Asking the user for their age
age = int(input("Enter your age: "))

# Checking the age category using if statements
if age < 18:
    print("You are a minor.")
elif 18 <= age <= 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")

# Asking the user to input a number
number = float(input("Enter a number: "))

# Checking if the number is positive, negative, or zero
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
