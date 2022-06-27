import React,{useState} from 'react'

const Search = () => {

    const [searching, setSearching] = useState('all');

    function handleChange(event){

        
    
        // console.log(event.target.value);
        
        // if (event.target.value !=='' || event.target.value !== null){
        //     const name = event.target.name;
        //     const tag = event.target.name ;
        //     setSearching(()=>{
        //         if(name === 'search-by-name'){
        //             return 'by-name'
        //         }else if(tag=== 'search-by-tag'){
        //             return 'by-tag'
        //         }
        //     })
        //     console.log(searching)
            
    
    
        // }else if(event.target.value === '' || event.target.value == null || event.target.value === undefined){
        //     setSearching('all')
        // }
        
        
    }
  return (
    <div>
        {/* <div className='search-box-container flex'>
            <input 
            type='text' 
            className='search-box' 
            name='search-by-name' 
            placeholder='Search by name'
            onChange={handleChange}
            // onMouseOut={handleChange}
            
            /> */}
            
            <input 
            type='text' 
            className='search-box' 
            name='search-by-tag' 
            placeholder='Search by tag'
            onChange={handleChange}
            />
        {/* </div> */}
    </div>
  )
}

export default Search