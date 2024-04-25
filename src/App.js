import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clientProfile from './pages/profiles/clientProfile';
import packsPage from './pages/packs/packsPage';
import inputEmail from './pages/email/inputEmail';
import verificationEmail from './pages/email/verificationEmail';
import inputPhone from './pages/phone/inputPhone';
import verificationPhone from './pages/phone/verificationPhone';
import uploadCin from './pages/ocr/uploadCin';
import OcrDataForm from './pages/ocr/ocrDataForm';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={clientProfile} />
          <Route path="/pack/:clientCode" component={packsPage} />
          <Route path="/input-email" component={inputEmail} />
          <Route path="/verification-email" component={verificationEmail} /> 
          <Route path="/input-phone" component={inputPhone} />
          <Route path="/verification-phone" component={verificationPhone} /> 
          <Route path="/upload-cin" component={uploadCin} />
          <Route path="/ocr-data-form" component={OcrDataForm} />
        </Switch>
    </Router>
  );
}

export default App;
