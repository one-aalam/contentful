import ReactGA from 'react-ga';

export const personaKey = '__p'
const personaMap = {
  d: 'Default',
  wp: 'Wealthy Prospect',
  r: 'Retiree',
  gi: 'Global Investor',
  fti: 'First Time Investor'
};
const allowedPersonas = Object.keys(personaMap);

const getUserPersona = () => {
  // Which Portal: AP or CP
  // Sub Group: if added on Drupal CMS
  // Firm: as retrieved on  CMS
  // Role: derived from the user’s identity data
  // License Type: derived from the user’s identity data
  if (window.sessionStorage && window.sessionStorage.getItem(personaKey) && allowedPersonas.indexOf(window.sessionStorage.getItem(personaKey)) !== -1) {
    return personaMap[window.sessionStorage.getItem(personaKey)];
  }
  return personaMap['d'];
}

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-156928044-1')
}
export const logPageView = () => {
  const dimension1 = getUserPersona();
  console.log(`Logging pageview for ${window.location.pathname} and ${dimension1}`)
  ReactGA.set({ dimension1 });
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '', label = 'generic') => {
  if (category && action ) {
    ReactGA.event({ category, action, label })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}