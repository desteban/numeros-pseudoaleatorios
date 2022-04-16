import * as React from 'react';

import Layout from '../components/layout';
import { Seo } from '../components';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<div className="center">
			<h1>404: Not Found</h1>
			<p>Parece que no podemos encontrar lo que nos has pedido</p>
		</div>
	</Layout>
);

export default NotFoundPage;
