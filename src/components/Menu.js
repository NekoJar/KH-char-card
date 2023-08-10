export function Menu({ sortBy, char, onSort, onSearch }) {
  return (
    <div className="menu">
      <input
        type="text"
        placeholder="Search..."
        value={char}
        onChange={onSearch}
      ></input>
      <select value={sortBy} onChange={onSort}>
        <option value={"all"}>All</option>
        <option value={"one"}>Kingdom Hearts I</option>
        <option value={"com"}>Kingdom Hearts COM</option>
        <option value={"358"}>Kingdom Hearts 358/2</option>
        <option value={"two"}>Kingdom Hearts II</option>
        <option value={"bbs"}>Kingdom Hearts BBS</option>
        <option value={"coded"}>Kingdom Hearts Re:CODED</option>
        <option value={"ddd"}>Kingdom Hearts DDD</option>
        <option value={"frag"}>Kingdom Hearts 0.2</option>
        <option value={"three"}>Kingdom Hearts III</option>
        <option value={"mom"}>Kingdom Hearts MOM</option>
      </select>
    </div>
  );
}
