//SIMPLE CONTACT MANAGEMENT SYSTEM

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }
}

class ContactManagementSystem {
  constructor() {
    this.contacts = [];
  }

  addContact(name, email, phone) {
    const contact = new Contact(name, email, phone);
    this.contacts.push(contact);
  }

  viewContacts() {
    this.contacts.forEach((contact) => {
      console.log(`Name: ${contact.getName()}, Email: ${contact.getEmail()}, Phone: ${contact.getPhone()}`);
    });
  }

  searchContact(name) {
    const contact = this.contacts.find((contact) => contact.getName() === name);
    if (contact) {
      console.log(`Name: ${contact.getName()}, Email: ${contact.getEmail()}, Phone: ${contact.getPhone()}`);
    } else {
      console.log(`Contact not found.`);
    }
  }

  updateContact(name, email, phone) {
    const contact = this.contacts.find((contact) => contact.getName() === name);
    if (contact) {
      contact.email = email;
      contact.phone = phone;
      console.log(`Contact updated successfully.`);
    } else {
      console.log(`Contact not found.`);
    }
  }

  deleteContact(name) {
    const index = this.contacts.findIndex((contact) => contact.getName() === name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact deleted successfully.`);
    } else {
      console.log(`Contact not found.`);
    }
  }
}

// Usage example:
const cms = new ContactManagementSystem();
cms.addContact("Manju", "Mymanju@gmail.com", "3737337737");
cms.addContact("Chinnu", "Chinnu@gmail.com", "9876543210");
cms.viewContacts();
cms.searchContact("Manju");
cms.updateContact("Chinnu", "Heychinnu!@lover.com", "123456789");
cms.deleteContact("Chinnu");
cms.viewContacts();
