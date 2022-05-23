import styles from "./index.module.scss";

import { useState } from "react";


const AddNewMessage = ({formData}) => {

    const [nameInput, setNameInput] = useState("");
    const [surnameInput, setSurnameInput] = useState("");
    const [numberInput, setNumberInput] = useState("");



      

    const onSendData = (e) => {
        e.preventDefault();

        formData(nameInput, surnameInput, numberInput);
    }


    return(
            <form onSubmit={onSendData} className={styles.AddNewMessage}>
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value) } type="text" id="name" name="name" placeholder="Nome" required />
                <input value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} type="text" id="surname" name="surname" placeholder="Cognome" required />
                <input value={numberInput} onChange={(e) => setNumberInput(e.target.value) } type="text" id="number" name="number" placeholder="Numero" required />
                <input type="submit" value="Aggiungi" className={styles.AddNewMessage__btn} />
            </form>


    )
}


export default AddNewMessage;