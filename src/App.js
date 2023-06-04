import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import Contactcard from './components/ContactCard';
import database from './firebase';

function App() {

  console.log(process.env.CONTACT_DATABASE);

  const[contacts, setContacts] = useState([ 
    {name:"Num1", number:11111111},
    {name:"Num2", number:87543234},
    {name:"Num3", number:234567},
    {name:"Num4", number:5678999}
  ]);
  const[name, setName] = useState('')
  const[number, setNumber] = useState('')
  const[searchName, setSearch] = useState('')

  const handleAdd= async(e)=>{
    e.preventDefault();

    database.ref("contacts").set([{name, number}]);

    const newContact = {name, number};
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
    return;
    };


    const deleteContact=(name)=>{
      const response = window.confirm("Do you want to delete the contact ? ");
      if( response){
        setContacts((prev) => [...contacts.filter((contact) =>
          contact.name !== name)])
          alert("Contact Deleted")
      }
      else{
        return;
      }
    }

    const handleSearch=(e) =>{
      setSearch(e.target.value)
    }
     const handleName = (e) => {
      setName(e.target.value);
    };

  const handleNum = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };


  // const fetchData = () =>{
  //   database.collection("data").get().then((querySnapshot) =>{
  //     querySnapshot.forEach(element => {
  //       var data = element.data();
  //       setContacts(arr =>[...contacts, data]);
  //     });
  //   })
  // }

  window.addEventListener('load', () =>{
    // fetchData();
    <div>
        {contacts.map((contact, index)=>(
          < Contactcard contact={contact} key={index} deleteContact={deleteContact} />
        ))}
      </div>

  })

let searchContacts = contacts.filter((contact)=> contact.name.includes(searchName))


  return (
    <div className="App">
      <h1>Contacts App</h1>
      <hr></hr>
      <form  >
      <input id="text2" type = "text"  placeholder="search..." name ="Search" value={searchName}  onChange={handleSearch}/>
        <button id="btn2" type="submit"><i class="fa fa-search"></i></button>
      </form>
      <br/>
      <Popup id="popup" trigger={<button id="btn3"><i class="fa fa-plus"></i> Add Contacts</button>} position="right center">
          <div className='div1'>
            <form onSubmit={handleAdd} className="mbsc-form-group">
              <label>Enter Name</label><br/>
              <input id="text1" type='text' placeholder='name' value={name} onChange={handleName}></input>
              <br/>
              <label>Enter Number</label>
              <input id="text1" type='text' placeholder='number'  value={number} onChange={handleNum}></input>
              <br/>
              <button id="btn1" type='submit'><b>Add</b></button>
            </form>
          </div>
      </Popup>
      <div>
        {searchContacts.map((contact, index)=>(
          < Contactcard  contact={contact} key={index} deleteContact={deleteContact}/>
        ))}
      </div>
    </div>
  );
}

export default App;
