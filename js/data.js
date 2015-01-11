var pages = [{
    "shortTitle": "My Meshing Notes",
    "html": "meshinghome.html"
}, {
    "shortTitle": "Meshing For Art",
    "html": "meshing0.html"
}, {
    "shortTitle": "Summary of IMR",
    "html": "meshing1.html"
}, {
    "shortTitle": "Calvin and Hobbes",
    "html": "meshing2.html"
}]
var documents = [{
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Carl F. Ollivier Gooch",
    "papertitle": "Anisotropic Layering via Curve Insertion into Two Dimensional Meshes",
    "date": "October 2014",
    "conference": "23rd International Meshing Roundtable. Research Note",
    "journal": "",
    "paper": "zaide_IMR2014.pdf",
    "slides": "zaide_IMR2014_slides.pdf",
    "poster": "",
    "notes": "",
    "special": true,
    "topic": "meshing",
    "describe": "This is a neat research note using the my work on curve insertion to generate layers of quadrilaterals in an existing unstructured mesh, as a form of adaptation to conform to a new prescribed boundary. It was actually one of two research notes I submitted to the Conference, upon which they told me to pick one, and this one succeeded over 'inserting a curve into a 2D anisotropic mesh'. I sometimes doubt that decision, but nonetheless, fun work. Oh yeah, preliminary 3D results were also presented."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Carl F. Ollivier Gooch",
    "papertitle": "Inserting a Curve into an Existing Two Dimensional Mesh",
    "date": "October 2013",
    "conference": "22nd International Meshing Roundtable. Conference Paper",
    "journal": "",
    "paper": "zaide_IMR2013.pdf",
    "slides": "zaide_IMR2013_slides.pdf",
    "poster": "",
    "notes": "",
    "special": true,
    "topic": "meshing",
    "describe": "My first foray into meshing. Title is fairly self explanatory. This is the basis of the 3D algorithm, and was meant to be an alternative approach to this type of problem. From this paper and presentation I adopted the externally triangulated maple leaf, which I now use as my symbol. I also remember making a good joke about the government shutdown during my talk< I was quite proud of it."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "A Second-Order Finite Volume Method that Reduces Numerical Shockwave Anomalies in One Dimension",
    "date": "June 2013",
    "conference": "21st AIAA CFD Conference",
    "journal": "",
    "paper": "AIAA-2013-2699.pdf",
    "slides": "AIAA-2013-2699.pdf_slides.pdf",
    "poster": "",
    "notes": "",
    "special": true,
    "topic": "cfd",
    "describe": "An extension of my thesis work, demonstrating that the additional states used for second-order accuracy can also be used to provide additional information to the Riemann solver, reducing shockwave anomalies but providing increased accuracy in smooth regions. This was presented at the conference after the Jameson-Roe-Van Leer party in San Diego. I had fun."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide",
    "papertitle": "How to Capture a Shockwave",
    "date": "August 2012",
    "conference": "Future Directions in CFD Research, A Modeling and Simulation Conference",
    "journal": "",
    "paper": "",
    "slides": "zaide_CFDFutures_slides.pdf",
    "poster": "",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "This was a neat little get together, to celebrate ICASE. I think I was the youngest speaker by about 10 years. It was humbling. The presentation itself is a succinct summary of my work, and a good snippet."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "Flux Functions for Reducing Numerical Shockwave Anomalies",
    "date": "June 2012",
    "conference": "Seventh International Conference on Computational Fluid Dynamics",
    "journal": "",
    "paper": "zaide_ICCFD7.pdf",
    "slides": "zaide_ICCFD7_slides.pdf",
    "poster": "",
    "notes": "",
    "special": true,
    "topic": "cfd",
    "describe": "One of the first complete presentations on the new flux functions that formed the crux of my thesis. Missing the extension to 2D, but conceptually strong. This was a few weeks after I defended my Ph.D. I had a good time at this conference, which was at a beautiful venue in Hawaii. I also brought my mom to this conference, as a present to her on our way to visit family in Asia."
}, {
    "papertype": "dissertation",
    "authors": "Daniel W. Zaide",
    "papertitle": "Numerical Shockwave Anomalies",
    "date": "June 2012",
    "conference": "",
    "journal": "",
    "paper": "zaide_thesis.pdf",
    "slides": "zaide_thesis_slides.pdf",
    "poster": "",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "My Ph.D. Dissertation. My goal was to keep it short and sweet, and I think I succeeded. Could not have done it without a lot of help from a lot of people. I really enjoyed the presentation aspect, it gave me an opportunity to tell a story rather than give a more traditional technical presentation, and I spent a great deal of time looking at the history of shockwaves and CFD to prepare this presentation."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "On Wall Heating, Slowly Moving Shocks, and Sub-cell Shock Position.",
    "date": "September 2011",
    "conference": "International Conference on Numerical Methods For Multi-Material Fluid Flows",
    "journal": "",
    "paper": "",
    "slides": "zaide_multimat2011_slides.pdf",
    "poster": "",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "Sur la prediction numerique du flux de chaleur, la propagation lente d’ondes de choc et la structure du choc a l’interieur d’une maille. More of same. Conference venue in Arcachon was stunning, and they threw a phenomenal banquet at a winery."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Robert B. Lowrie",
    "papertitle": "A Second-Order IMEX Method for Radiation Hydrodynamics",
    "date": "July 2011",
    "conference": "7th International Congress on Industrial and Applied Mathematics",
    "journal": "",
    "paper": "",
    "slides": "zaide_imex_slides.pdf",
    "poster": "zaide_imex_poster.pdf",
    "notes": "Poster presented elsewhere.",
    "special": true,
    "topic": "cfd",
    "describe": "Research based on summer work I completed at Los Alamos under Dr. Robert Lowrie. Hard to prove a lot about the method, but otherwise it performed well. This conference was in Vancouver, and was an opportunity to stay with family while attending."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "Shock Capturing Anomalies and the Jump Conditions in One Dimension",
    "date": "June 2011",
    "conference": " 20th AIAA CFD Conferences",
    "journal": "",
    "paper": "zaide_AIAA-2011-3686.pdf",
    "slides": "zaide_AIAA-2011-3686.pdf_slides.pdf",
    "poster": "",
    "notes": "First Place, 4th AIAA CFD Student Paper Competition",
    "special": true,
    "topic": "cfd",
    "describe": "This was a fun conference presentation in Hawaii. First real description of what I believe to be the crux of the problem around shock-capturing. Two people independently came up to me afterwards and told me 'I wanted to tell you to turn down the volume on the microphone, and then i realized you weren't using a mic'. I've spoken a bit quieter ever since. I was also rewarded with first place in the student paper competition, a humbling honor giving the other presentations and students. My first time surfing as well."
}, {
    "papertype": "conference",
    "authors": "Philip L. Roe and Daniel W. Zaide",
    "papertitle": "Entropy Traces in Eulerian and Lagrangian Calculations",
    "date": "July 2010",
    "conference": "Sixth International Conference on Computational Fluid Dynamics",
    "journal": "",
    "paper": "zaide_ICCFD6.pdf",
    "slides": "zaide_ICCFD6_slides.pdf",
    "poster": "zaide_entropytraceposter.pdf",
    "notes": "Poster presented elsewhere.",
    "special": false,
    "topic": "cfd",
    "describe": "This was a poster for the Center for Radiation Shock Hydrodynamics at the University of Michigan. Looking specifically at the wall heating phenomenon, and providing several explanations as to the cause of the problem. Future work refined on this idea, but the poster is kinda fun and a good intermediate step in the research."
}, {
    "papertype": "poster",
    "authors": "Daniel W. Zaide, Philip L. Roe, and Kenneth G. Powell",
    "papertitle": "Investigating the Numerical Wall Heating Phenomenon",
    "date": "2009",
    "conference": "",
    "journal": "",
    "paper": "",
    "slides": "",
    "poster": "zaide_wallheatingposter.pdf",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "This was a poster for the Center for Radiation Shock Hydrodynamics at the University of Michigan. Looking specifically at the wall heating phenomenon, and providing several explanations as to the cause of the problem. Future work refined on this idea, but the poster is kinda fun and a good intermediate step in the research."
}, {
    "papertype": "poster",
    "authors": "Tiberius Moran-Lopez, Daniel W. Zaide, James P. Holloway, and Oleg Schilling",
    "papertitle": "Towards a Self-Similar Analysis of the Turbulent Taylor-Sedov Blast Wave Problem",
    "date": "2009",
    "conference": "",
    "journal": "",
    "paper": "",
    "slides": "",
    "poster": "zaide_turbposter.pdf",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "This was collaborative work as part of the Center for Radiation Shock Hydrodynamics at the University of Michigan. My contribution was on the numerics for some of the system. Tiberius went on to write a thesis on turbulent radiative shock hydrodynamics. I went off to play with fundamental shockwaves."
}, {
    "papertype": "poster",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "On Godunov-Type Lagrangian Methods",
    "date": "2009",
    "conference": "",
    "journal": "",
    "paper": "",
    "slides": "",
    "poster": "zaide_aleposter.pdf",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "This was a poster for the Center for Radiation Shock Hydrodynamics at the University of Michigan. Interesting idea on Lagrangian methods, on a simple analysis for mass flux. This ultimately led to my Ph.D. topic, when we realized we could analyze these types of issues more easily in the Eulerian frame."
}, {
    "papertype": "poster",
    "authors": "Tiberius Moran-Lopez, James P. Holloway, Daniel W. Zaide, and Oleg Schilling",
    "papertitle": "Turbulent Radiative Shock Modeling with Low-Order Angular Moment Resolution",
    "date": "2009",
    "conference": "",
    "journal": "",
    "paper": "",
    "slides": "",
    "poster": "zaide_turbposter2.pdf",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "This was a poster for the Center for Radiation Shock Hydrodynamics at the University of Michigan."
}, {
    "papertype": "conference",
    "authors": "Daniel W. Zaide and Philip L. Roe",
    "papertitle": "Entropy-based mesh refinement, II: a new approach to mesh movement",
    "date": "June 2009",
    "conference": "19th AIAA CFD Conferences",
    "journal": "",
    "paper": "zaide_AIAA-2009-3791.pdf",
    "slides": "",
    "poster": "",
    "notes": "",
    "special": false,
    "topic": "cfd",
    "describe": "My first conference paper. I didn't attend this conference actually, as I was at Cambridge University working under Professor Roe at the time. Some neat stuff to come out of this, such as the entropy distance, which can be seen in the notes section."
}]