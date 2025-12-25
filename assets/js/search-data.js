// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my side projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "More about me ...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "About my teaching and service experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "About me aside from work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-started-my-internship-on-robotics-engineering-at-lifefoundry-inc",
          title: 'Started my internship on robotics engineering at LifeFoundry Inc.!',
          description: "",
          section: "News",},{id: "news-received-the-a-r-buck-knight-scholarship",
          title: 'Received the A.R. “Buck” Knight Scholarship!',
          description: "",
          section: "News",},{id: "news-obtained-my-bachelor-s-degree-with-the-highest-honor-and-deposited-my-senior-thesis-dynamic-view-synthesis-in-unstructured-field-environment",
          title: 'Obtained my bachelor’s degree with the highest honor, and deposited my senior thesis...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-to-turn-diffusion-imitation-for-robust-row-turning-in-under-canopy-robots-is-accepted-to-icra-40",
          title: 'Our paper Learning to Turn: Diffusion Imitation for Robust Row Turning in Under-Canopy...',
          description: "",
          section: "News",},{id: "news-officially-started-grad-school-at-uiuc",
          title: 'Officially started grad school at UIUC!',
          description: "",
          section: "News",},{id: "news-our-paper-towards-real-time-generation-of-delay-compensated-video-feeds-for-outdoor-mobile-robot-teleoperation-is-accepted-to-icra-2025",
          title: 'Our paper Towards Real-Time Generation of Delay-Compensated Video Feeds for Outdoor Mobile Robot...',
          description: "",
          section: "News",},{id: "news-got-to-present-our-work-at-icra-2025-in-atlanta-georgia",
          title: 'Got to present our work at ICRA 2025 in Atlanta, Georgia!',
          description: "",
          section: "News",},{id: "news-started-my-internship-on-3d-sensor-simulation-at-zoox-inc",
          title: 'Started my internship on 3D sensor simulation at Zoox Inc.!',
          description: "",
          section: "News",},{id: "projects-agricultural-robots-simulation-environment",
          title: 'Agricultural Robots Simulation Environment',
          description: "A simulation environment for under-canopy agricultural field robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-f1-tenth-autonomous-system",
          title: 'F1-Tenth Autonomous System',
          description: "An autonomous system for F1-Tenth car lane-following",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-geometry-based-video-prediction-for-mobile-robots",
          title: 'Geometry-based Video Prediction for Mobile Robots',
          description: "A video prediction framework for mobile robots that models future visual observations by predicting camera motion and rendering future views using scene geometry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%78%69%61%6F%66%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jimmyfyx", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yixiao-fang-6025681a6", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=l8zaEqMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
