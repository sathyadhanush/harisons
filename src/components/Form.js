import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import FormSection from './FormSection';

function Form({
  className = '',
  content,
  sections = null,
}) {
  const [activeNavId, setActiveNavId] = useState(sections && sections[0].id);
  const $sections = useRef({});

  function handleScroll(event) {
    const { scrollTop } = event.target;
    const { height } = event.target.getBoundingClientRect();
  }

  function handleNavClick(section) {
    setActiveNavId(section.id);
    $sections.current[section.id].scrollIntoView();
  }

  function renderSection(section) {
    if (section.id === 'tags') {
      return (section.content);
    }
    return (
      <FormSection
        name={section.name}
        content={section.content}
        ref={(el) => {
          $sections.current[section.id] = el;
        }}
      />
    );
  }

  function renderContent() {
    if (content) {
      return content;
    }
    return sections.map(renderSection);
  }

  function getNavClassName(section) {
    return clsx('ui-nav__item', {
      'ui-nav__item--active': activeNavId === section.id,
    });
  }

  function renderNavBar() {
    if (sections === null) {
      return;
    }
    return (
      <div
        className="ui-form__nav ui-nav"
      >
        {sections.map((section) => (
          <div
            ref={(el) => {
              $sections.current[section.id] = el;
            }}
            className={getNavClassName(section)}
            onClick={() => handleNavClick(section)}
          >
            {section.name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`ui-form ui-form--sectioned ${className}`}>
      {renderNavBar()}
      <div className="ui-form__sections" onScroll={handleScroll}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Form;
