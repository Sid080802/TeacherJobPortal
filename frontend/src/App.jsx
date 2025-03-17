import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import TeacherDashboard from './pages/TeacherDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import ProfileEdit from './pages/ProfileEdit';
import JobSearch from './pages/JobSearch';
import JobDetails from './pages/JobDetails';
import Applications from './pages/Applications';
import PostJob from './pages/PostJob';
import CandidateSearch from './pages/CandidateSearch';
import Notifications from './pages/Notifications';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />

          {/* Teacher Routes */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/profile" element={<ProfileEdit />} />
          <Route path="/teacher/search" element={<JobSearch />} />
          <Route path="/teacher/job/:id" element={<JobDetails />} />
          <Route path="/teacher/applications" element={<Applications />} />
          <Route path="/teacher/notifications" element={<Notifications />} />

          {/* Employer Routes */}
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route path="/employer/search-candidates" element={<CandidateSearch />} />
          <Route path="/employer/notifications" element={<Notifications />} />

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
