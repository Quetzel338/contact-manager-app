import React from 'react'


const Contactcard = ({contact, deleteContact}) => {

    const deleteHandler=(name)=>{
        deleteContact(name);
    }

  return (
    <div className='container'>
    <div className='icon-user'>
      <i class="fa fa-user fa-2x"></i>
      </div>
      <stack>
      <text><b>{contact.name}</b></text>
      <text> : </text>
      <text>{contact.number}</text>
      </stack>
      <button className='btn' onClick={()=> deleteHandler(contact.name)}><i class="fa fa-trash fa-2x"></i></button>
    </div>
  );
};

export default Contactcard;
