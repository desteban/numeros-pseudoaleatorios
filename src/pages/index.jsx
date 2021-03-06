import * as React from 'react';
import { Link } from 'gatsby';
import { Layout, Seo } from '../components';
import promedioRsvg from '../images/promedior.inline.svg';
import limiteInferior from '../images/limiteInferior.inline.svg';
import limiteSuperior from '../images/limiteSuperior.inline.svg';

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<h1>Números pseudoaleatorios</h1>
		<p>
			Los números pseudoaleatorios son números que se generan en el proceso de parecer
			aleatorios, pero en realidad no lo son. Desde un punto de vista estadístico, las
			secuencias de números pseudoaleatorios no muestran ningún patrón o regularidad aparente,
			a pesar de ser generadas por algoritmos completamente deterministas donde las mismas
			condiciones iniciales siempre producen los mismos resultados.
		</p>
		<article>
			<Link to="/cuadrados-medios">
				<h2>Cuadrados medios</h2>
			</Link>
			<p>
				Este algoritmo no congruencial fue propuesto en la década de los cuarenta del siglo XX
				por Von Neumann y Metrópolis Requiere un número entero detonador (llamado semilla) con
				D dígitos, el cual es elevado al cuadrado para seleccionar del resultado los D dígitos
				del centro; el primer número r<sub>i</sub> se determina simplemente anteponiendo el " 0
				" a esos dígitos. Para obtener el segundo r<sub>i</sub> se sigue el mismo
				procedimiento, sólo que ahora se elevan al cuadrado los D dígitos del centro que se
				seleccionaron para obtener el primer r<sub>i</sub> Este método se repite hasta obtener
				n números r<sub>i</sub>.
			</p>

			<ol>
				<li>
					Seleccionar una semilla (X<sub>i</sub>) con D dígitos (D {'>'} 3)
				</li>
				<li>
					Sea Y<sub>0</sub> el resultado de elevar X<sub>0</sub> al cuadrado; sea X<sub>1</sub>{' '}
					= a los D dígitos del centro y sea = 0. D dígitos del centro
				</li>
				<li>
					Sea Y<sub>1</sub> = resultado de elevar X<sub>i</sub> al cuadrado; sea X
					<sub>i + 1</sub> = a los D dígitos del centro, y sea r<sub>i</sub>=0. D dígitos del
					centro para toda i = 1,2,3, ... n
				</li>
				<li>Repetir el paso 3 hasta obtener los n números r deseados.</li>
			</ol>

			<p>
				<Link to="/cuadrados-medios">
					A continuación, te mostramos una calculadora para hacer mucho más fácil este proceso
				</Link>
			</p>
		</article>
		<article>
			<Link to="/productos-medios">
				<h2>Productos medios</h2>
			</Link>
			<p>
				La mecánica de generación de números pseudoaleatorios de este algoritmo no congruencial
				es similar a la del algoritmo de cuadrados medios. La diferencia entre ambos radica en
				que el algoritmo de productos medios requiere dos semillas, ambas con D dígitos;
				además, en lugar de elevarlas al cuadrado, las semillas se multiplican y del producto
				se seleccionan los D dígitos del centro, los cuales formarán el primer número
				pseudoaleatorio r<sub>i</sub> = 0. D dígitos. Después se elimina una semilla, y la otra
				se multiplica por el primer número de D dígitos, para luego seleccionar del producto
				los D dígitos que conformarán un segundo número r<sub>i</sub> Entonces se elimina la
				segunda semilla y se multiplican el primer número de D dígitos por el segundo número de
				D dígitos; del producto se obtiene el tercer número r<sub>i</sub>. Siempre se irá
				eliminando el número más antiguo, y el procedimiento se repetirá hasta generar los n
				números pseudoaleatorios. A continuación, se presentan con más detalle los pasos del
				método para generar números con el algoritmo de producto medios.
			</p>

			<ol>
				<li>
					Seleccionar una semilla (X<sub>0</sub>) con D dígitos (D {'>'} 3)
				</li>
				<li>
					Seleccionar una semilla (X<sub>1</sub>) con D dígitos (D {'>'} 3)
				</li>
				<li>
					Sea Y<sub>0</sub> = X<sub>0</sub> * X<sub>1</sub>; sea X<sub>2</sub> = los D dígitos
					del centro, y sea r<sub>i</sub> = 0. D dígitos del centro.
				</li>
				<li>
					Sea Y<sub>i</sub> = X<sub>i</sub> * X<sub>i + 1</sub>); sea X<sub>i + 2</sub> = los D
					dígitos del centro, y sea r<sub>i + 1</sub> = 0. D dígitos del centro para toda i =
					1, 2, 3, ... n
				</li>
				<li>Repetir el paso 4 hasta obtener los n números r, deseados.</li>
			</ol>

			<p>
				<Link to="/productos-medios">
					A continuación, te mostramos una calculadora para hacer mucho más fácil este proceso
				</Link>
			</p>
		</article>
		<article>
			<Link to="/multiplicador-constante">
				<h2>Multiplicador constante</h2>
			</Link>

			<p>
				Este algoritmo no congruencial es similar al algoritmo de productos medios. Los
				siguientes son los pasos necesarios para generar números pseudoaleatorios con el
				algoritmo de multiplicador constante.
			</p>

			<ol>
				<li>
					Seleccionar una semilla (X<sub>0</sub>) con D dígitos (D {'>'} 3)
				</li>
				<li>Seleccionar una constante (a) con D dígitos (D {'>'} 3)</li>
				<li>
					Sea Y<sub>0</sub> = a * X<sub>0</sub> sea X<sub>1</sub> = los D dígitos del centro, y
					sea r<sub>i</sub> = O. D dígitos del centro
				</li>
				<li>
					Sea Y<sub>2</sub> = a * X<sub>i</sub>; sea X<sub>i + 1</sub>, = los D dígitos del
					centro, y sea r<sub>i + 1</sub> = O.D dígitos del centro para toda i = 1, 2, 3, ...
					n.
				</li>
				<li>Repetir e l paso 4 hasta obtener los n números r. deseados</li>
			</ol>

			<p>
				<Link to="/multiplicador-constante">
					A continuación, te mostramos una calculadora para hacer mucho más fácil este proceso
				</Link>
			</p>
		</article>

		<div className="prebas">
			<h2 id="pruebas">Pruebas</h2>

			<article>
				<h3>Prueba de medias</h3>

				<p>
					Una de las propiedades que deben cumplir los números del conjunto r¡, es que el valor
					esperado sea igual a 0.5. La prueba que busca determinar lo anterior es la llamada
					prueba de medias, en la cual se plantean las siguientes hipótesis:
				</p>
				<div className="ecuacion center">
					<p>
						H<sub>0</sub>: 0.5
						<br />H<sub>1</sub>: 0.5
					</p>
				</div>
				<p>
					La prueba de medias consiste en determinar el promedio de los números que contiene el
					conjunto r mediante la ecuación siguiente:
				</p>
				<div className="ecuacion center">
					<img src={promedioRsvg} alt="Ecuacion de promedio" style={{ maxWidth: 150 }} />
				</div>

				<p>
					Después se calculan los límites de aceptación inferior y superior con las ecuaciones
					siguientes:
				</p>
				<div className="ecuacion center limites">
					<img src={limiteInferior} alt="Ecuacion para calcular el limite inferior" />
					<br />
					<img src={limiteSuperior} alt="Ecuacion para calcular el limite superior" />
				</div>

				<p>
					Si el valor de <span className="bar">r</span> se encuentra entre los límites de
					aceptación, concluimos que no se puede rechazar que el conjunto r<sub>i</sub> tiene
					un valor esperado de 0.5 con un nivel de aceptación de 1 - α. En caso contrario se
					rechaza que el conjunto r<sub>i</sub> tiene un valor esperado de 0.5.
				</p>
			</article>
		</div>
	</Layout>
);

export default IndexPage;
