import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BrowseScreen } from './screens/BrowseScreen';
import { UploadScreen } from './screens/UploadScreen';
import HomeScreen from './screens/HomeScreen';

export function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/browse" exact={true} component={BrowseScreen} />
          <Route path="/upload" exact={true} component={UploadScreen} />
        </div>
      </main>
    </BrowserRouter>
  );
}
