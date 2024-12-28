import { Account, Client, ID, Databases, Query, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL))
    .setProject(String(process.env.NEXT_PUBLIC_ENDPOINT))
// client.setProject('676d86350030b92595b3');

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage, Query, ID} 
