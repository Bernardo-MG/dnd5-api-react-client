import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import routes from 'routes';
import { HashRouter as Router } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import localeData from 'i18n/messages.json';

addLocaleData(en);

let language = (navigator.languages && navigator.languages[0])
   || navigator.language
   || navigator.userLanguage;

const loadedLocales = ['en'];

if (!loadedLocales.some((locale) =>
   language.startsWith(locale))) {
   language = 'en';
}

/**
 * Production root application.
 */
const Root = ({ store }) =>
   (
      <IntlProvider locale={language} defaultLocale='en' messages={localeData}>
         <Provider store={store}>
            <Router>
               {routes}
            </Router>
         </Provider>
      </IntlProvider>
   );

Root.propTypes = {
   /** Application store */
   store: PropTypes.object.isRequired
};

export default Root;
