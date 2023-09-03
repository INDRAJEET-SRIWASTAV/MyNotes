import React, { useState } from 'react'
import PlusIcon from '../../Assets/plus.png';
import './SideBar.css';

export default function SideBar(props) {
    const colors = ["#fe9b72", "#fec971", "#004dfe", "#b693fd", "#e4ee91", "#1ABC9C", "#EAEDED", "#ABEBC6","#FADBD8"]
    const [ListOpen, setlistOpen] = useState(false);
  return (
    <div className='sidebar'>
      <img src={PlusIcon} alt='Add' onClick={() => setlistOpen(!ListOpen)}/>
      <ul className={`sidebar-list ${ListOpen ? "sidebar-list-active" : ""}`}>
        {
            colors.map((item, index) =>( 
                <li 
                    key={index} className='sidebar-list-item' 
                    style={{backgroundColor : item}} 
                    onClick={() =>props.addNote(item)}

                />
        ))}
       </ul>
    </div>
  );
}
