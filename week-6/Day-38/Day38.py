class Book:
    def __init__(self, title, author):
        self.__title = title
        self.__author = author
        self.__status = 'available'

    def lend_book(self):
        if self.__status == 'available':
            self.__status = 'lent'
        else:
            print(f'The book "{self.__title}" is currently lent out.')

    def return_book(self):
        self.__status = 'available'

    def get_status(self):
        return self.__status

    def get_title(self):
        return self.__title


class Library:
    def __init__(self):
        self.__books = []

    def add_book(self, title, author):
        self.__books.append(Book(title, author))

    def check_availability(self, title):
        for book in self.__books:
            if book.get_title() == title:
                return book.get_status() == 'available'
        return False

    def get_book(self, title):
        for book in self.__books:
            if book.get_title() == title:
                return book
        return None


# Create a library
lib = Library()

# Add books to the library
lib.add_book("Book1", "Author1")
lib.add_book("Book2", "Author2")

# Check availability of a book
print(lib.check_availability("Book1"))  # This will print: True

# Lend a book
book1 = lib.get_book("Book1")
if book1 is not None:
    book1.lend_book()

# Check availability of the book again
print(lib.check_availability("Book1- was available but is now lent out"))  # This will print: False