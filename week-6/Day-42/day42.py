import json
import os
from datetime import datetime

# Function to add an expense
def add_expense():
    amount = float(input("Enter expense amount: "))
    description = input("Enter expense description: ")
    date = input("Enter date of expense (YYYY-MM-DD): ")
    category = input("Enter expense category: ")

    new_expense = {'amount': amount, 'description': description, 'date': date, 'category': category}

    if not os.path.isfile('expenses.json'):
        with open('expenses.json', 'w') as file:
            json.dump([new_expense], file)
    else:
        with open('expenses.json', 'r+') as file:
            expenses = json.load(file)
            expenses.append(new_expense)
            file.seek(0)
            json.dump(expenses, file)

# Function to view all expenses
def view_expenses():
    if not os.path.isfile('expenses.json'):
        print("No expenses to view.")
        return

    with open('expenses.json', 'r') as file:
        expenses = json.load(file)
        for expense in expenses:
            print(f"{expense['date']}: {expense['description']} - ${expense['amount']} - Category: {expense['category']}")

# Function to delete an expense
def delete_expense():
    view_expenses()
    index = int(input("Enter the index of the expense to delete: "))

    if not os.path.isfile('expenses.json'):
        print("No expenses to delete.")
        return

    with open('expenses.json', 'r+') as file:
        expenses = json.load(file)
        if 0 <= index < len(expenses):
            expenses.pop(index)
            file.seek(0)
            file.truncate()
            json.dump(expenses, file)
        else:
            print("Invalid index.")

# Function to view monthly summary
def monthly_summary():
    year = input("Enter the year (YYYY): ")
    month = input("Enter the month (MM): ")

    if not os.path.isfile('expenses.json'):
        print("No expenses to view.")
        return

    with open('expenses.json', 'r') as file:
        expenses = json.load(file)
        monthly_expenses = [e for e in expenses if e['date'].startswith(f"{year}-{month}")]
        total = sum(e['amount'] for e in monthly_expenses)
        print(f"Total expenses for {month}/{year}: ${total}")

# Function to search expenses
def search_expenses():
    search_query = input("Enter search term (description/category): ")

    if not os.path.isfile('expenses.json'):
        print("No expenses to view.")
        return

    with open('expenses.json', 'r') as file:
        expenses = json.load(file)
        matching_expenses = [e for e in expenses if search_query in e['description'] or search_query in e['category']]
        for expense in matching_expenses:
            print(f"{expense['date']}: {expense['description']} - ${expense['amount']} - Category: {expense['category']}")

# Main function
def main():
    while True:
        action = input("Choose an action (add, view, delete, summary, search, exit): ").lower()
        if action == 'add':
            add_expense()
        elif action == 'view':
            view_expenses()
        elif action == 'delete':
            delete_expense()
        elif action == 'summary':
            monthly_summary()
        elif action == 'search':
            search_expenses()
        elif action == 'exit':
            break
        else:
            print("Invalid action.")

if __name__ == "__main__":
    main()
