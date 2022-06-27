import React, {useState } from 'react';
import { useStudentsContext } from './AppContext';


import StudentCard from './StudentCard';







function StudentsProfiles() {

    const {tagsCollection, studentsInfo} = useStudentsContext();

    const [nameSearch, setNameSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');

    const byNameSearch = 'search-by-name';
    const byTagSearch = 'search-by-tag';
    const [tagSearchFieldEmpty, setTagSearchFieldEmpty] = useState(true);
    const [emptyTag,setEmptyTag] = useState(true);
    const [byTagStud, setByTagStud] = useState([])

    function getByTagStudents(){
        const usableTags = tagsCollection.filter((pair)=> pair.tag === tagSearch)
        setByTagStud(()=>{
            studentsInfo.filter((student)=> {
                
            })
        })
    }

    function handleSearch(event){
        if (event.target.name === byNameSearch ){
            setNameSearch(event.target.value);
            console.log('search by tag')
        }else if (event.target.name === byTagSearch){
            setTagSearch(event.target.value);
            console.log('search by tag')
        }
        
        
    }


    
    
    


  return (
    <div className='students-profiles-container'>
        <div className='search-box-container flex'>
            <input 
            type='text' 
            className='search-box' 
            name='search-by-name' 
            placeholder='Search by name'
            onChange={handleSearch}
            // onMouseOut={handleChange}
            
            />
            {/* <Search /> */}
            
            {/* <input 
            type='text' 
            className='search-box' 
            name='search-by-tag' 
            placeholder='Search by tag'
            onChange={handleSearch}
            /> */}
            
            
        </div>

        { true && studentsInfo.map((student)=>{
            
            const firstName = student.firstName.toLowerCase();
            const lastName = student.lastName.toLowerCase();
            const fullName = firstName + lastName;
            
            

            
            if(fullName.includes(nameSearch.toLowerCase())){
                
               
                
                return(
                    <StudentCard 
                    key={student.id}
                    id={student.id}
                    company={student.company}
                    email={student.email}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    grades={student.grades}
                    skill={student.skill}
                    pic={student.pic}
                    

                    />
                    )
                

                }

                })}
        
        
            {/* { true && studentsInfo.map((student)=>(
                    <StudentCard 
                    key={student.id}
                    id={student.id}
                    company={student.company}
                    email={student.email}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    grades={student.grades}
                    skill={student.skill}
                    pic={student.pic}


                    />
                ))} */}
    </div>
    
  )
}




export default StudentsProfiles;