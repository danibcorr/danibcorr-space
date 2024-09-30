import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <div className="text--center padding-horiz--md">
              <h1>¡Hola! 👋</h1>
              <h2>Soy Dani, Ingeniero en Sistemas Electrónicos</h2>
              <p>
                Te doy la bienvenida a mi wiki personal. Este es mi espacio donde
                comparto con entusiasmo lo que voy aprendiendo sobre inteligencia
                artificial, ciencia de datos y programación. Mi intención es convertir
                este sitio en un recurso centralizado y accesible para aquellos que
                buscan ampliar sus conocimientos en estas áreas.
              </p>
              <p>
                El contenido está organizado en categorías para facilitar la
                navegación. Cada sección incluye documentación detallada, ejemplos
                prácticos y referencias útiles.
              </p>
              <p>
                Te invito a explorar{' '}
                <a href="https://danibcorr.github.io/linktree/" target="_blank" rel="noopener noreferrer">
                  mi página personal
                </a>{' '}
                para conocer más sobre mis otros proyectos, o a conectarte conmigo a
                través de{' '}
                <a href="https://www.linkedin.com/in/danibcorr/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>.
              </p>
              <p>
                Espero que encuentres este sitio útil y que disfrutes aprendiendo
                tanto como yo disfruto compartiendo mis conocimientos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}