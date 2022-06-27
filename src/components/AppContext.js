import React, {createContext, useEffect, useState, useContext} from 'react';

//Initial
const AppContext = createContext();
export const useStudentsContext = ()=> useContext(AppContext);


//TAGS
const TagsContext = createContext();
export const useTagsContext = ()=> useContext(TagsContext);

export function AppContextProvider({children}){
//INITIAL 
    const [studentsInfo, setStudentsInfo] = useState([]);
    const [temp, setTemp] =useState({})

    useEffect(() => {
      async function getStudentsInfo (){
          const response = await fetch("https://api.hatchways.io/assessment/students",{
              method: 'GET'
          })
          const data = await response.json();
          setStudentsInfo(data.students);
         

      }
      
      getStudentsInfo();
      
    
    }, []);
//TAGS

    
    const [updatedStudents, setUpdatedStudents] = useState([])
    function addTag(studentsInfo,updatedStudents, setUpdatedStudents, enteredTag, enteredTagId){
      console.log("addTag() was ran")
      
    }


    

    

    return(
      <AppContext.Provider value={{studentsInfo, setStudentsInfo,updatedStudents, setUpdatedStudents, addTag}} >
          
            {children}
          
      </AppContext.Provider>
    )
}
