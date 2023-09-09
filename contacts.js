const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log(listContacts);
    } else {
      console.table(contacts, ["id", "name", "email", "phone"]);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId) || null;
    if (contact) {
      console.log(`Kontakt o ID ${contactId}`);
      console.table([contact], ["id", "name", "email", "phone"]);
    } else {
      console.log(`Nie znaleziono kontaktu o ID ${contactId}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index !== -1) {
      return null;
    } else {
      const [removedContact] = contacts.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
      console.table([removedContact], ["id", "name", "email", "phone"]);
      console.log(`Kontakt o ID ${contactId} został usunięty.`);
      return removedContact;
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table([newContact], ["id", "name", "email", "phone"]);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
