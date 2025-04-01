import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";

const Modal = (props) => {
    const{isOpen, onClose, title, items, setItems} = props;
    if (!isOpen) return null;
    const [inputTitle, setInputTitle] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const addItem = () =>{
        const newItem = {
            title: inputTitle,
            desc: inputDesc,
            price: inputPrice
        }
        setItems([...items, newItem])
        setInputTitle("")
        setInputDesc("")
        setInputPrice("")
    }
    return(
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[400px] relative">
                <h2><Text size="large">{title}</Text></h2>
                <div>
                    <ul>
                        {/* <Text>{children.map((item, index) => (
                            <li key={index}>{item.title} {item.desc} {item.price}</li>
                        ))}</Text> */}
                        <Input placeholder="Название продукта" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}></Input>
                        <Input placeholder="Описание" value={inputDesc} onChange={(e) => setInputDesc(e.target.value)}></Input>
                        <Input placeholder="цена в $" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)}></Input>
                    </ul>
                </div>
                <Button onClick={addItem} color="primary" title="Добавить" size="medium"></Button>
                <Button onClick={onClose} color="secondary" size="medium" title="Закрыть"></Button>
            </div>
        </div>
    )
}

export default Modal;