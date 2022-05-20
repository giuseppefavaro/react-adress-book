import styles from './index.module.scss';

const SearchContact = ({setSearchContact, searchContact}) => {
    
  return (

    <form className={styles.wrapper}>
      <input type="text" value={searchContact} onChange={(e) => setSearchContact(e.target.value)} />
    </form>

  );
};

export default SearchContact;