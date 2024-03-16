import datetime
import os

def add_entry(entry):
    with open('diary.txt', 'a') as f:
        now = datetime.datetime.now()
        f.write(f'{now}: {entry}\n')

def read_entries(date):
    if os.path.exists('diary.txt'):
        with open('diary.txt', 'r') as f:
            for line in f:
                if date in line:
                    print(line)
    else:
        print("No entries yet.")

while True:
    print("1. Add entry")
    print("2. Read entries")
    print("3. Exit")
    choice = input("Choose an option: ")
    if choice == '1':
        entry = input("Enter your diary entry: ")
        add_entry(entry)
    elif choice == '2':
        date = input("Enter the date for which you want to read entries (format: yyyy-mm-dd): ")
        read_entries(date)
    elif choice == '3':
        break
    else:
        print("Invalid choice. Please choose again.")