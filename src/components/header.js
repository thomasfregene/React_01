import React from 'react';

const getYear =()=>{
    const newDate = new Date();
    return newDate.getFullYear()
}

const Header = ()=>{
return <div>Header{getYear()}</div>
}

export default Header;