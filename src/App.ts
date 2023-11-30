import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
<header>
	<h1 class="text-4xl mb-4">Info Site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;