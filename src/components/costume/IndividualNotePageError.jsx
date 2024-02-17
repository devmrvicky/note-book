import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const IndividualNotePageError = ({children}) => {
  const {title} = useParams();
  const {notes} = useSelector(store => store.notes)
  const navigate = useNavigate()
  useEffect(() => {
    const note = notes.find(note => note.title === title)
    if(!note || !title){
      navigate('/notes')
    }
  })
  return (
    <>
      {children}
    </>
  )
}

export default IndividualNotePageError
