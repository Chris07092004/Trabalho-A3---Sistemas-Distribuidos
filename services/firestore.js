import firebaseApp from "./firebaseApp.js";
import { getFirestore,  
    collection, query, 
    where, getDocs, setDoc, doc  } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);
const timesCollection = collection(db, 'times');
const ProdutosCollection = collection(db, 'products');
const CategoriasCollection = collection(db, 'categories');

const firestoreServices = {



    saveTime(time) {
        console.log(time);
        const docRef = doc(timesCollection);
        setDoc(docRef, time);
    },
    async getAllTimes() {
        const result = [];
        const q = query(timesCollection);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let d = doc.data();
            d.id = doc.id;
            result.push(d) ;   
        });
        return result;
    },
    saveTime(produto) {
        console.log(produto);
        const docRef = doc(produtosCollection);
        setDoc(docRef, produto);
    },
    async getAllProducts() {
        const result = [];
        const q = query(collection(db, 'products'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let d = doc.data();
            d.id = doc.id;
            result.push(d) ;   
        })
        return result;
    },
    async getAllCategories() {
        const result = [];
        const q = query(collection(db, 'categories'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let d = doc.data();
            d.id = doc.id;
            result.push(d) ;   
        })
        return result;
    },  
    saveCategoria(categoria) {
        const docRef = doc(categoriasCollection);
        setDoc(docRef, categoria);
    },

}

export default firestoreServices;