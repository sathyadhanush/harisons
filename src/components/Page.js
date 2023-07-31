function Page({
  children,
  isOnboarding = false,
  onboardingTitle = null,
  onboardingSubTitle = null,
  onboardingActions = [],
  onboardingImage = null,
}) {
  function renderOnboarding() {
    return (
      <div className="ui-onboarding">
        {onboardingImage && <img className="ui-onboarding__image" alt="" src={onboardingImage} />}
        {onboardingTitle && <div className="ui-onboarding__title">{onboardingTitle}</div>}
        {onboardingSubTitle && <div className="ui-onboarding__sub-title">{onboardingSubTitle}</div>}
        {onboardingActions && <div className="ui-onboarding__actions">{onboardingActions}</div>}
      </div>
    );
  }

  if (isOnboarding) {
    return (
      <div className="ui-page">{renderOnboarding()}</div>
    );
  }

  return (
    <div className="ui-page h-100">
      {children}
    </div>
  );
}

export default Page;
