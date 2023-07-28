import firebase from "../config/firebase";

export async function create(data) {
    const responseUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(responseUser);
    if (responseUser.user.uid) {
      const document = await firebase.firestore().collection("usuarios").add({
        name: data.nombre,
        lastname: data.apellido,
        userId: responseUser.user.uid,
      });
      return document;
    }
}

export async function login(data) {
    const responseUser = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
  
    return responseUser;
}
  