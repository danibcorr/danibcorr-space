import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";

const features = [
  {
    title: 'Daniel Bazo Correa',
    description: (
      <>
        Soy un Ingeniero en Sistemas Electrónicos que trabaja principalmente como Científico de Datos. Me apasiona la IA, los datos y sus aplicaciones para mejorar las capacidades humanas.
      </>
    ),
    image: 'https://avatars.githubusercontent.com/u/77023868?v=4',
    links: [
      { label: <FaGithub />, url: 'https://github.com/danibcorr' },
      { label: <FaLinkedin />, url: 'https://linkedin.com/in/danibcorr' },
    ],
  },
];

const projects = [
  {
    title: 'Proyectos de Datos e Inteligencia Artificial',
    description: 'Descubre mis trabajos relacionados con datos e inteligencia artificial.',
    buttonText: 'Ver proyectos',
    anchorId: 'data-ai',
  },
  {
    title: 'Proyectos de Electrónica y Robótica',
    description: 'Explora mis proyectos en el campo de la electrónica y robótica.',
    buttonText: 'Ver proyectos',
    anchorId: 'electronics',
  },
];

function HomepageFeatures() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureContainer}>
          {features.map(({ title, description, image, links }) => (
            <div className={clsx(styles.feature)} key={title}>
              <div className={styles.imageContainer}>
                <img src={image} className={styles.featureImage} alt={title} />
              </div>
              <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.socialLinks}>
                  {links.map(link => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className={styles.projectsTitle}>Proyectos</h1>
        <div className={styles.projectsContainer}>
          {projects.map(({ title, description, buttonText, anchorId }) => (
            <div className={styles.project} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <button
                onClick={() => setSelectedProject(selectedProject === anchorId ? null : anchorId)}
                className={styles.projectButton}
              >
                {buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.projectsDetailSection}>
          {selectedProject === 'data-ai' && (
            <div id="data-ai" className={styles.projectDetail}>
              <h3>Proyectos de Datos e Inteligencia Artificial</h3>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🏫 Wiki de Aprendizaje Automático</h4>
                <p className={styles.projectDescription}>Una wiki en español para almacenar y compartir aprendizajes, notas y código en un solo lugar, con un enfoque en el aprendizaje automático.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/machine-learning-wiki" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://danibcorr.gitbook.io/" target="_blank" rel="noopener noreferrer"><TbWorld /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🎵 Clasificador de Géneros Musicales</h4>
                <p className={styles.projectDescription}>Clasificador de géneros musicales para parámetros de ecualización automática de JamesDSP, utilizando Redes Neuronales Convolucionales con Transformers.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/MusicGenreClassifier" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>💸 Suite de Ventas Streamlit</h4>
                <p className={styles.projectDescription}>Plataforma web integral para análisis y visualización de datos, impulsada con Streamlit, complementada con un clasificador automatizado de ítems que optimiza la asignación de etiquetas.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/streamlit-sales-suite" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>📄 Papers con Código</h4>
                <p className={styles.projectDescription}>Implementaciones de artículos de aprendizaje automático y profundo en código.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/papers-with-code" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🎓 Asistente Universitario</h4>
                <p className={styles.projectDescription}>Herramienta que simplifica tareas académicas y administrativas para estudiantes, educadores e investigadores, proporcionando herramientas para gestionar metadatos de documentos, convertir PDFs a Markdown, transcribir audio, analizar estadísticas de calificaciones y más.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/university-helper" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🧪 Librería Ciencia de Datos</h4>
                <p className={styles.projectDescription}>Librería propia que he desarrollado para automatizar y agilizar ciertos procesos durante mi trabajo como Científico de Datos.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/data-scientist-utilities" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>📚 Tu Compañero de Wattpad</h4>
                <p className={styles.projectDescription}>Herramienta para obtener información de Wattpad y conocer usuarios con los mismos gustos y accesibles para interactuar con ellos.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/wattpad-mate" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
            </div>
          )}

          {selectedProject === 'electronics' && (
            <div id="electronics" className={styles.projectDetail}>
              <h3>Proyectos de Electrónica y Robótica</h3>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🏔️ Sistema de Monitoreo Ambiental</h4>
                <p className={styles.projectDescription}>Sistema de monitoreo IoT para comunicaciones inalámbricas utilizando Arduino y ESP32. Propuesta realizada para el proyecto final del Máster en Telemática y Redes de Telecomunicación de la UMA, en la asignatura de Ingeniería de Software para el Internet de las Cosas.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/monitoreo-ambiental-IoT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🎛️ Electrónica con Tiva C</h4>
                <p className={styles.projectDescription}>Proyecto de sistemas embebidos con Tiva C utilizando comunicaciones UART e I2C.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/electronics-with-tivac" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🎛️ Electrónica con Arduino</h4>
                <p className={styles.projectDescription}>Repositorio que contiene una colección de proyectos de Arduino y Processing desarrollados para el curso de Electrónica Creativa en la Universidad de Málaga (UMA). Enfoque principal en un proyecto de brazo robótico, con trabajos adicionales en sensores piezoeléctricos y lámparas LED.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/electronics-with-arduino-uma" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://www.instructables.com/Robotic-Arm-Ft-Arduino-Mega-TheGHIZmo-Aarav-G/" target="_blank" rel="noopener noreferrer"><TbWorld /></a>
                  <a href="https://www.youtube.com/watch?v=XPU3eNG0Fps" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>👀 Controlador Kinect para PowerPoint</h4>
                <p className={styles.projectDescription}>Desarrollo de un programa que permite el control natural de presentaciones de PowerPoint utilizando gestos y voz.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/danibcorr/kinect-power-point" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>🤖 Microbot Sumo</h4>
                <p className={styles.projectDescription}>Diseño de un microbot para lucha de sumo.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/JeyJeysp/Microbotics_UMA" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://www.youtube.com/watch?v=QDrDcFWdLiE" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;