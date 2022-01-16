import Dexie from "dexie";

const db = new Dexie("TodoDatabase");
db.version(1).stores({
    todos: "++id,title,description,completed"
})

export default db;