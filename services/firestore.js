import firebaseApp from "./firebaseApp.js";
import { getFirestore,  
    collection, query, 
    where, getDocs, getDoc, setDoc, doc, updateDoc, deleteDoc  } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);
const produtosCollection = collection(db, 'products');
const categoriasCollection = collection(db, 'categories');

const firestoreServices = {



    saveProduto(produto) {
    const docRef = doc(collection(db, "products")); // 👍 correto
    return setDoc(docRef, produto);
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
async updateProduct(id, data) {
  try {
    const ref = doc(db, "products", id);
    await updateDoc(ref, data);
    const updatedDoc = await getDoc(ref);
    return { id: updatedDoc.id, ...updatedDoc.data() };
  } catch (erro) {
    throw new Error("Erro ao atualizar produto: " + erro.message);
  }
},


async deleteProduct(id) {
  try {
    const ref = doc(db, "products", id);
    await deleteDoc(ref);
  } catch (erro) {
    throw new Error("Erro ao deletar produto: " + erro.message);
  }
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

async updateCategory(id, data) {
  try {
    const ref = doc(db, "categories", id);
    await updateDoc(ref, data);
    const updatedDoc = await getDoc(ref);
    return { id: updatedDoc.id, ...updatedDoc.data() };
  } catch (erro) {
    throw new Error("Erro ao atualizar categoria: " + erro.message);
  }
},

 async deleteCategory(id) {
    try {
      const ref = doc(db, "categories", id);
      await deleteDoc(ref);
    } catch (erro) {
      throw new Error("Erro ao deletar categoria: " + erro.message);
    }
  }
};



export default firestoreServices;