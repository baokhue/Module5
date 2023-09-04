import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
import * as itemService from "../lesson6/services/todoListService"
import {toast} from "react-toastify";

export function TodoList() {
    const [itemList, setItemList] = useState([]);

    useEffect( () => {
            getItem();
    }, []);

    const getItem = async () => {
        const items = await itemService.getItem();
        setItemList(items.todos);
    }

    const addItem = async (value) => {
        await itemService.addItem([...itemList, value.item]);
        await getItem();
        toast.success("Add new item successfully!")
    }

    return (
        <>
            <h1>Todo List</h1>
            <Formik
                initialValues={
                    {
                        item: "",
                    }
                }
                onSubmit={
                    (values, {setSubmitting}) => {
                        addItem(values);
                        setSubmitting(false);
                }
                }
            >
                <Form>
                    <Field name="item" type="text" />
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <ul>
                {itemList.map((item, index) => {
                    return (
                        <>
                            <li key={index}>{item}</li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}