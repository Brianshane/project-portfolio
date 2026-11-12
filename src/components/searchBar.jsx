function SearchBar({searchTerm ,onSearchChange}){
    return(
        <input type="text"
         placeholder="searchprojects" 
         value={searchTerm} 
         onChange={(e)=>onSearchChange(e.target.value)}
         className="w-full p-2 mb-2 box-border border border-gray-300 rounded-md"/>
            
    );            
        
         
    
}export default SearchBar;