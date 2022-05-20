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

            <form onSubmit={onSendData} className={styles.wrapper}>

                <label htmlFor="name">Nome</label>
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value) } type="text" id="name" name="name" placeholder="Inserisci nome" required />

                <label htmlFor="surname">Cognome</label>
                <input value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} id="surname" name="surname" placeholder="Inserisci cognome" required />

                <label htmlFor="number">Numero</label>
                <input value={numberInput} onChange={(e) => setNumberInput(e.target.value) } type="text" id="number" name="number" placeholder="Inserisci number" required />

                <input type="submit" value="Aggiungi" />
            </form>


    )
}


export default AddNewMessage;