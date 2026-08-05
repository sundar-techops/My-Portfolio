import { useState, useEffect } from 'react';
import API from './api/axios';
import { useAdmin } from './context/AdminContext';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminToolbar from './components/AdminToolbar';

function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAdmin();

  // Fetch all data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes, experiencesRes] = await Promise.allSettled([
          API.get('/profile'),
          API.get('/skills'),
          API.get('/projects'),
          API.get('/experiences'),
        ]);

        if (profileRes.status === 'fulfilled') setProfile(profileRes.value.data);
        if (skillsRes.status === 'fulfilled') setSkills(skillsRes.value.data);
        if (projectsRes.status === 'fulfilled') setProjects(projectsRes.value.data);
        if (experiencesRes.status === 'fulfilled') setExperiences(experiencesRes.value.data);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle profile updates (local + optional persist)
  const handleProfileUpdate = async (updatedProfile, persist = false) => {
    setProfile(updatedProfile);
    if (persist && updatedProfile?.id) {
      try {
        await API.put(`/profile/${updatedProfile.id}`, updatedProfile);
      } catch (err) {
        console.error('Failed to update profile:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-950">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-950">
      {/* Background ambient orbs */}
      <BackgroundOrbs />

      {/* Navigation */}
      <Navbar profile={profile} />

      {/* Main Content */}
      <main>
        <Hero profile={profile} onUpdate={handleProfileUpdate} />
        <About profile={profile} onUpdate={handleProfileUpdate} />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects} />
        <Experience experiences={experiences} setExperiences={setExperiences} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin System */}
      <AdminLogin />
      <AdminToolbar />

      {/* Extra bottom padding when admin toolbar is visible */}
      {isLoggedIn && <div className="h-16" />}
    </div>
  );
}

export default App;
