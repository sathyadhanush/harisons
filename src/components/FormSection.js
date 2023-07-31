import clsx from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FormSection = forwardRef(({ name, content, className }, ref) => (
  <div className={clsx('ui-form-section', className)} ref={ref}>
    {name && <div className="ui-form-section__name">{name}</div>}
    {content && <div className="ui-form-section__content">{content}</div>}
  </div>
));

FormSection.propTypes = {
  name: PropTypes.string,
  content: PropTypes.node,
  className: PropTypes.string,
};

FormSection.displayName = 'FormSection';

export default FormSection;
