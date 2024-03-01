
import { Client, Databases,Query,ID  } from "appwrite";
// import useUserStore from '../userauth';
// const { userId, setUserId } = useUserStore();
// const { workerID, setWorkerId } = useUserStore();
let userid,workerid;

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


export function createWork (documentdata) {
    databases.createDocument("servicefinder","work", documentdata)
    .then(response => {
        console.log('Document created successfully:', response);
    })
    .catch(error => {
        console.error('Error creating document:', error);
    });
}
export const getWorkerId =(name) =>{
    databases.listDocuments("servicefinder","worker",[
        Query.equal('name', name)
    ])
    .then(response => {
        // Extract document IDs from the response
        const documentIds = response.documents.map(doc => doc.$id);
        return documentIds[0];
        console.log('Document IDs:', documentIds);
    })
    .catch(error => {
        console.error('Error listing documents:', error);
    });
}


export const saveUserToDb = (userdata)=>{
    let documentid
    databases.createDocument("servicefinder","user",  ID.unique(),userdata)
    .then(response => {
        
        console.log('Document created successfully:', response);
       
        userid =  response.$id
    })
    .catch(error => {
        console.error('Error creating document:', error);
    });
    return userid
}
export const saveWorkerToDb = (data)=>{
let documentid;
// const workerid = generateRandomId(10)
console.log(data.phone)
    databases.createDocument("servicefinder","worker",ID.unique(),data)
    .then(response => {
        
        console.log('Document created successfully:', response);
        documentid =  response.$id
        console.log(response.$id)
       workerid = response.$id
    })
    .catch(error => {
        
        console.error('Error creating document:', error);
    });
    console.log("tejewlj",workerid)
    return workerid 
}
export const saveAddress = (address)=>{
    let documentid
    // console.log(workerid)
        databases.createDocument("servicefinder","address", ID.unique(),address)
        .then(response => {
            
            console.log('Document created successfully:', response);
            documentid =  response.$id
        console.log(response.$id)

        })
        .catch(error => {
            
            console.error('Error creating document:', error);
        });
        return documentid 
    }