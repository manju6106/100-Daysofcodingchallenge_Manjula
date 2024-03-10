def print_book_info(book):
    print(f"Title: {book['title']}")
    print(f"Author: {book['author']}")
    print(f"Genre: {book['genre']}\n")


def print_staff_info(staff):
    print(f"Name: {staff['name']}")
    print(f"Age: {staff['age']}")
    print(f"Role: {staff['role']}\n")


# Information about the library
library_name = "Pythonic Library"
library_location = "Cityville"

# List of books available in the library
books = [
    {"title": "Introduction to Python", "author": "John Python", "genre": "Programming"},
    {"title": "Python for Beginners", "author": "Alice Coder", "genre": "Programming"},
    {"title": "Mystery of Pythonic Code", "author": "Sherlock Hacker", "genre": "Mystery"},
]

# Dictionary representing the library staff
library_staff = {
    "librarian": {"name": "Eva Librarian", "age": 35, "role": "Librarian"},
    "assistant": {"name": "Alex Assistant", "age": 28, "role": "Assistant Librarian"},
}

# User interaction
print(f"Welcome to {library_name} located in {library_location}!\n")

while True:
    print("1. Display books by genre")
    print("2. Display staff information")
    print("3. Exit")

    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == '1':
        genre = input("Enter the genre (e.g., Programming, Mystery): ")
        genre_books = [book for book in books if book['genre'] == genre]

        if not genre_books:
            print(f"No books found in the {genre} genre.\n")
        else:
            print(f"Books in the {genre} genre:\n")
            for book in genre_books:
                print_book_info(book)

    elif choice == '2':
        staff_role = input("Enter the staff role (Librarian or Assistant): ").lower()

        if staff_role in library_staff:
            print("\nStaff Information:\n")
            print_staff_info(library_staff[staff_role])
        else:
            print("Invalid staff role. Please enter Librarian or Assistant.\n")

    elif choice == '3':
        print("Exiting the program. Thank you for using our library!")
        break

    else:
        print("Invalid choice. Please enter 1, 2, or 3.\n")
