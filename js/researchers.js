/* ========================================================
   AMIRESCAT — investigadores/as agrupados por reto/eje
   Para añadir o editar a alguien, copia un bloque { } y modifícalo.
   ======================================================== */

const RESEARCHERS = [
  {
    id: "ch1",
    titleKey: "ch1.title",
    tagKey: "ch1.tag",
    people: [
      { name: "Dr. Fernando Zamora Marín", lider: true, bio: {
        ca: "Catedràtic d'Enologia i Viticultura. Expert en compostos fenòlics, envelliment del vi i impacte del canvi climàtic en la viticultura. Ha dirigit 21 tesis doctorals i és president de la Comissió d'Enologia de l'OIV (2021–2024).",
        es: "Catedrático de Enología y Viticultura. Experto en compuestos fenólicos, envejecimiento del vino e impacto del cambio climático en la viticultura. Ha dirigido 21 tesis doctorales y es presidente de la Comisión de Enología de la OIV (2021–2024).",
        en: "Professor of Oenology and Viticulture. Expert in phenolic compounds, wine ageing and the impact of climate change on viticulture. Supervised 21 PhD theses; chaired the OIV Oenology Commission (2021–2024)."
      }}
    ]
  },
  {
    id: "ch2",
    titleKey: "ch2.title",
    tagKey: "ch2.tag",
    people: [
      { name: "Dra. Josepa Gené Díaz", lider: true, bio: {
        ca: "Catedràtica de Microbiologia, experta en diversitat de fongs filamentosos i micologia mèdica. Coautora de l'Atlas of Clinical Fungi i ha descrit més de 300 noves espècies fúngiques.",
        es: "Catedrática de Microbiología, experta en diversidad de hongos filamentosos y micología médica. Coautora del Atlas of Clinical Fungi y ha descrito más de 300 nuevas especies fúngicas.",
        en: "Professor of Microbiology, expert in filamentous fungi diversity and medical mycology. Co-author of the Atlas of Clinical Fungi; has described over 300 new fungal species."
      }},
      { name: "Dra. Sandra Contreras", lider: true, bio: {
        ca: "Professora d'Enginyeria Química especialitzada en oxidació avançada i fotocatàlisi per al tractament d'aigües residuals. Ha codirigit 9 tesis i participat en 43 projectes competitius.",
        es: "Profesora de Ingeniería Química especializada en oxidación avanzada y fotocatálisis para el tratamiento de aguas residuales. Ha codirigido 9 tesis y participado en 43 proyectos competitivos.",
        en: "Professor of Chemical Engineering specialising in advanced oxidation and photocatalysis for wastewater treatment. Co-supervised 9 theses and took part in 43 competitive projects."
      }},
      { name: "Dra. Dània Garcia", lider: false, bio: {
        ca: "Professora de Micologia a la Facultat de Medicina, especialitzada en identificació i descripció de noves espècies fúngiques, amb 128 publicacions científiques.",
        es: "Profesora de Micología en la Facultad de Medicina, especializada en identificación y descripción de nuevas especies fúngicas, con 128 publicaciones científicas.",
        en: "Professor of Mycology at the Faculty of Medicine, specialising in identifying and describing new fungal species, with 128 scientific publications."
      }}
    ]
  },
  {
    id: "ch3",
    titleKey: "ch3.title",
    tagKey: "ch3.tag",
    people: [
      { name: "Dr. Fèlix Llovell", lider: true, bio: {
        ca: "Dirigeix la Càtedra URV-Repsol de Transició Energètica. Investiga refrigerants sostenibles i integració de l'aprenentatge automàtic en termodinàmica. Líder d'aquest repte.",
        es: "Dirige la Cátedra URV-Repsol de Transición Energética. Investiga refrigerantes sostenibles e integración del aprendizaje automático en termodinámica. Líder de este reto.",
        en: "Heads the URV-Repsol Chair in Energy Transition. Researches sustainable refrigerants and machine learning applied to thermodynamics. Leads this challenge."
      }},
      { name: "Dra. Montserrat Diéguez Fernández", lider: true, bio: {
        ca: "Catedràtica de Química Inorgànica, dirigeix el grup InnCat. Experta en catàlisi asimètrica i metal·loenzims, amb premi ICREA Acadèmia en dues edicions.",
        es: "Catedrática de Química Inorgánica, dirige el grupo InnCat. Experta en catálisis asimétrica y metaloenzimas, con premio ICREA Acadèmia en dos ediciones.",
        en: "Professor of Inorganic Chemistry, heads the InnCat group. Expert in asymmetric catalysis and metalloenzymes; two-time ICREA Acadèmia award winner."
      }},
      { name: "Dra. Bahareh Khezri", lider: false, bio: {
        ca: "Professora ICREA en Química Física, experta en nanorobòtica ambiental i electrocatàlisi per a la reducció de CO₂ i generació d'hidrogen verd.",
        es: "Profesora ICREA en Química Física, experta en nanorrobótica ambiental y electrocatálisis para la reducción de CO₂ y generación de hidrógeno verde.",
        en: "ICREA Research Professor in Physical Chemistry, expert in environmental nanorobotics and electrocatalysis for CO₂ reduction and green hydrogen generation."
      }},
      { name: "Dr. Joan Carles Bruno Argilaguet", lider: false, bio: {
        ca: "Catedràtic d'Enginyeria Mecànica (grup CREVER), especialista en tecnologies de conversió energètica, refrigeració per absorció i poligeneració renovable.",
        es: "Catedrático de Ingeniería Mecánica (grupo CREVER), especialista en tecnologías de conversión energética, refrigeración por absorción y poligeneración renovable.",
        en: "Professor of Mechanical Engineering (CREVER group), specialist in energy conversion technologies, absorption refrigeration and renewable polygeneration."
      }},
      { name: "Dr. Gerard Lligadas", lider: false, bio: {
        ca: "Professor de química de polímers orgànics i química verda, amb 128 publicacions i un h-index de 42. Beca Fulbright i premi ICIQ-BASF d'innovació sostenible.",
        es: "Profesor de química de polímeros orgánicos y química verde, con 128 publicaciones y un índice h de 42. Beca Fulbright y premio ICIQ-BASF de innovación sostenible.",
        en: "Professor researching organic polymer and green chemistry, with 128 publications and an h-index of 42. Fulbright fellow and ICIQ-BASF sustainable innovation award winner."
      }},
      { name: "Dr. Jorge J. Carbó", lider: false, bio: {
        ca: "Catedràtic de Química Computacional, especialista en catàlisi asimètrica i catàlisi per a processos verds i producció d'energia.",
        es: "Catedrático de Química Computacional, especialista en catálisis asimétrica y catálisis para procesos verdes y producción de energía.",
        en: "Professor of Computational Chemistry, specialist in asymmetric catalysis and catalysis for green processes and energy production."
      }},
      { name: "Dr. Francesc Medina Cabello", lider: false, bio: {
        ca: "Catedràtic d'Enginyeria Química, dirigeix el grup CATHETER. Expert en nanomaterials porosos aplicats a la petroquímica i el medi ambient, amb més de 200 articles publicats.",
        es: "Catedrático de Ingeniería Química, dirige el grupo CATHETER. Experto en nanomateriales porosos aplicados a la petroquímica y el medio ambiente, con más de 200 artículos publicados.",
        en: "Professor of Chemical Engineering, heads the CATHETER group. Expert in porous nanomaterials applied to petrochemistry and the environment, with over 200 published articles."
      }},
      { name: "Dr. Óscar Pàmies", lider: false, bio: {
        ca: "Catedràtic de Química, dirigeix el grup SMARTCAT i la Càtedra InnCat. Especialista en catàlisi asimètrica homogènia i hidrogenació, amb premi ICREA Acadèmia dues vegades.",
        es: "Catedrático de Química, dirige el grupo SMARTCAT y la Cátedra InnCat. Especialista en catálisis asimétrica homogénea e hidrogenación, con premio ICREA Acadèmia dos veces.",
        en: "Professor of Chemistry, heads the SMARTCAT group and the InnCat Chair. Specialist in homogeneous asymmetric catalysis and hydrogenation; two-time ICREA Acadèmia award winner."
      }}
    ]
  },
  {
    id: "ch4",
    titleKey: "ch4.title",
    tagKey: "ch4.tag",
    people: [
      { name: "Dr. Salvador Anton Clavé", lider: false, bio: {
        ca: "Catedràtic de Geografia, lidera el grup GRATET. Expert en transformació de destinacions turístiques, guardonat amb el Roy Wolfe Award (2021).",
        es: "Catedrático de Geografía, lidera el grupo GRATET. Experto en transformación de destinos turísticos, galardonado con el Roy Wolfe Award (2021).",
        en: "Professor of Geography, leads the GRATET group. Expert in the transformation of tourist destinations; recipient of the Roy Wolfe Award (2021)."
      }},
      { name: "Dr. Òscar Saladié", lider: false, bio: {
        ca: "Degà de la Facultat de Turisme i Geografia. Investigador de GRATET, expert en canvi climàtic i vulnerabilitat de destinacions turístiques com la Costa Daurada.",
        es: "Decano de la Facultad de Turismo y Geografía. Investigador de GRATET, experto en cambio climático y vulnerabilidad de destinos turísticos como la Costa Daurada.",
        en: "Dean of the Faculty of Tourism and Geography. GRATET researcher, expert in climate change and the vulnerability of tourist destinations such as the Costa Daurada."
      }}
    ]
  },
  {
    id: "ch5",
    titleKey: "ch5.title",
    tagKey: "ch5.tag",
    people: [
      { name: "Dr. Alexandre Fabregat Tomàs", lider: true, bio: {
        ca: "Físic computacional especialitzat en dispersió de contaminants i qualitat de l'aire urbà, amb intel·ligència artificial aplicada a models físics. Premi d'Impacte Social URV (2021).",
        es: "Físico computacional especializado en dispersión de contaminantes y calidad del aire urbano, con inteligencia artificial aplicada a modelos físicos. Premio de Impacto Social URV (2021).",
        en: "Computational physicist specialising in pollutant dispersion and urban air quality, applying AI to physical models. URV Social Impact Award (2021)."
      }},
      { name: "Dr. Albert Samper Sosa", lider: false, bio: {
        ca: "Arquitecte i doctor, expert en geometria fractal aplicada a l'arquitectura. Coordina l'àrea d'Expressió Gràfica a l'Escola d'Arquitectura de la URV.",
        es: "Arquitecto y doctor, experto en geometría fractal aplicada a la arquitectura. Coordina el área de Expresión Gráfica en la Escuela de Arquitectura de la URV.",
        en: "Architect and PhD, expert in fractal geometry applied to architecture. Coordinates the Architectural Graphic Expression area at the URV School of Architecture."
      }},
      { name: "Dr. Francesc Borrull Ballarín", lider: false, bio: {
        ca: "Catedràtic de Química Analítica, dirigeix el grup de Cromatografia. Expert en contaminants orgànics i disruptors endocrins al medi ambient. Premi Research.com Chemistry Leader (2023–2025).",
        es: "Catedrático de Química Analítica, dirige el grupo de Cromatografía. Experto en contaminantes orgánicos y disruptores endocrinos en el medio ambiente. Premio Research.com Chemistry Leader (2023–2025).",
        en: "Professor of Analytical Chemistry, heads the Chromatography research group. Expert in organic pollutants and endocrine disruptors in the environment. Research.com Chemistry Leader Award (2023–2025)."
      }}
    ]
  },
  {
    id: "eix-dret",
    titleKey: "inv.eix.dret",
    tagKey: null,
    people: [
      { name: "Dra. Susana Borràs", lider: true, bio: {
        ca: "Catedràtica de Dret Internacional, experta en dret ambiental i migració climàtica amb perspectiva de gènere. Directora del Màster en Dret Ambiental des de 2008.",
        es: "Catedrática de Derecho Internacional, experta en derecho ambiental y migración climática con perspectiva de género. Directora del Máster en Derecho Ambiental desde 2008.",
        en: "Professor of International Law, expert in environmental law and climate migration with a gender perspective. Director of the Master's in Environmental Law since 2008."
      }},
      { name: "Dr. Endrius Cocciolo", lider: true, bio: {
        ca: "Professor de Dret Públic, IP del projecte europeu «THERESA» sobre regulació de l'hidrogen. Més d'1,78M€ en finançament de projectes (2021–2026).",
        es: "Profesor de Derecho Público, IP del proyecto europeo «THERESA» sobre regulación del hidrógeno. Más de 1,78M€ en financiación de proyectos (2021–2026).",
        en: "Professor of Public Law, PI of the EU project \"THERESA\" on hydrogen regulation. Over €1.78M in project funding (2021–2026)."
      }}
    ]
  },
  {
    id: "eix-clima",
    titleKey: "inv.eix.clima",
    tagKey: null,
    people: [
      { name: "Dr. Enric Aguilar", lider: true, role: {
        ca: "Investigador principal",
        es: "Investigador principal",
        en: "Principal investigator"
      }, bio: {
        ca: "Director de l'IU-RESCAT. Climatòleg expert en dades climàtiques i homogeneïtzació. Codirector en cap de l'International Journal of Climatology.",
        es: "Director del IU-RESCAT. Climatólogo experto en datos climáticos y homogeneización. Codirector jefe del International Journal of Climatology.",
        en: "Director of IU-RESCAT. Climatologist specialising in climate data and homogenisation. Chief co-editor of the International Journal of Climatology."
      }}
    ]
  },
  {
    id: "eix-comm",
    titleKey: "inv.eix.comm",
    tagKey: null,
    people: [
      { name: "Dra. Gisela Cebrián", lider: true, bio: {
        ca: "Professora de Pedagogia, experta en educació per a la sostenibilitat i assemblees climàtiques escolars. Assessora del Getty Conservation Institute i l'EACEA.",
        es: "Profesora de Pedagogía, experta en educación para la sostenibilidad y asambleas climáticas escolares. Asesora del Getty Conservation Institute y la EACEA.",
        en: "Professor of Education, expert in education for sustainability and school climate assemblies. Advisor to the Getty Conservation Institute and EACEA."
      }},
      { name: "Dra. Assumpció Huertas Roig", lider: true, bio: {
        ca: "Professora de Publicitat i Relacions Públiques, experta en comunicació i branding de destinacions turístiques i xarxes socials.",
        es: "Profesora de Publicidad y Relaciones Públicas, experta en comunicación y branding de destinos turísticos y redes sociales.",
        en: "Professor of Advertising and Public Relations, expert in communication and branding of tourist destinations and social media."
      }}
    ]
  },
  {
    id: "eix-eco",
    titleKey: "inv.eix.eco",
    tagKey: null,
    people: [
      { name: "Dr. Josep-Maria Arauzo-Carod", lider: true, bio: {
        ca: "Catedràtic d'Economia, vicedirector de l'IU-RESCAT. Expert en economia urbana i regional, localització industrial i economia circular.",
        es: "Catedrático de Economía, vicedirector del IU-RESCAT. Experto en economía urbana y regional, localización industrial y economía circular.",
        en: "Professor of Economics, deputy director of IU-RESCAT. Expert in urban and regional economics, industrial location and circular economy."
      }},
      { name: "Dr. Juan Antonio Duro", lider: false, bio: {
        ca: "Catedràtic d'Economia, expert en economia del turisme, indicadors de sostenibilitat i economia territorial. Entre els investigadors més citats del seu àmbit.",
        es: "Catedrático de Economía, experto en economía del turismo, indicadores de sostenibilidad y economía territorial. Entre los investigadores más citados de su ámbito.",
        en: "Professor of Economics, expert in tourism economics, sustainability indicators and territorial economics. Among the most cited researchers in his field."
      }}
    ]
  }
];
