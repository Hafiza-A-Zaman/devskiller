import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../Navbar';
import ComponentsPickerContainer from '../ComponentsPicker';
import { ComponentsPreview } from '../ComponentsPreview';
import ComponentFormWrapper from '../ComponentForms';

import {
  updateComponent,
  removeComponent,
} from '../../store/components/actions';

export const Layout = () => { 
  const { currentlyEdited } = useSelector((state) => state.components)
  const dispatch = useDispatch();

  console.log(currentlyEdited);

  return (
  <Fragment>
    <Navbar />
    <div className="d-flex">
      <ComponentsPreview />
      <ComponentsPickerContainer lockedPicker={!!currentlyEdited} />
    </div>
    {currentlyEdited && (
      <ComponentFormWrapper
        layout={currentlyEdited.layout}
        onRemoveClick={() => dispatch(removeComponent(currentlyEdited.id))}
        onSubmit={values => dispatch(updateComponent(currentlyEdited.id, { ...currentlyEdited, values }))}
        values={currentlyEdited.values}
      />
    )}
  </Fragment>
)}
