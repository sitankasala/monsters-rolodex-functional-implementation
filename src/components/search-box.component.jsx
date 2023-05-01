import '../search-box.css'

function SearchBox({ className,placeholder,handleOnChange }){
    return (
        <div>
            <input className={className}
                   type='search'
                   placeholder={placeholder}
                   onChange={handleOnChange}/>
        </div>
    );
}
export default SearchBox