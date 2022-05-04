// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import YupTrialPage from './pages/YupTrialPage';
import YupTrialNestedPage from './pages/YupTrialNestedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/yup" element={<YupTrialPage />} />
        <Route path="/yupNested" element={<YupTrialNestedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
