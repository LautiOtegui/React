import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import {useParams} from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    console.log(db);

    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);
    

    useEffect(() => {
        (async () => {
            try {

const q =  categoryId ? 
query(collection(db, "products"), where("category", "==", categoryId)):
query(collection(db, "products"));
const productosFirebase = [];
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    productosFirebase.push({id: doc.id, ...doc.data()}) 
});

    console.log(productosFirebase);

    setProductos(productosFirebase)


            } catch (error) {
                console.log(error);
            }
        })();
    }, [categoryId]); 

    return <ItemList products={productos} />;
};

export default ItemListContainer;