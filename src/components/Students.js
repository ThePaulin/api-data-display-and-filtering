import React, {useState } from 'react';
import { useStudentsContext, useTestContext } from './AppContext';


import StudentCard from './StudentCard';







function StudentsProfiles() {
    // const {studentsInfo, setStudentsInfo }= SearchContext();
    // const {studentsInfo, setStudentsInfo} = useSearchContext();
    // const [studentsInfo, setStudentsInfo] = useState([]);
    // const [searchBoxActive, setSearchBoxActive] = useState(false);

    const {test, runTest} = useTestContext();
    const {studentsInfo, setStudentsInfo} = useStudentsContext();

    const [nameSearch, setNameSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');

    const byNameSearch = 'search-by-name';
    const byTagSearch = 'search-by-tag';
    function handleSearch(event){
        if (event.target.name === byNameSearch ){
            setNameSearch(event.target.value);
        }else if (event.target.name === byTagSearch){
            setTagSearch(event.target.value)
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
            
            <input 
            type='text' 
            className='search-box' 
            name='search-by-tag' 
            placeholder='Search by tag'
            onChange={handleSearch}
            />
            <h1 onClick={runTest}> {test}</h1>
            
        </div>

        { true && studentsInfo.map((student)=>{
            const firstName = student.firstName.toLowerCase();
            const lastName = student.lastName.toLowerCase();
            const fullName = firstName + lastName;

            
            if(fullName.includes(nameSearch.toLowerCase())){return(
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
                )}})}
        
        
            
    </div>
    
  )
}




export default StudentsProfiles;