import React, { useState } from 'react'
import { firestore } from '../firebase/firebase'

function ArtistForm() {
   // create state for each artist field
   let [displayName, setDisplayName] = useState({})
   let [contactName, setContactName] = useState({})
   let [address, setAddress] = useState({})
   let [phone, setPhone] = useState({})
   let [email, setEmail] = useState({})
   let [bio, setBio] = useState({})
   let [image1, setImage1] = useState({})
   let [image2, setImage2] = useState({})
   let [image3, setImage3] = useState({})
   let [image4, setImage4] = useState({})
   let [video1, setVideo1] = useState({})
   let [link1, setLink1] = useState({})
   let [link2, setLink2] = useState({})

   // create artist object from state
   let artist = {
      displayName: displayName,
      contactName: contactName,
      address: address,
      phone: phone,
      email: email,
      bio: bio,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      video1: video1,
      link1: link1,
      link2: link2
   }

   // write current state to artist collection
   async function enterNewArtist(event) {
      event.preventDefault()
      // get artist collection | .doc creates new entry with auto id | .set(artist) populates new artist entry
      firestore.collection('artists').doc().set(artist)
      event.target.displayNameInput.value = ''
      event.target.contactNameInput.value = ''
      event.target.addressInput.value = ''
      event.target.phoneInput.value = ''
      event.target.emailInput.value = ''
      event.target.bioInput.value = ''
      event.target.image1Input.value = ''
      event.target.image2Input.value = ''
      event.target.image3Input.value = ''
      event.target.image4Input.value = ''
      event.target.video1Input.value = ''
      event.target.link1Input.value = ''
      event.target.link2Input.value = ''
   }

   return (
      <div>

         <form id='ArtistForm' onSubmit={enterNewArtist} >
            <label>
               Artist Name:
               <input type='text' name='displayNameInput' onChange={evt => setDisplayName(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Contact Name:
               <input type='text' name='contactNameInput' onChange={evt => setContactName(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Address:
               <input type='text' name='addressInput' onChange={evt => setAddress(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Phone:
               <input type='text' name='phoneInput' onChange={evt => setPhone(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Email:
               <input type='text' name='emailInput' onChange={evt => setEmail(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Bio:
               <input type='text' name='bioInput' onChange={evt => setBio(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 1:
               <input type='text' name='image1Input' onChange={evt => setImage1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 2:
               <input type='text' name='image2Input' onChange={evt => setImage2(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 3:
               <input type='text' name='image3Input' onChange={evt => setImage3(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 4:
               <input type='text' name='image4Input' onChange={evt => setImage4(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Video:
               <input type='text' name='video1Input' onChange={evt => setVideo1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Link 1:
               <input type='text' name='link1Input' onChange={evt => setLink1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Link 2:
               <input type='text' name='link2Input' onChange={evt => setLink2(evt.target.value)}></input>
            </label>
            <br />
            <input type='submit' value='submit'></input>
         </form>
      </div>
   )
}





export default ArtistForm