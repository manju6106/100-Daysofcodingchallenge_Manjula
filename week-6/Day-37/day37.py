def divide_numbers():
    while True:
        try:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 / num2
            print("Result:", result)
        except ZeroDivisionError:
            print("Error: Cannot divide by zero. Please enter a non-zero divisor.")
        except ValueError:
            print("Error: Please enter valid numeric inputs.")
        else:
            break

while True:
    divide_numbers()
    choice = input("Do you want to perform another calculation? (yes/no): ").lower()
    if choice != "yes":
        print("Exiting program.")
        break
