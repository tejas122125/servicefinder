
import { Client, Databases,Query } from "appwrite";

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
    databases.createDocument("servicefinder","user",userdata)
    .then(response => {
        
        console.log('Document created successfully:', response);
        documentid =  response.$id
    })
    .catch(error => {
        console.error('Error creating document:', error);
    });
    return documentid
}
export const saveWorkerToDb = (userdata)=>{
let documentid
    databases.createDocument("servicefinder","worker", documentdata)
    .then(response => {
        
        console.log('Document created successfully:', response);
        documentid =  response.$id
    })
    .catch(error => {
        
        console.error('Error creating document:', error);
    });
    return documentid 
}
export const saveAddress = (address)=>{
    let documentid
        databases.createDocument("servicefinder","address", address)
        .then(response => {
            
            console.log('Document created successfully:', response);
            documentid =  response.$id
        })
        .catch(error => {
            
            console.error('Error creating document:', error);
        });
        return documentid 
    }