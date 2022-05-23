import styles from './index.module.scss';

const SearchContact = ({setSearchContact, searchContact}) => {
    
  return (

    <form className={styles.SearchContact}>
      <input type="text" value={searchContact} placeholder="Ricerca per nome/cognome" onChange={(e) => setSearchContact(e.target.value)} />
    </form>

  );
};

export default SearchContact;