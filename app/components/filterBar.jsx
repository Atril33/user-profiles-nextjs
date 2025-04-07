

const FilterBar = ({ value, change }) => {


  return (
    <input type="text" placeholder="Search Users..." className="form-control border m-auto" value={value} onChange={change} />
  )
}

export default FilterBar;