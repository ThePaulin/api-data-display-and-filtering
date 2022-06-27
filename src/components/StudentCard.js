import React, {useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {useStudentsContext} from './AppContext';




function StudentCard(props) {
    

    const firstName = props.firstName.toUpperCase();
    const lastName = props.lastName.toUpperCase();
    const gradesArray = props.grades;


    function getMean (grades){
        let sum = 0;
        for(let i = 0; i < grades.length; i++){

            sum += Number(grades[i]);
        }
        let mean = sum/grades.length;
        return mean;
    }
    const average = getMean(gradesArray);

    const [expand, setExpand] = useState(false)
    function expandCard(){
        setExpand((prevExpand)=> !prevExpand)
        console.log(expand);
    }

//ENTERING A TAG
    // const {tagsArray, setTagsArray, addTag} = useTagsContext();

    const {studentsInfo, setStudentsInfo,updatedStudents, setUpdatedStudents, addTag} = useStudentsContext();

    const [tagsArray, setTagsArray] = useState([])
    const [tagsCollection,setTagsCollection] = useState({})
    const [enteredTag, setEnteredTag] = useState('')
    const [enteredTagId, setEnteredTagId] = useState('')


    // const [tagObj, setTagObj] = useState({id:"", tags:[]})

    function handleChangeTag(event){
    //  console.log(event.target.value)
    setEnteredTag(event.target.value);
    setEnteredTagId(event.target.id);
    }
    
    function handleSubmitTag(event){
        
        event.preventDefault();
        
        setEnteredTag(event.target.tagInput.value);
        setEnteredTagId(event.target.tagInput.id)
        setTagsArray((prev) => {
            return(
                [...prev,enteredTag]
            )
        })

        setTagsCollection((prev)=>{
            return(
                {id:enteredTagId , tags: tagsArray,}
            )
        })
        

  


        addTag(studentsInfo, updatedStudents, setUpdatedStudents, enteredTag, enteredTagId);

        setEnteredTag('');
        setEnteredTagId('');

    }

  return (
        
        <div className='student-card-container'>
            
            <div className='student-card flex'>
                <img src={props.pic} className='profile-pic'/>
                <div className='profile-info '>
                    <h1>{firstName} {lastName}</h1>
                    <div className='info-details'>
                        <p>Email: {props.email}</p>
                        <p>Company: {props.company}</p>
                        <p>Skill: {props.skill}</p>
                        <p>Average: {average}%</p>
                        <div className='tag-display-container flex'>
                            {tagsArray && tagsArray.map( (tag,index) => {
                                return(
                                    <div key={index} className='tag-display'>{tag}</div>
                                )
                            })}
                            
                        </div>
                        
                        {expand && <div className='average-details'>
                            {gradesArray.map((grade,index)=>(
                                <p key={index}>Test{index+1}: {grade}%</p>
                            ))}
                        </div>}
                        
                        <form onSubmit={handleSubmitTag}>
                            <input 
                            type='text'
                            id={props.id}
                            name='tagInput'
                            className='tag-input' 
                            placeholder='Add a tag'
                            value={enteredTag}
                            // defaultValue=''
                            
                            onChange={handleChangeTag}
                            required={true}

                            />

                        </form>
                        
                    </div>
                    
                    
                </div>

                {expand === false ? <div className='plus-btn'  id={props.id} onClick={expandCard}>
                    <AiOutlinePlus size={50}/>
                </div> : <div className='plus-btn'  id={props.id} onClick={expandCard}>
                    <AiOutlineMinus size={50}/>
                </div>}
                
                
            </div>
        </div>
  )
}

export default StudentCard;