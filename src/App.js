import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScollToTop from './components/ScrollToTop';
import UseScrollToTop from './hooks/useScrollToTop'
import './css/App.css';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle'));

function App() {
  return (
    <AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
							<Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />
							 <Route path="/projects/single-project"	element={<ProjectSingle />} />
               <Route path='/about' element={<About />} />
							 <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}

export default App;
