import React, { useState } from "react";
import cl from './ModalRequest.module.css';

const ModalRequest = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [checked, setChecked] = useState(false);

    function sendSubmit() {
        if(name && phone && checked) {
            alert('Спасибо за обращение! Мы свяжемся с Вами в ближайшее время');
        }
    }

    return (
        <div className={cl.container}>
            <form>
                <h1 className={cl.h1}>Отправьте заявку</h1>
                <p className={cl.p}>Мы свяжемся с Вами в ближайшее время</p>
                <input
                    type="text" 
                    placeholder="Имя" 
                    required 
                    className={cl.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Телефон" 
                    required 
                    className={cl.input}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Комментарий" 
                    className={cl.input}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} 
                />
                <label>
                    <input 
                        type="checkbox"
                        required
                        checked={checked} 
                        onChange={() => setChecked(!checked)} 
                    />
                    <p>Отправляя заявку Вы соглашаетесь на обработку персональных данных</p>
                </label>
                <button type="submit" onClick={sendSubmit}>Отправить заявку</button>
            </form>
        </div>
    );
};

export default ModalRequest;
