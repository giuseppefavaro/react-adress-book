import styles from './App.module.scss';

import { useState } from 'react';

import AddNewMessage from "./components/AddNewContact";
import MessageList from "./components/ContactList";


import SearchContact from "./components/SearchContact";


function App() {

  const [contactInfo, setContactInfo] = useState([]);
  const [searchContact, setSearchContact] = useState('');

 
    const formData = (nameInput, surnameInput, numberInput) => {
      const contacts = {
        name: nameInput,
        surname: surnameInput,
        number: numberInput,
      }

      setContactInfo([contacts, ...contactInfo]);
    }



    const delContact = (number) => {
      const newArr = contactInfo.filter(item => item.number !== (number));
      setContactInfo(newArr);
    }

    

  return (
    <main className={styles.App}>
      <div className={styles.App__left}>
        <AddNewMessage formData={formData} />
      </div>
      <div className={styles.App__right}>
        <SearchContact setSearchContact={setSearchContact} searchContact={searchContact}/>
        <MessageList contactInfo={contactInfo} searchContact={searchContact} delContact={delContact} />
      </div>
    </main>
  );
}

export default App;
