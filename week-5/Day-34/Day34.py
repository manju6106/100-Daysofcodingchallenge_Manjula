#Define a function called calculate_area:
def calculate_area(l, w):
    return l * w
#Use the calculate_area function to find the area of a rectangle with dimensions 8x5 and print the result:
rectangle_area = calculate_area(8, 5)
print("Area of the rectangle:", rectangle_area)
#Create a dictionary representing a person's information:
person_info = {
    "name": "Manjula",
    "age": 20,
    "city": "Bhimavaram"
}
#Define a function called print_person_info:
def print_person_info(person):
    print("Name:", person["name"])
    print("Age:", person["age"])
    print("City:", person["city"])
#Use the print_person_info function to display the information of the person created in step 3:
print_person_info(person_info)
