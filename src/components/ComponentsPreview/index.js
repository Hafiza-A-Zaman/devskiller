import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import ComponentsWrapper from "../Components";

import { setEditedComponent } from "../../store/components/actions";

import "./components-preview.css";

const isEmpty = (obj) => Object.keys(obj).length === 0;

export const ComponentsPreview = () => {
  const { currentlyEdited, items } = useSelector((state) => state.components);
  const dispatch = useDispatch();

  return (
    <div className="components-preview">
      {items.map((component) => (
        <ComponentsWrapper
          key={component.id}
          layout={component.layout}
          isEdited={
            component.id === currentlyEdited?.id && !isEmpty(component.id)
          }
          onComponentEdit={() => dispatch(setEditedComponent(component))}
          {...component}
        />
      ))}
    </div>
  );
};

ComponentsPreview.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentlyEdited: PropTypes.shape({}),
  onComponentEdit: PropTypes.func.isRequired,
};
