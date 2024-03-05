
import { Client, Databases,Query,ID  } from "appwrite";
// import useUserStore from '../userauth';
// const { userId, setUserId } = useUserStore();
// const { workerID, setWorkerId } = useUserStore();

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("65e0c18c9757700a4254");

 
const databases = new Databases(client)

 export const setStatusPending = (documentid)=>{
    
    // Call the update document method
    
    databases.updateDocument("servicefinder","worker", documentid, {status:"pending"})
        .then(response => {
            console.log('Document updated successfully:', response);
        })
        .catch(error => {
            console.error('Error updating document:', error);
        });
}

export const setAddress = (documentid,addressid)=>{
    
    // Call the update document method
    
    databases.updateDocument("servicefinder","worker", documentid, {address:addressid})
        .then(response => {
            console.log('Document updated successfully:', response);
        })
        .catch(error => {
            console.error('Error updating document:', error);
        });
}




export function getStatus(documentid){
    databases.getDocument("servicefinder","worker", documentid)
    .then(response => {
        // Extract the value of the desired attribute
        const attributeValue = response['status']; // Assuming the attribute you want to retrieve is stored in 'key1'
        console.log('Attribute value:', attributeValue);
        return attributeValue
    })
    .catch(error => {
        console.error('Error fetching document:', error);
    });

}


export const createWork =async (documentdata) =>{
    const response =  await databases.createDocument("servicefinder","work", documentdata)
    console.log('Document created successfully:', response);
    const workid = response.$id
    return workid
}
export const getWorkerId =async (name) =>{
    const response = databases.listDocuments("servicefinder","worker",[
        Query.equal('name', name)
    ])
    const documentIds = response.documents.map(doc => doc.$id);
    console.log('Document IDs:', documentIds);
    return documentIds[0];
}


export const saveUserToDb = async (userdata)=>{
    let userid
   const response = await databases.createDocument("servicefinder","user",  ID.unique(),userdata)
   console.log('Document created successfully:', response);
   userid =  response.$id

    return userid
}
export const saveWorkerToDb = async (data)=>{
let workerid;
// const workerid = generateRandomId(10)
console.log(data.phone)
  const response =  await databases.createDocument("servicefinder","worker",ID.unique(),data)
  console.log('Document created successfully:', response);
  workerid = response.$id
    console.log("tejewlj",workerid)
    return workerid 
}
export const saveAddress = async(address)=>{
    let documentid
    // console.log(workerid)
       documentid = await databases.createDocument("servicefinder","address", ID.unique(),address)
       console.log('Document created successfully:', response);
       documentid =  response.$id
        return documentid 
    }