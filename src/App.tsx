import { ChevronRight, ChevronLeft, Github, Linkedin, Sun, Moon, X, Mail, MoveRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import rbcLogo from 'figma:asset/56b884030bd0ae28239aa355922b0b03ff2f700c.png';
import accessLogo from 'figma:asset/7e9fc4e4986af3f1fcf9f3258992d99a82120421.png';

// Define panel data types
type PanelData = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  url?: string;
  icon: React.ReactNode;
  description: string | React.ReactNode;
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [isDark, setIsDark] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState<PanelData | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const directionRef = useRef<1 | -1>(1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const introRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Define all panel data
  const panelsData: PanelData[] = [
    {
      id: "rbc",
      title: "RBC",
      subtitle: "Software Developer",
      date: "July - Aug 2024 & 2025",
      icon: <img src={rbcLogo} alt="RBC Logo" className="h-7 w-auto" />,
      description: "Learned lots about writing scalable and future-proof software. My first summer I used Java Spring Boot and Angular.js to make a validation tool for financial planners. The following summer I moved to API security and built a system to ensure compliance in API spec files, mainly using Nest.js and Amazon S3. I was very fortunate to get my software into production both summers!"
    },
    {
      id: "access",
      title: "Access Inc.",
      subtitle: "IT Technician",
      date: "Feb 2024 - June 2024",
      icon: <img src={accessLogo} alt="Access Inc Logo" className="h-7 w-auto rounded" />,
      description: "Worked on various misc. tasks, mainly in the Microsoft Office ecosystem. I fixed a legacy timesheet system in visual basic, created an automatic invoice system, and made a chatbot POC for the company's new website."
    },
    {
      id: "project-alpha",
      title: "Nuncius (c. 2025)",
      subtitle: "",
      date: "https://github.com/lukajvnic/nuncius",
      url: "https://github.com/lukajvnic/nuncius",
      icon: <div className="w-6 h-6 bg-blue-500 rounded" />,
      description: "End-to-end encrypted CLI based messenger using RSA, and built using sockets, Kafka, and Kubernetes."
    },
    {
      id: "project-beta",
      title: "AI Research (c. 2025)",
      subtitle: "",
      date: "Link to Paper",
      url: "https://drive.google.com/file/d/1woeatZHOE1xuFrGhneHQci-BVzlRKFtt/view",
      icon: <div className="w-6 h-6 bg-purple-500 rounded" />,
      description: "Built a scikit-learn logistic regression model with RDKit achieving 93% accuracy in classifying estrogen-receptor distrupting compounds."
    },
    {
      id: "project-gamma",
      title: "Study Scope (c. 2024)",
      subtitle: "",
      date: "https://studyscopetutoring.com",
      url: "https://studyscopetutoring.com",
      icon: <div className="w-6 h-6 bg-orange-500 rounded" />,
      description: "Commissioned to make a website for a local tutoring business."
    },
    {
      id: "project-delta",
      title: "Old Streetcars (c. 2024)",
      subtitle: "",
      date: "https://lukajvnic.github.io/old-streetcar/",
      url: "https://lukajvnic.github.io/old-streetcar/",
      icon: <div className="w-6 h-6 bg-teal-500 rounded" />,
      description: "Small hobby project. Put together a map of what Toronto's streetcar system used to look like, and when various lines were removed. BlogTO wrote an article about it: https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/"
    }
  ];

  // Define carousel elements
  const carouselElements = [
    {
      key: "intro",
      ref: introRef,
      content: (
        <div
          ref={introRef}
          className={`space-y-4 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
          style={{
            lineHeight: "1.4",
            fontSize: `${fontSize}px`,
            textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          <p className="m-0">
            I'm a first year student at the University of
            Waterloo studying computer science. I enjoy learning
            about urban planning, astronomy, and philosophy in
            my spare time.
          </p>
          <p className="m-0">
            I started coding for fun at age 12, learning from
            the python docs. Six years later, I'm happy to
            report that my raison d'être hasn't changed.
          </p>
        </div>
      ),
      wrapperClass: "flex items-center justify-center",
    },
    {
      key: "experience",
      ref: experienceRef,
      content: (
        <div
          ref={experienceRef}
          className="flex flex-col gap-2 w-full"
        >
          {/* First panel - RBC */}
          <div 
            onClick={() => setSelectedPanel(panelsData[0])}
            className={`border rounded-2xl p-3 flex items-center gap-3 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <img src={rbcLogo} alt="RBC Logo" className="h-7 w-auto" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>RBC</h3>
              <p
                className={`m-0 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                style={{ fontSize: "0.9rem", textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}
              >
                Software Developer
              </p>
            </div>
            <div
              className={`text-right flex-shrink-0 whitespace-nowrap transition-colors ${isDark ? 'text-gray-400' : 'text-gray-400'}`}
              style={{ fontSize: "0.85rem", textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}
            >
              July - Aug 2024 & 2025
            </div>
          </div>

          {/* Second panel - Access Inc. */}
          <div 
            onClick={() => setSelectedPanel(panelsData[1])}
            className={`border rounded-2xl p-3 flex items-center gap-3 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <img src={accessLogo} alt="Access Inc Logo" className="h-7 w-auto rounded" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>
                Access Inc.
              </h3>
              <p
                className={`m-0 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                style={{ fontSize: "0.9rem", textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}
              >
                IT Technician
              </p>
            </div>
            <div
              className={`text-right flex-shrink-0 whitespace-nowrap transition-colors ${isDark ? 'text-gray-400' : 'text-gray-400'}`}
              style={{ fontSize: "0.85rem", textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}
            >
              Feb 2024 - June 2024
            </div>
          </div>
        </div>
      ),
      wrapperClass: "flex items-center",
    },
    {
      key: "projects",
      ref: projectsRef,
      content: (
        <div
          ref={projectsRef}
          className="grid grid-cols-2 gap-2 w-full"
        >
          {/* Project 1 */}
          <div 
            onClick={() => setSelectedPanel(panelsData[2])}
            className={`border rounded-xl p-2.5 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <div className="w-6 h-6 bg-blue-500 rounded" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>Nuncius</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            onClick={() => setSelectedPanel(panelsData[3])}
            className={`border rounded-xl p-2.5 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <div className="w-6 h-6 bg-purple-500 rounded" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>AI Research</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            onClick={() => setSelectedPanel(panelsData[4])}
            className={`border rounded-xl p-2.5 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <div className="w-6 h-6 bg-orange-500 rounded" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>Study Scope</h3>
            </div>
          </div>

          {/* Project 4 */}
          <div 
            onClick={() => setSelectedPanel(panelsData[5])}
            className={`border rounded-xl p-2.5 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-gray-300 bg-white'}`} 
            style={{ boxShadow: isDark ? "0 1px 2px rgba(255, 255, 255, 0.05)" : "0 1px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <div className="w-6 h-6 bg-teal-500 rounded" />
            </div>
            <div className="flex-1 text-left">
              <h3 className={`m-0 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>Old Streetcars</h3>
            </div>
          </div>
        </div>
      ),
      wrapperClass: "flex items-center",
    },
  ];

  // Measure the experience panels height (which is taller)
  useEffect(() => {
    if (experienceRef.current) {
      setElementHeight(experienceRef.current.offsetHeight);
    }
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track when user reaches the end
  useEffect(() => {
    if (currentIndex === carouselElements.length - 1) {
      setHasReachedEnd(true);
    }
  }, [currentIndex, carouselElements.length]);

  // Dynamically adjust font size to fit the container
  useEffect(() => {
    if (!introRef.current || !elementHeight) return;

    let currentSize = 16;
    const maxSize = 24;
    const minSize = 10;

    // Binary search for the optimal font size
    let low = minSize;
    let high = maxSize;
    let bestSize = minSize;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      introRef.current.style.fontSize = `${mid}px`;

      const contentHeight = introRef.current.scrollHeight;

      if (contentHeight <= elementHeight - 40) {
        // 40px padding for some breathing room
        bestSize = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setFontSize(bestSize);
  }, [elementHeight]);

  const goToNext = () => {
    if (currentIndex < carouselElements.length - 1) {
      directionRef.current = 1;
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      directionRef.current = -1;
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swiped left (show next)
        goToNext();
      } else {
        // Swiped right (show previous)
        goToPrevious();
      }
    }
    
    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("l3jovano@uwaterloo.ca");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const currentElement = carouselElements[currentIndex];

  // Define animation variants that read direction at animation time
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 1 ? "100vw" : "-100vw"
    }),
    center: {
      x: 0
    },
    exit: (direction: number) => ({
      x: direction === 1 ? "-100vw" : "100vw"
    })
  };

  return (
    <div 
      className={`min-h-screen w-full relative flex items-center justify-center overflow-hidden transition-colors duration-300 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.02)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.02)'} 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Social Links - Top Left */}
      <div className="absolute top-6 left-6 flex gap-3 z-20">
        <a
          href="https://github.com/lukajvnic"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/luka-j-ovanovic/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <button
          onClick={() => setShowEmail(true)}
          className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className={`mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ fontSize: "2.5rem", textShadow: isDark ? "0 2px 8px rgba(255, 255, 255, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>
          Hi, I'm Luka.
        </h1>

        <div className="relative w-full flex justify-center -mt-6">
          <div className="relative max-w-sm w-full">
            {/* Left Arrow - Fixed in space - Hidden on mobile */}
            {!isMobile && (
              <button
                onClick={goToPrevious}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 transition-colors z-20 ${currentIndex === 0 ? '' : 'cursor-pointer'} ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                style={{
                  opacity: currentIndex === 0 ? 0.3 : 1,
                  pointerEvents:
                    currentIndex === 0 ? "none" : "auto",
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Arrow - Fixed in space - Hidden on mobile */}
            {!isMobile && (
              <button
                onClick={goToNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 transition-colors z-20 ${currentIndex === carouselElements.length - 1 ? '' : 'cursor-pointer'} ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                style={{
                  opacity:
                    currentIndex === carouselElements.length - 1
                      ? 0.3
                      : 1,
                  pointerEvents:
                    currentIndex === carouselElements.length - 1
                      ? "none"
                      : "auto",
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Content container with fixed height */}
            <div
              className="relative"
              style={{ height: elementHeight || 200 }}
            >
              <AnimatePresence mode="wait" initial={false} custom={directionRef.current}>
                <motion.div
                  key={currentElement.key}
                  custom={directionRef.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.8
                  }}
                  style={{ height: elementHeight || 200 }}
                  className={currentElement.wrapperClass}
                >
                  {currentElement.content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe indicator - Mobile only, hidden after reaching end */}
            <AnimatePresence>
              {isMobile && !hasReachedEnd && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    x: [-3, 3, -3]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    opacity: { duration: 0.5 },
                    x: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2"
                >
                  <span className={`italic transition-colors ${isDark ? 'text-gray-500' : 'text-gray-400'}`} style={{ fontSize: '0.85rem' }}>
                    swipe
                  </span>
                  <MoveRight className={`w-4 h-4 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPanel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPanel(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPanel(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`relative max-w-lg w-full rounded-3xl p-6 transition-colors ${isDark ? 'bg-neutral-800/95 border-2 border-neutral-600' : 'bg-white/95 border-2 border-gray-300'}`}
                style={{ boxShadow: isDark ? "0 20px 60px rgba(0, 0, 0, 0.5)" : "0 20px 60px rgba(0, 0, 0, 0.15)" }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedPanel(null)}
                  className={`absolute top-6 right-6 transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center ${isDark ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                    {selectedPanel.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h2 className={`m-0 mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: isDark ? "0 2px 6px rgba(255, 255, 255, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.15)" }}>
                      {selectedPanel.title}{selectedPanel.subtitle && ` (${selectedPanel.subtitle})`}
                    </h2>
                    {selectedPanel.url ? (
                      <a 
                        href={selectedPanel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`m-0 transition-colors underline hover:no-underline ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {selectedPanel.date}
                      </a>
                    ) : selectedPanel.date && (
                      <p className={`m-0 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {selectedPanel.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`} style={{ lineHeight: "1.6" }}>
                  {selectedPanel.id === "project-delta" ? (
                    <>
                      Small hobby project. Put together a map of what Toronto's streetcar system used to look like, and when various lines were removed. BlogTO wrote an article about it: <a href="https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/" target="_blank" rel="noopener noreferrer" className={`transition-colors underline hover:no-underline ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`} onClick={(e) => e.stopPropagation()}>https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/</a>
                    </>
                  ) : (
                    selectedPanel.description
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Email Modal */}
      <AnimatePresence>
        {showEmail && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEmail(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            \n            {/* Email Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setShowEmail(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`relative rounded-2xl p-4 transition-colors ${isDark ? 'bg-neutral-800/95 border-2 border-neutral-600' : 'bg-white/95 border-2 border-gray-300'}`}
                style={{ boxShadow: isDark ? "0 20px 60px rgba(0, 0, 0, 0.5)" : "0 20px 60px rgba(0, 0, 0, 0.15)" }}
              >
                {/* Close button */}
                <button
                  onClick={() => setShowEmail(false)}
                  className={`absolute top-1/2 -translate-y-1/2 right-3 transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Email text */}
                <div 
                  onClick={copyEmailToClipboard}
                  className={`pr-8 transition-all cursor-pointer select-none ${!emailCopied && 'underline'} ${emailCopied ? (isDark ? 'text-green-400' : 'text-green-600') : (isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700')}`}
                >
                  {emailCopied ? 'Copied!' : 'l3jovano@uwaterloo.ca'}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}