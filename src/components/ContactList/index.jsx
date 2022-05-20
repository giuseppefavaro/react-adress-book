import styles from "./index.module.scss";

const ContactList = ({contactInfo, delContact, searchContact}) => {
    return(
        
        <div className={styles.wrapper}>
            <ul>
                {contactInfo &&
                    contactInfo
                    .filter((item) => item.name.toLowerCase().includes(searchContact.toLowerCase()) || item.surname.toLowerCase().includes(searchContact.toLowerCase()))
                    .map((item, index) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.surname}</p>
                        <p>{item.number}</p>
                        <button onClick={() => delContact(item.number)}>x</button>         
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ContactList;