import db from "./drizzle/db";
import { tableState,tableCity } from "./drizzle/schema";
import{tiCity,tiState,tsCity,tsState} from "./drizzle/schema"

//query
const getCode= async (): Promise <tiState[] > =>{
    return await db.query.tableState.findMany()
}

//insert
const createCode= async (states:tiState) =>{
     await db.insert(tableState).values({
        name:states.name,
        code:states.code
     })
}

//select
const getdetails=async (): Promise < tiState[]> =>{
   return await db.select().from(tableState);
}
// const getCitiesInState= async () =>{
//     return await db.query.tableState.findMany({
//         with:{
//             code:true
//         }
//     })
// }

async function main() {
    // console.log(await getCitiesInState())
    // console.log((await createCode({
    //     name:"chicago",
    //     code:"001",
    //     city:"irle"
    // })))
    console.log(await getdetails())
}
main();